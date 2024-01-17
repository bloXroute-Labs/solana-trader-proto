// package: relayer
// file: mev-protos/relayer.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as mev_protos_relayer_pb from "../mev-protos/relayer_pb";
import * as mev_protos_packet_pb from "../mev-protos/packet_pb";
import * as mev_protos_shared_pb from "../mev-protos/shared_pb";

interface IRelayerService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getTpuConfigs: IRelayerService_IGetTpuConfigs;
    subscribePackets: IRelayerService_ISubscribePackets;
}

interface IRelayerService_IGetTpuConfigs extends grpc.MethodDefinition<mev_protos_relayer_pb.GetTpuConfigsRequest, mev_protos_relayer_pb.GetTpuConfigsResponse> {
    path: "/relayer.Relayer/GetTpuConfigs";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<mev_protos_relayer_pb.GetTpuConfigsRequest>;
    requestDeserialize: grpc.deserialize<mev_protos_relayer_pb.GetTpuConfigsRequest>;
    responseSerialize: grpc.serialize<mev_protos_relayer_pb.GetTpuConfigsResponse>;
    responseDeserialize: grpc.deserialize<mev_protos_relayer_pb.GetTpuConfigsResponse>;
}
interface IRelayerService_ISubscribePackets extends grpc.MethodDefinition<mev_protos_relayer_pb.SubscribePacketsRequest, mev_protos_relayer_pb.SubscribePacketsResponse> {
    path: "/relayer.Relayer/SubscribePackets";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<mev_protos_relayer_pb.SubscribePacketsRequest>;
    requestDeserialize: grpc.deserialize<mev_protos_relayer_pb.SubscribePacketsRequest>;
    responseSerialize: grpc.serialize<mev_protos_relayer_pb.SubscribePacketsResponse>;
    responseDeserialize: grpc.deserialize<mev_protos_relayer_pb.SubscribePacketsResponse>;
}

export const RelayerService: IRelayerService;

export interface IRelayerServer extends grpc.UntypedServiceImplementation {
    getTpuConfigs: grpc.handleUnaryCall<mev_protos_relayer_pb.GetTpuConfigsRequest, mev_protos_relayer_pb.GetTpuConfigsResponse>;
    subscribePackets: grpc.handleServerStreamingCall<mev_protos_relayer_pb.SubscribePacketsRequest, mev_protos_relayer_pb.SubscribePacketsResponse>;
}

export interface IRelayerClient {
    getTpuConfigs(request: mev_protos_relayer_pb.GetTpuConfigsRequest, callback: (error: grpc.ServiceError | null, response: mev_protos_relayer_pb.GetTpuConfigsResponse) => void): grpc.ClientUnaryCall;
    getTpuConfigs(request: mev_protos_relayer_pb.GetTpuConfigsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: mev_protos_relayer_pb.GetTpuConfigsResponse) => void): grpc.ClientUnaryCall;
    getTpuConfigs(request: mev_protos_relayer_pb.GetTpuConfigsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: mev_protos_relayer_pb.GetTpuConfigsResponse) => void): grpc.ClientUnaryCall;
    subscribePackets(request: mev_protos_relayer_pb.SubscribePacketsRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<mev_protos_relayer_pb.SubscribePacketsResponse>;
    subscribePackets(request: mev_protos_relayer_pb.SubscribePacketsRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<mev_protos_relayer_pb.SubscribePacketsResponse>;
}

export class RelayerClient extends grpc.Client implements IRelayerClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getTpuConfigs(request: mev_protos_relayer_pb.GetTpuConfigsRequest, callback: (error: grpc.ServiceError | null, response: mev_protos_relayer_pb.GetTpuConfigsResponse) => void): grpc.ClientUnaryCall;
    public getTpuConfigs(request: mev_protos_relayer_pb.GetTpuConfigsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: mev_protos_relayer_pb.GetTpuConfigsResponse) => void): grpc.ClientUnaryCall;
    public getTpuConfigs(request: mev_protos_relayer_pb.GetTpuConfigsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: mev_protos_relayer_pb.GetTpuConfigsResponse) => void): grpc.ClientUnaryCall;
    public subscribePackets(request: mev_protos_relayer_pb.SubscribePacketsRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<mev_protos_relayer_pb.SubscribePacketsResponse>;
    public subscribePackets(request: mev_protos_relayer_pb.SubscribePacketsRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<mev_protos_relayer_pb.SubscribePacketsResponse>;
}
