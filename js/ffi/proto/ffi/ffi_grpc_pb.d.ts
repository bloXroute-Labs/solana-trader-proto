// package: ffi
// file: ffi/ffi.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as ffi_ffi_pb from "../ffi/ffi_pb";
import * as common_pb from "../common_pb";

interface IFFIService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    solanaAccountsStream: IFFIService_ISolanaAccountsStream;
    jupiterIsReady: IFFIService_IJupiterIsReady;
    jupiterPairToAccounts: IFFIService_IJupiterPairToAccounts;
    jupiterComputeRoutes: IFFIService_IJupiterComputeRoutes;
    jupiterSwapTx: IFFIService_IJupiterSwapTx;
}

interface IFFIService_ISolanaAccountsStream extends grpc.MethodDefinition<ffi_ffi_pb.SolanaAccountsResponse, ffi_ffi_pb.SolanaAccountsRequest> {
    path: "/ffi.FFI/SolanaAccountsStream";
    requestStream: true;
    responseStream: true;
    requestSerialize: grpc.serialize<ffi_ffi_pb.SolanaAccountsResponse>;
    requestDeserialize: grpc.deserialize<ffi_ffi_pb.SolanaAccountsResponse>;
    responseSerialize: grpc.serialize<ffi_ffi_pb.SolanaAccountsRequest>;
    responseDeserialize: grpc.deserialize<ffi_ffi_pb.SolanaAccountsRequest>;
}
interface IFFIService_IJupiterIsReady extends grpc.MethodDefinition<ffi_ffi_pb.JupiterIsReadyRequest, ffi_ffi_pb.JupiterIsReadyResponse> {
    path: "/ffi.FFI/JupiterIsReady";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ffi_ffi_pb.JupiterIsReadyRequest>;
    requestDeserialize: grpc.deserialize<ffi_ffi_pb.JupiterIsReadyRequest>;
    responseSerialize: grpc.serialize<ffi_ffi_pb.JupiterIsReadyResponse>;
    responseDeserialize: grpc.deserialize<ffi_ffi_pb.JupiterIsReadyResponse>;
}
interface IFFIService_IJupiterPairToAccounts extends grpc.MethodDefinition<ffi_ffi_pb.JupiterPairToAccountsRequest, ffi_ffi_pb.JupiterPairToAccountsResponse> {
    path: "/ffi.FFI/JupiterPairToAccounts";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ffi_ffi_pb.JupiterPairToAccountsRequest>;
    requestDeserialize: grpc.deserialize<ffi_ffi_pb.JupiterPairToAccountsRequest>;
    responseSerialize: grpc.serialize<ffi_ffi_pb.JupiterPairToAccountsResponse>;
    responseDeserialize: grpc.deserialize<ffi_ffi_pb.JupiterPairToAccountsResponse>;
}
interface IFFIService_IJupiterComputeRoutes extends grpc.MethodDefinition<ffi_ffi_pb.JupiterComputeRoutesRequest, ffi_ffi_pb.JupiterComputeRoutesResponse> {
    path: "/ffi.FFI/JupiterComputeRoutes";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ffi_ffi_pb.JupiterComputeRoutesRequest>;
    requestDeserialize: grpc.deserialize<ffi_ffi_pb.JupiterComputeRoutesRequest>;
    responseSerialize: grpc.serialize<ffi_ffi_pb.JupiterComputeRoutesResponse>;
    responseDeserialize: grpc.deserialize<ffi_ffi_pb.JupiterComputeRoutesResponse>;
}
interface IFFIService_IJupiterSwapTx extends grpc.MethodDefinition<ffi_ffi_pb.JupiterSwapTxRequest, ffi_ffi_pb.JupiterSwapTxResponse> {
    path: "/ffi.FFI/JupiterSwapTx";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ffi_ffi_pb.JupiterSwapTxRequest>;
    requestDeserialize: grpc.deserialize<ffi_ffi_pb.JupiterSwapTxRequest>;
    responseSerialize: grpc.serialize<ffi_ffi_pb.JupiterSwapTxResponse>;
    responseDeserialize: grpc.deserialize<ffi_ffi_pb.JupiterSwapTxResponse>;
}

export const FFIService: IFFIService;

export interface IFFIServer extends grpc.UntypedServiceImplementation {
    solanaAccountsStream: grpc.handleBidiStreamingCall<ffi_ffi_pb.SolanaAccountsResponse, ffi_ffi_pb.SolanaAccountsRequest>;
    jupiterIsReady: grpc.handleUnaryCall<ffi_ffi_pb.JupiterIsReadyRequest, ffi_ffi_pb.JupiterIsReadyResponse>;
    jupiterPairToAccounts: grpc.handleUnaryCall<ffi_ffi_pb.JupiterPairToAccountsRequest, ffi_ffi_pb.JupiterPairToAccountsResponse>;
    jupiterComputeRoutes: grpc.handleUnaryCall<ffi_ffi_pb.JupiterComputeRoutesRequest, ffi_ffi_pb.JupiterComputeRoutesResponse>;
    jupiterSwapTx: grpc.handleUnaryCall<ffi_ffi_pb.JupiterSwapTxRequest, ffi_ffi_pb.JupiterSwapTxResponse>;
}

export interface IFFIClient {
    solanaAccountsStream(): grpc.ClientDuplexStream<ffi_ffi_pb.SolanaAccountsResponse, ffi_ffi_pb.SolanaAccountsRequest>;
    solanaAccountsStream(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<ffi_ffi_pb.SolanaAccountsResponse, ffi_ffi_pb.SolanaAccountsRequest>;
    solanaAccountsStream(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<ffi_ffi_pb.SolanaAccountsResponse, ffi_ffi_pb.SolanaAccountsRequest>;
    jupiterIsReady(request: ffi_ffi_pb.JupiterIsReadyRequest, callback: (error: grpc.ServiceError | null, response: ffi_ffi_pb.JupiterIsReadyResponse) => void): grpc.ClientUnaryCall;
    jupiterIsReady(request: ffi_ffi_pb.JupiterIsReadyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ffi_ffi_pb.JupiterIsReadyResponse) => void): grpc.ClientUnaryCall;
    jupiterIsReady(request: ffi_ffi_pb.JupiterIsReadyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ffi_ffi_pb.JupiterIsReadyResponse) => void): grpc.ClientUnaryCall;
    jupiterPairToAccounts(request: ffi_ffi_pb.JupiterPairToAccountsRequest, callback: (error: grpc.ServiceError | null, response: ffi_ffi_pb.JupiterPairToAccountsResponse) => void): grpc.ClientUnaryCall;
    jupiterPairToAccounts(request: ffi_ffi_pb.JupiterPairToAccountsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ffi_ffi_pb.JupiterPairToAccountsResponse) => void): grpc.ClientUnaryCall;
    jupiterPairToAccounts(request: ffi_ffi_pb.JupiterPairToAccountsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ffi_ffi_pb.JupiterPairToAccountsResponse) => void): grpc.ClientUnaryCall;
    jupiterComputeRoutes(request: ffi_ffi_pb.JupiterComputeRoutesRequest, callback: (error: grpc.ServiceError | null, response: ffi_ffi_pb.JupiterComputeRoutesResponse) => void): grpc.ClientUnaryCall;
    jupiterComputeRoutes(request: ffi_ffi_pb.JupiterComputeRoutesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ffi_ffi_pb.JupiterComputeRoutesResponse) => void): grpc.ClientUnaryCall;
    jupiterComputeRoutes(request: ffi_ffi_pb.JupiterComputeRoutesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ffi_ffi_pb.JupiterComputeRoutesResponse) => void): grpc.ClientUnaryCall;
    jupiterSwapTx(request: ffi_ffi_pb.JupiterSwapTxRequest, callback: (error: grpc.ServiceError | null, response: ffi_ffi_pb.JupiterSwapTxResponse) => void): grpc.ClientUnaryCall;
    jupiterSwapTx(request: ffi_ffi_pb.JupiterSwapTxRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ffi_ffi_pb.JupiterSwapTxResponse) => void): grpc.ClientUnaryCall;
    jupiterSwapTx(request: ffi_ffi_pb.JupiterSwapTxRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ffi_ffi_pb.JupiterSwapTxResponse) => void): grpc.ClientUnaryCall;
}

export class FFIClient extends grpc.Client implements IFFIClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public solanaAccountsStream(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<ffi_ffi_pb.SolanaAccountsResponse, ffi_ffi_pb.SolanaAccountsRequest>;
    public solanaAccountsStream(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<ffi_ffi_pb.SolanaAccountsResponse, ffi_ffi_pb.SolanaAccountsRequest>;
    public jupiterIsReady(request: ffi_ffi_pb.JupiterIsReadyRequest, callback: (error: grpc.ServiceError | null, response: ffi_ffi_pb.JupiterIsReadyResponse) => void): grpc.ClientUnaryCall;
    public jupiterIsReady(request: ffi_ffi_pb.JupiterIsReadyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ffi_ffi_pb.JupiterIsReadyResponse) => void): grpc.ClientUnaryCall;
    public jupiterIsReady(request: ffi_ffi_pb.JupiterIsReadyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ffi_ffi_pb.JupiterIsReadyResponse) => void): grpc.ClientUnaryCall;
    public jupiterPairToAccounts(request: ffi_ffi_pb.JupiterPairToAccountsRequest, callback: (error: grpc.ServiceError | null, response: ffi_ffi_pb.JupiterPairToAccountsResponse) => void): grpc.ClientUnaryCall;
    public jupiterPairToAccounts(request: ffi_ffi_pb.JupiterPairToAccountsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ffi_ffi_pb.JupiterPairToAccountsResponse) => void): grpc.ClientUnaryCall;
    public jupiterPairToAccounts(request: ffi_ffi_pb.JupiterPairToAccountsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ffi_ffi_pb.JupiterPairToAccountsResponse) => void): grpc.ClientUnaryCall;
    public jupiterComputeRoutes(request: ffi_ffi_pb.JupiterComputeRoutesRequest, callback: (error: grpc.ServiceError | null, response: ffi_ffi_pb.JupiterComputeRoutesResponse) => void): grpc.ClientUnaryCall;
    public jupiterComputeRoutes(request: ffi_ffi_pb.JupiterComputeRoutesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ffi_ffi_pb.JupiterComputeRoutesResponse) => void): grpc.ClientUnaryCall;
    public jupiterComputeRoutes(request: ffi_ffi_pb.JupiterComputeRoutesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ffi_ffi_pb.JupiterComputeRoutesResponse) => void): grpc.ClientUnaryCall;
    public jupiterSwapTx(request: ffi_ffi_pb.JupiterSwapTxRequest, callback: (error: grpc.ServiceError | null, response: ffi_ffi_pb.JupiterSwapTxResponse) => void): grpc.ClientUnaryCall;
    public jupiterSwapTx(request: ffi_ffi_pb.JupiterSwapTxRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ffi_ffi_pb.JupiterSwapTxResponse) => void): grpc.ClientUnaryCall;
    public jupiterSwapTx(request: ffi_ffi_pb.JupiterSwapTxRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ffi_ffi_pb.JupiterSwapTxResponse) => void): grpc.ClientUnaryCall;
}
