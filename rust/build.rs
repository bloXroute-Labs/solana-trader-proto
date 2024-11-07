use std::path::Path;
use std::fs;
use std::fs::DirBuilder;
use std::io::Error;

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let out_dir = std::env::var("OUT_DIR").unwrap();
    println!("cargo:warning=Proto output dir: {}", out_dir);

    let source = Path::new("../proto");
    let destination = Path::new("proto");

    // 1. If we have a parent proto folder (../proto), then this
    //    means we are doing a workspace build. In this case, we refresh
    //    our local proto folder with the parent's proto folder.
    // 2. Not shown, if we don't have a parent proto folder, then we are doing a
    //    standalone build. In this case, we assume the local proto folder is already
    //    in place either by:
    //    a. copying into place with the workspace Makefile proto-package-rust-api target
    //    or
    //    b. included in the crate package via the Cargo.toml package.include directive
    if source.exists() {
        if destination.exists() {
            println!("cargo:warning=Removing existing proto directory");
            fs::remove_dir_all(&destination)?;
        }
        println!("cargo:warning=Copying proto directory from {:?} to {:?}", source, destination);
        copy_dir_all(&source, &destination)?;
    }

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

fn copy_dir_all(src: &Path, dst: &Path) -> Result<(), Error> {
    if !dst.exists() {
        DirBuilder::new().recursive(true).create(dst)?;
    }
    for entry in fs::read_dir(src)? {
        let entry = entry?;
        let file_type = entry.file_type()?;
        if file_type.is_dir() {
            copy_dir_all(&entry.path(), &dst.join(entry.file_name()))?;
        } else {
            fs::copy(&entry.path(), &dst.join(entry.file_name()))?;
        }
    }
    Ok(())
}
