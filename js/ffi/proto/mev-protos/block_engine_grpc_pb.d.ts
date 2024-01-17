// package: block_engine
// file: mev-protos/block_engine.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as mev_protos_block_engine_pb from "../mev-protos/block_engine_pb";
import * as mev_protos_packet_pb from "../mev-protos/packet_pb";
import * as mev_protos_shared_pb from "../mev-protos/shared_pb";
import * as mev_protos_bundle_pb from "../mev-protos/bundle_pb";

interface IBlockEngineValidatorService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    subscribePackets: IBlockEngineValidatorService_ISubscribePackets;
    subscribeBundles: IBlockEngineValidatorService_ISubscribeBundles;
    getBlockBuilderFeeInfo: IBlockEngineValidatorService_IGetBlockBuilderFeeInfo;
}

interface IBlockEngineValidatorService_ISubscribePackets extends grpc.MethodDefinition<mev_protos_block_engine_pb.SubscribePacketsRequest, mev_protos_block_engine_pb.SubscribePacketsResponse> {
    path: "/block_engine.BlockEngineValidator/SubscribePackets";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<mev_protos_block_engine_pb.SubscribePacketsRequest>;
    requestDeserialize: grpc.deserialize<mev_protos_block_engine_pb.SubscribePacketsRequest>;
    responseSerialize: grpc.serialize<mev_protos_block_engine_pb.SubscribePacketsResponse>;
    responseDeserialize: grpc.deserialize<mev_protos_block_engine_pb.SubscribePacketsResponse>;
}
interface IBlockEngineValidatorService_ISubscribeBundles extends grpc.MethodDefinition<mev_protos_block_engine_pb.SubscribeBundlesRequest, mev_protos_block_engine_pb.SubscribeBundlesResponse> {
    path: "/block_engine.BlockEngineValidator/SubscribeBundles";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<mev_protos_block_engine_pb.SubscribeBundlesRequest>;
    requestDeserialize: grpc.deserialize<mev_protos_block_engine_pb.SubscribeBundlesRequest>;
    responseSerialize: grpc.serialize<mev_protos_block_engine_pb.SubscribeBundlesResponse>;
    responseDeserialize: grpc.deserialize<mev_protos_block_engine_pb.SubscribeBundlesResponse>;
}
interface IBlockEngineValidatorService_IGetBlockBuilderFeeInfo extends grpc.MethodDefinition<mev_protos_block_engine_pb.BlockBuilderFeeInfoRequest, mev_protos_block_engine_pb.BlockBuilderFeeInfoResponse> {
    path: "/block_engine.BlockEngineValidator/GetBlockBuilderFeeInfo";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<mev_protos_block_engine_pb.BlockBuilderFeeInfoRequest>;
    requestDeserialize: grpc.deserialize<mev_protos_block_engine_pb.BlockBuilderFeeInfoRequest>;
    responseSerialize: grpc.serialize<mev_protos_block_engine_pb.BlockBuilderFeeInfoResponse>;
    responseDeserialize: grpc.deserialize<mev_protos_block_engine_pb.BlockBuilderFeeInfoResponse>;
}

export const BlockEngineValidatorService: IBlockEngineValidatorService;

export interface IBlockEngineValidatorServer extends grpc.UntypedServiceImplementation {
    subscribePackets: grpc.handleServerStreamingCall<mev_protos_block_engine_pb.SubscribePacketsRequest, mev_protos_block_engine_pb.SubscribePacketsResponse>;
    subscribeBundles: grpc.handleServerStreamingCall<mev_protos_block_engine_pb.SubscribeBundlesRequest, mev_protos_block_engine_pb.SubscribeBundlesResponse>;
    getBlockBuilderFeeInfo: grpc.handleUnaryCall<mev_protos_block_engine_pb.BlockBuilderFeeInfoRequest, mev_protos_block_engine_pb.BlockBuilderFeeInfoResponse>;
}

export interface IBlockEngineValidatorClient {
    subscribePackets(request: mev_protos_block_engine_pb.SubscribePacketsRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<mev_protos_block_engine_pb.SubscribePacketsResponse>;
    subscribePackets(request: mev_protos_block_engine_pb.SubscribePacketsRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<mev_protos_block_engine_pb.SubscribePacketsResponse>;
    subscribeBundles(request: mev_protos_block_engine_pb.SubscribeBundlesRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<mev_protos_block_engine_pb.SubscribeBundlesResponse>;
    subscribeBundles(request: mev_protos_block_engine_pb.SubscribeBundlesRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<mev_protos_block_engine_pb.SubscribeBundlesResponse>;
    getBlockBuilderFeeInfo(request: mev_protos_block_engine_pb.BlockBuilderFeeInfoRequest, callback: (error: grpc.ServiceError | null, response: mev_protos_block_engine_pb.BlockBuilderFeeInfoResponse) => void): grpc.ClientUnaryCall;
    getBlockBuilderFeeInfo(request: mev_protos_block_engine_pb.BlockBuilderFeeInfoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: mev_protos_block_engine_pb.BlockBuilderFeeInfoResponse) => void): grpc.ClientUnaryCall;
    getBlockBuilderFeeInfo(request: mev_protos_block_engine_pb.BlockBuilderFeeInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: mev_protos_block_engine_pb.BlockBuilderFeeInfoResponse) => void): grpc.ClientUnaryCall;
}

export class BlockEngineValidatorClient extends grpc.Client implements IBlockEngineValidatorClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public subscribePackets(request: mev_protos_block_engine_pb.SubscribePacketsRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<mev_protos_block_engine_pb.SubscribePacketsResponse>;
    public subscribePackets(request: mev_protos_block_engine_pb.SubscribePacketsRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<mev_protos_block_engine_pb.SubscribePacketsResponse>;
    public subscribeBundles(request: mev_protos_block_engine_pb.SubscribeBundlesRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<mev_protos_block_engine_pb.SubscribeBundlesResponse>;
    public subscribeBundles(request: mev_protos_block_engine_pb.SubscribeBundlesRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<mev_protos_block_engine_pb.SubscribeBundlesResponse>;
    public getBlockBuilderFeeInfo(request: mev_protos_block_engine_pb.BlockBuilderFeeInfoRequest, callback: (error: grpc.ServiceError | null, response: mev_protos_block_engine_pb.BlockBuilderFeeInfoResponse) => void): grpc.ClientUnaryCall;
    public getBlockBuilderFeeInfo(request: mev_protos_block_engine_pb.BlockBuilderFeeInfoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: mev_protos_block_engine_pb.BlockBuilderFeeInfoResponse) => void): grpc.ClientUnaryCall;
    public getBlockBuilderFeeInfo(request: mev_protos_block_engine_pb.BlockBuilderFeeInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: mev_protos_block_engine_pb.BlockBuilderFeeInfoResponse) => void): grpc.ClientUnaryCall;
}

interface IBlockEngineRelayerService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    subscribeAccountsOfInterest: IBlockEngineRelayerService_ISubscribeAccountsOfInterest;
    subscribeProgramsOfInterest: IBlockEngineRelayerService_ISubscribeProgramsOfInterest;
    startExpiringPacketStream: IBlockEngineRelayerService_IStartExpiringPacketStream;
}

interface IBlockEngineRelayerService_ISubscribeAccountsOfInterest extends grpc.MethodDefinition<mev_protos_block_engine_pb.AccountsOfInterestRequest, mev_protos_block_engine_pb.AccountsOfInterestUpdate> {
    path: "/block_engine.BlockEngineRelayer/SubscribeAccountsOfInterest";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<mev_protos_block_engine_pb.AccountsOfInterestRequest>;
    requestDeserialize: grpc.deserialize<mev_protos_block_engine_pb.AccountsOfInterestRequest>;
    responseSerialize: grpc.serialize<mev_protos_block_engine_pb.AccountsOfInterestUpdate>;
    responseDeserialize: grpc.deserialize<mev_protos_block_engine_pb.AccountsOfInterestUpdate>;
}
interface IBlockEngineRelayerService_ISubscribeProgramsOfInterest extends grpc.MethodDefinition<mev_protos_block_engine_pb.ProgramsOfInterestRequest, mev_protos_block_engine_pb.ProgramsOfInterestUpdate> {
    path: "/block_engine.BlockEngineRelayer/SubscribeProgramsOfInterest";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<mev_protos_block_engine_pb.ProgramsOfInterestRequest>;
    requestDeserialize: grpc.deserialize<mev_protos_block_engine_pb.ProgramsOfInterestRequest>;
    responseSerialize: grpc.serialize<mev_protos_block_engine_pb.ProgramsOfInterestUpdate>;
    responseDeserialize: grpc.deserialize<mev_protos_block_engine_pb.ProgramsOfInterestUpdate>;
}
interface IBlockEngineRelayerService_IStartExpiringPacketStream extends grpc.MethodDefinition<mev_protos_block_engine_pb.PacketBatchUpdate, mev_protos_block_engine_pb.StartExpiringPacketStreamResponse> {
    path: "/block_engine.BlockEngineRelayer/StartExpiringPacketStream";
    requestStream: true;
    responseStream: true;
    requestSerialize: grpc.serialize<mev_protos_block_engine_pb.PacketBatchUpdate>;
    requestDeserialize: grpc.deserialize<mev_protos_block_engine_pb.PacketBatchUpdate>;
    responseSerialize: grpc.serialize<mev_protos_block_engine_pb.StartExpiringPacketStreamResponse>;
    responseDeserialize: grpc.deserialize<mev_protos_block_engine_pb.StartExpiringPacketStreamResponse>;
}

export const BlockEngineRelayerService: IBlockEngineRelayerService;

export interface IBlockEngineRelayerServer extends grpc.UntypedServiceImplementation {
    subscribeAccountsOfInterest: grpc.handleServerStreamingCall<mev_protos_block_engine_pb.AccountsOfInterestRequest, mev_protos_block_engine_pb.AccountsOfInterestUpdate>;
    subscribeProgramsOfInterest: grpc.handleServerStreamingCall<mev_protos_block_engine_pb.ProgramsOfInterestRequest, mev_protos_block_engine_pb.ProgramsOfInterestUpdate>;
    startExpiringPacketStream: grpc.handleBidiStreamingCall<mev_protos_block_engine_pb.PacketBatchUpdate, mev_protos_block_engine_pb.StartExpiringPacketStreamResponse>;
}

export interface IBlockEngineRelayerClient {
    subscribeAccountsOfInterest(request: mev_protos_block_engine_pb.AccountsOfInterestRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<mev_protos_block_engine_pb.AccountsOfInterestUpdate>;
    subscribeAccountsOfInterest(request: mev_protos_block_engine_pb.AccountsOfInterestRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<mev_protos_block_engine_pb.AccountsOfInterestUpdate>;
    subscribeProgramsOfInterest(request: mev_protos_block_engine_pb.ProgramsOfInterestRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<mev_protos_block_engine_pb.ProgramsOfInterestUpdate>;
    subscribeProgramsOfInterest(request: mev_protos_block_engine_pb.ProgramsOfInterestRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<mev_protos_block_engine_pb.ProgramsOfInterestUpdate>;
    startExpiringPacketStream(): grpc.ClientDuplexStream<mev_protos_block_engine_pb.PacketBatchUpdate, mev_protos_block_engine_pb.StartExpiringPacketStreamResponse>;
    startExpiringPacketStream(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<mev_protos_block_engine_pb.PacketBatchUpdate, mev_protos_block_engine_pb.StartExpiringPacketStreamResponse>;
    startExpiringPacketStream(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<mev_protos_block_engine_pb.PacketBatchUpdate, mev_protos_block_engine_pb.StartExpiringPacketStreamResponse>;
}

export class BlockEngineRelayerClient extends grpc.Client implements IBlockEngineRelayerClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public subscribeAccountsOfInterest(request: mev_protos_block_engine_pb.AccountsOfInterestRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<mev_protos_block_engine_pb.AccountsOfInterestUpdate>;
    public subscribeAccountsOfInterest(request: mev_protos_block_engine_pb.AccountsOfInterestRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<mev_protos_block_engine_pb.AccountsOfInterestUpdate>;
    public subscribeProgramsOfInterest(request: mev_protos_block_engine_pb.ProgramsOfInterestRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<mev_protos_block_engine_pb.ProgramsOfInterestUpdate>;
    public subscribeProgramsOfInterest(request: mev_protos_block_engine_pb.ProgramsOfInterestRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<mev_protos_block_engine_pb.ProgramsOfInterestUpdate>;
    public startExpiringPacketStream(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<mev_protos_block_engine_pb.PacketBatchUpdate, mev_protos_block_engine_pb.StartExpiringPacketStreamResponse>;
    public startExpiringPacketStream(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<mev_protos_block_engine_pb.PacketBatchUpdate, mev_protos_block_engine_pb.StartExpiringPacketStreamResponse>;
}
