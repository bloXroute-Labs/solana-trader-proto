use std::fs;
use std::path::Path;
use tonic_build::Builder;

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let out_dir = std::env::var("OUT_DIR").unwrap();
    println!("cargo:warning=Proto output dir: {}", out_dir);

    let builder = tonic_build::configure()
        .protoc_arg("--experimental_allow_proto3_optional")
        .build_server(false)
        .compile_well_known_types(true)
        .extern_path(
            ".google.protobuf.BytesValue",
            "::prost::alloc::vec::Vec<u8>",
        )
        .extern_path(
            ".google.protobuf.StringValue",
            "::prost::alloc::string::String",
        )
        .extern_path(".google.protobuf", "::prost_wkt_types")
        .type_attribute(
            ".",
            "#[derive(::serde_derive::Serialize, ::serde_derive::Deserialize)]",
        )
        .type_attribute(".", "#[serde(rename_all = \"camelCase\")]");

    let builder = add_field_attributes(builder);

    builder
        .compile_protos(&["proto/api.proto", "proto/common.proto"], &["proto"])
        .unwrap();

    // Add custom code snippet to the generated file. This will handle deserializing a string to a u64.
    // Several fields are annotated in the tonic build process to reference this function with a serde annotation.
    let code_snippet = r#"// This code snippet is custom inserted by the build script.
// Since the generated code does not support deserializing a string to a u64, 
// we need to add a custom deserializer function and add in serde annotatotions to individual 
// fields below that need this.
// See build.rs for more details.
use serde::Deserialize;
use base64::{Engine as _, engine::general_purpose};
use serde_with::serde_as;
use serde_with::DisplayFromStr;

#[cfg_attr(feature="serde_test" ,serde(with = "As::<Vec<(Same, Same)>>"))]

pub fn string_to_bytes<'de, D>(deserializer: D) -> Result<Vec<u8>, D::Error>
where
    D: serde::Deserializer<'de>,
{
    let s = <String>::deserialize(deserializer).map_err(serde::de::Error::custom)?;
    general_purpose::STANDARD.decode(s).map_err(serde::de::Error::custom)

}
// End of custom code snippet
"#;
    let generated_file_path = Path::new(&out_dir).join("api.rs");
    let mut generated_code = fs::read_to_string(&generated_file_path)?;
    generated_code = format!("{}{}", code_snippet, generated_code);
    generated_code = modify_u64_fields(generated_code);
    fs::write(generated_file_path, generated_code)?;

    Ok(())
}

fn modify_u64_fields(content: String) -> String {
    let re = regex::Regex::new(r"(\s*)(pub\s+)?(\w+\s*:\s*[uif]64s?.*)").unwrap();

    // Replace the field definition with the same definition plus `#[serde_as(as = "DisplayFromStr")]`
    re.replace_all(&content, |caps: &regex::Captures| {
        let padding = &caps[1];
        let access_modifier = &caps[2];
        let field = &caps[3];

        format!(
            "{}#[serde_as(as = \"DisplayFromStr\")]{}{}{}",
            padding,
            padding,
            access_modifier,
            field
        )
    }).to_string()
}

fn add_field_attributes(builder: Builder) -> Builder {
    // TODO: Couldn't figure out how to just assign fields to a Vector and iterate over them
    //       due to Rust ownership issues. So, just manually added each field.

    // Reference for how to format path parameter to select elements in proto file:
    // https://docs.rs/tonic-build/latest/tonic_build/struct.Config.html#method.btree_map

    builder
        // Field renames
        .field_attribute("programID", "#[serde(rename = \"programID\")]")
        .field_attribute("accountID", "#[serde(rename = \"accountID\")]")
}
