pub mod api {
    include!(concat!(env!("OUT_DIR"), "/api.rs"));
}

pub use self::api::*;

pub mod common {
    include!(concat!(env!("OUT_DIR"), "/common.rs"));
}

pub use self::common::*;

pub mod google_api {
    include!(concat!(env!("OUT_DIR"), "/google.api.rs"));
}

pub mod grpc_gateway {
    include!(concat!(
        env!("OUT_DIR"),
        "/grpc.gateway.protoc_gen_openapiv2.options.rs"
    ));
}
