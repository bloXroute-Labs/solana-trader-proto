// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var ffi_ffi_pb = require('../ffi/ffi_pb.js');
var api_pb = require('../api_pb.js');

function serialize_ffi_JupiterComputeRoutesRequest(arg) {
  if (!(arg instanceof ffi_ffi_pb.JupiterComputeRoutesRequest)) {
    throw new Error('Expected argument of type ffi.JupiterComputeRoutesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ffi_JupiterComputeRoutesRequest(buffer_arg) {
  return ffi_ffi_pb.JupiterComputeRoutesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ffi_JupiterComputeRoutesResponse(arg) {
  if (!(arg instanceof ffi_ffi_pb.JupiterComputeRoutesResponse)) {
    throw new Error('Expected argument of type ffi.JupiterComputeRoutesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ffi_JupiterComputeRoutesResponse(buffer_arg) {
  return ffi_ffi_pb.JupiterComputeRoutesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ffi_JupiterIsReadyRequest(arg) {
  if (!(arg instanceof ffi_ffi_pb.JupiterIsReadyRequest)) {
    throw new Error('Expected argument of type ffi.JupiterIsReadyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ffi_JupiterIsReadyRequest(buffer_arg) {
  return ffi_ffi_pb.JupiterIsReadyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ffi_JupiterIsReadyResponse(arg) {
  if (!(arg instanceof ffi_ffi_pb.JupiterIsReadyResponse)) {
    throw new Error('Expected argument of type ffi.JupiterIsReadyResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ffi_JupiterIsReadyResponse(buffer_arg) {
  return ffi_ffi_pb.JupiterIsReadyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ffi_JupiterPairToAccountsRequest(arg) {
  if (!(arg instanceof ffi_ffi_pb.JupiterPairToAccountsRequest)) {
    throw new Error('Expected argument of type ffi.JupiterPairToAccountsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ffi_JupiterPairToAccountsRequest(buffer_arg) {
  return ffi_ffi_pb.JupiterPairToAccountsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ffi_JupiterPairToAccountsResponse(arg) {
  if (!(arg instanceof ffi_ffi_pb.JupiterPairToAccountsResponse)) {
    throw new Error('Expected argument of type ffi.JupiterPairToAccountsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ffi_JupiterPairToAccountsResponse(buffer_arg) {
  return ffi_ffi_pb.JupiterPairToAccountsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ffi_JupiterSwapTxRequest(arg) {
  if (!(arg instanceof ffi_ffi_pb.JupiterSwapTxRequest)) {
    throw new Error('Expected argument of type ffi.JupiterSwapTxRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ffi_JupiterSwapTxRequest(buffer_arg) {
  return ffi_ffi_pb.JupiterSwapTxRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ffi_JupiterSwapTxResponse(arg) {
  if (!(arg instanceof ffi_ffi_pb.JupiterSwapTxResponse)) {
    throw new Error('Expected argument of type ffi.JupiterSwapTxResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ffi_JupiterSwapTxResponse(buffer_arg) {
  return ffi_ffi_pb.JupiterSwapTxResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ffi_SolanaAccountsRequest(arg) {
  if (!(arg instanceof ffi_ffi_pb.SolanaAccountsRequest)) {
    throw new Error('Expected argument of type ffi.SolanaAccountsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ffi_SolanaAccountsRequest(buffer_arg) {
  return ffi_ffi_pb.SolanaAccountsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ffi_SolanaAccountsResponse(arg) {
  if (!(arg instanceof ffi_ffi_pb.SolanaAccountsResponse)) {
    throw new Error('Expected argument of type ffi.SolanaAccountsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ffi_SolanaAccountsResponse(buffer_arg) {
  return ffi_ffi_pb.SolanaAccountsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


//
// FFI service definition for binding to external Typescript implementations.
//
// The FFI service should avoid network calls, since it makes calls to the regular Solana RPC endpoint. Instead, accounts
// should be provided over this interface from for e.g. Geyser stream.
//
// The initialization of this service is a bit complex, since API and FFI service have dependencies both ways. The flow
// should be as follows:
//
// 1. FFI server starts its GRPC component and binds to an interface. At this point, it does not yet do anything.
// 2. API starts and connects to FFI server. API opens a connection for FFI to query accounts.
// 3. API starts querying if FFI server is ready.
// 4. FFI server requests and loads accounts, then initializes Jupiter classes. Once ready, flips the boolean and
// indicates all accounts API should track (so it doesn't try to store literally every account from Geyser)
// 5. API continues normal startup.
//
// More visual representation:
//
// 1.0 FFI (starts)
//
// 2.0 FFI <- SolanaAccountsStream() <- API (starts and opens stream)
//
// 3.0 FFI <- JupiterIsReadyRequest() <- API (repeatedly on interval)
// 3.1 FFI -> JupiterIsReadyResponse(false, []) -> API (not ready)
//
// 4.0 FFI -> SolanaAccountsRequest() -> API (initializing)
// 4.1 FFI <- SolanaAccountsResponse() <- API (initializing)
// 4.2 FFI -> JupiterIsReadyResponse(true, [accountIDs]) -> API
//
// 5.0 FFI <-> SolanaAccountsRequest() (etc.) -> API (normal operation)
// 5.1 FFI <-> JupiterComputeRoutes() (etc.) <-> API (normal operation)
//
var FFIService = exports.FFIService = {
  // reversed streaming: API provides accounts
solanaAccountsStream: {
    path: '/ffi.FFI/SolanaAccountsStream',
    requestStream: true,
    responseStream: true,
    requestType: ffi_ffi_pb.SolanaAccountsResponse,
    responseType: ffi_ffi_pb.SolanaAccountsRequest,
    requestSerialize: serialize_ffi_SolanaAccountsResponse,
    requestDeserialize: deserialize_ffi_SolanaAccountsResponse,
    responseSerialize: serialize_ffi_SolanaAccountsRequest,
    responseDeserialize: deserialize_ffi_SolanaAccountsRequest,
  },
  jupiterIsReady: {
    path: '/ffi.FFI/JupiterIsReady',
    requestStream: false,
    responseStream: false,
    requestType: ffi_ffi_pb.JupiterIsReadyRequest,
    responseType: ffi_ffi_pb.JupiterIsReadyResponse,
    requestSerialize: serialize_ffi_JupiterIsReadyRequest,
    requestDeserialize: deserialize_ffi_JupiterIsReadyRequest,
    responseSerialize: serialize_ffi_JupiterIsReadyResponse,
    responseDeserialize: deserialize_ffi_JupiterIsReadyResponse,
  },
  jupiterPairToAccounts: {
    path: '/ffi.FFI/JupiterPairToAccounts',
    requestStream: false,
    responseStream: false,
    requestType: ffi_ffi_pb.JupiterPairToAccountsRequest,
    responseType: ffi_ffi_pb.JupiterPairToAccountsResponse,
    requestSerialize: serialize_ffi_JupiterPairToAccountsRequest,
    requestDeserialize: deserialize_ffi_JupiterPairToAccountsRequest,
    responseSerialize: serialize_ffi_JupiterPairToAccountsResponse,
    responseDeserialize: deserialize_ffi_JupiterPairToAccountsResponse,
  },
  jupiterComputeRoutes: {
    path: '/ffi.FFI/JupiterComputeRoutes',
    requestStream: false,
    responseStream: false,
    requestType: ffi_ffi_pb.JupiterComputeRoutesRequest,
    responseType: ffi_ffi_pb.JupiterComputeRoutesResponse,
    requestSerialize: serialize_ffi_JupiterComputeRoutesRequest,
    requestDeserialize: deserialize_ffi_JupiterComputeRoutesRequest,
    responseSerialize: serialize_ffi_JupiterComputeRoutesResponse,
    responseDeserialize: deserialize_ffi_JupiterComputeRoutesResponse,
  },
  jupiterSwapTx: {
    path: '/ffi.FFI/JupiterSwapTx',
    requestStream: false,
    responseStream: false,
    requestType: ffi_ffi_pb.JupiterSwapTxRequest,
    responseType: ffi_ffi_pb.JupiterSwapTxResponse,
    requestSerialize: serialize_ffi_JupiterSwapTxRequest,
    requestDeserialize: deserialize_ffi_JupiterSwapTxRequest,
    responseSerialize: serialize_ffi_JupiterSwapTxResponse,
    responseDeserialize: deserialize_ffi_JupiterSwapTxResponse,
  },
};

exports.FFIClient = grpc.makeGenericClientConstructor(FFIService);
