fn main() -> Result<(), Box<dyn std::error::Error>> {
    let out_dir = std::env::var("OUT_DIR").unwrap();
    println!("cargo:warning=Proto output dir: {}", out_dir);

    tonic_build::configure()
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
        .type_attribute(
            ".",
            "#[serde(rename_all = \"camelCase\")]"
        )
        .compile_protos(&["proto/api.proto", "proto/common.proto"], &["proto"])
        .unwrap();

    Ok(())
}
