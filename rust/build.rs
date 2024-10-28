fn main() -> Result<(), Box<dyn std::error::Error>> {
    tonic_build::configure()
        .build_server(false)
        .type_attribute(".", "#[derive(::serde_derive::Serialize, ::serde_derive::Deserialize)]")
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
        .compile_protos(&["proto/api.proto", "proto/common.proto"], &["proto"])
        .unwrap();
    Ok(())
}