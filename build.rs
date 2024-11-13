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

pub fn string_to_u64<'de, D>(deserializer: D) -> Result<u64, D::Error>
where
    D: serde::Deserializer<'de>,
{
    let s = String::deserialize(deserializer)?;
    s.parse::<u64>().map_err(serde::de::Error::custom)
}
pub fn string_to_i64<'de, D>(deserializer: D) -> Result<i64, D::Error>
where
    D: serde::Deserializer<'de>,
{
    let s = String::deserialize(deserializer)?;
    s.parse::<i64>().map_err(serde::de::Error::custom)
}
pub fn string_to_bytes<'de, D>(deserializer: D) -> Result<Vec<u8>, D::Error>
where
    D: serde::Deserializer<'de>,
{
    let s = String::deserialize(deserializer)?;
    general_purpose::STANDARD.decode(&s).map_err(serde::de::Error::custom)
}
pub fn string_to_f64<'de, D>(deserializer: D) -> Result<f64, D::Error>
where
    D: serde::Deserializer<'de>,
{
    let s = String::deserialize(deserializer)?;
    s.parse::<f64>().map_err(serde::de::Error::custom)
}
// End of custom code snippet
"#;
    let generated_file_path = Path::new(&out_dir).join("api.rs");
    let mut generated_code = fs::read_to_string(&generated_file_path)?;
    generated_code = format!("{}{}", code_snippet, generated_code);
    fs::write(generated_file_path, generated_code)?;

    Ok(())
}

fn add_field_attributes(builder: Builder) -> Builder {
    // TODO: Couldn't figure out how to just assign fields to a Vector and iterate over them
    //       due to Rust ownership issues. So, just manually added each field.

    // Reference for how to format path parameter to select elements in proto file:
    // https://docs.rs/tonic-build/latest/tonic_build/struct.Config.html#method.btree_map

    // Field renames
    builder
        .field_attribute("programID", "#[serde(rename = \"programID\")]")
        // Custom serializations
        .field_attribute(
            "tradeFeeRate",
            "#[serde(deserialize_with = \"string_to_u64\")]",
        )
        .field_attribute("height", "#[serde(deserialize_with = \"string_to_u64\")]")
        .field_attribute(
            ".api.ProjectPool.token1Reserves",
            "#[serde(deserialize_with = \"string_to_i64\")]",
        )
        .field_attribute(
            ".api.ProjectPool.token2Reserves",
            "#[serde(deserialize_with = \"string_to_i64\")]",
        )
        .field_attribute("time", "#[serde(deserialize_with = \"string_to_i64\")]")
        .field_attribute("openTime", "#[serde(deserialize_with = \"string_to_u64\")]")
        .field_attribute(
            ".api.Block.slot",
            "#[serde(deserialize_with = \"string_to_u64\")]",
        )
        .field_attribute(
            ".api.GetTransactionResponse.slot",
            "#[serde(deserialize_with = \"string_to_u64\")]",
        )
        .field_attribute(
            ".api.GetOrderStatusStreamResponse.slot",
            "#[serde(deserialize_with = \"string_to_i64\")]",
        )
        .field_attribute(
            ".api.GetMarketDepthsStreamResponse.slot",
            "#[serde(deserialize_with = \"string_to_i64\")]",
        )
        .field_attribute(
            ".api.GetQuotesStreamResponse.slot",
            "#[serde(deserialize_with = \"string_to_i64\")]",
        )
        .field_attribute(
            ".api.GetTickersStreamResponse.slot",
            "#[serde(deserialize_with = \"string_to_i64\")]",
        )
        .field_attribute(
            ".api.GetTradesStreamResponse.slot",
            "#[serde(deserialize_with = \"string_to_i64\")]",
        )
        .field_attribute(
            ".api.GetSwapsStreamResponse.slot",
            "#[serde(deserialize_with = \"string_to_i64\")]",
        )
        .field_attribute(
            ".api.GetNewRaydiumPoolsByTransactionResponse.slot",
            "#[serde(deserialize_with = \"string_to_i64\")]",
        )
        .field_attribute(
            ".api.GetNewRaydiumPoolsResponse.slot",
            "#[serde(deserialize_with = \"string_to_i64\")]",
        )
        .field_attribute(
            ".api.GetZetaTransactionStreamResponse.slot",
            "#[serde(deserialize_with = \"string_to_i64\")]",
        )
        .field_attribute(
            ".api.GetPoolReservesStreamResponse.slot",
            "#[serde(deserialize_with = \"string_to_i64\")]",
        )
        .field_attribute(
            ".api.GetPricesStreamResponse.slot",
            "#[serde(deserialize_with = \"string_to_i64\")]",
        )
        .field_attribute(
            ".api.GetPumpFunSwapsStreamResponse.slot",
            "#[serde(deserialize_with = \"string_to_i64\")]",
        )
        .field_attribute(
            ".api.GetPumpFunNewTokensStreamResponse.slot",
            "#[serde(deserialize_with = \"string_to_i64\")]",
        )
        .field_attribute(
            "feeAtPercentile",
            "#[serde(deserialize_with = \"string_to_u64\")]",
        )
        .field_attribute(
            ".api.PostPumpFunSwapRequestSol.solAmount",
            "#[serde(deserialize_with = \"string_to_f64\")]",
        )
        .field_attribute(
            ".api.GetPumpFunSwapsStreamResponse.solAmount",
            "#[serde(deserialize_with = \"string_to_u64\")]",
        )
        .field_attribute(
            "virtualSolReserves",
            "#[serde(deserialize_with = \"string_to_u64\")]",
        )
        .field_attribute(
            "virtualTokenReserves",
            "#[serde(deserialize_with = \"string_to_u64\")]",
        )
        .field_attribute("data", "#[serde(deserialize_with = \"string_to_bytes\")]")
}
