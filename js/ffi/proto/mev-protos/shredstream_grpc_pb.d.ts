// package: shredstream
// file: mev-protos/shredstream.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as mev_protos_shredstream_pb from "../mev-protos/shredstream_pb";
import * as mev_protos_shared_pb from "../mev-protos/shared_pb";

interface IShredstreamService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    sendHeartbeat: IShredstreamService_ISendHeartbeat;
}

interface IShredstreamService_ISendHeartbeat extends grpc.MethodDefinition<mev_protos_shredstream_pb.Heartbeat, mev_protos_shredstream_pb.HeartbeatResponse> {
    path: "/shredstream.Shredstream/SendHeartbeat";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<mev_protos_shredstream_pb.Heartbeat>;
    requestDeserialize: grpc.deserialize<mev_protos_shredstream_pb.Heartbeat>;
    responseSerialize: grpc.serialize<mev_protos_shredstream_pb.HeartbeatResponse>;
    responseDeserialize: grpc.deserialize<mev_protos_shredstream_pb.HeartbeatResponse>;
}

export const ShredstreamService: IShredstreamService;

export interface IShredstreamServer extends grpc.UntypedServiceImplementation {
    sendHeartbeat: grpc.handleUnaryCall<mev_protos_shredstream_pb.Heartbeat, mev_protos_shredstream_pb.HeartbeatResponse>;
}

export interface IShredstreamClient {
    sendHeartbeat(request: mev_protos_shredstream_pb.Heartbeat, callback: (error: grpc.ServiceError | null, response: mev_protos_shredstream_pb.HeartbeatResponse) => void): grpc.ClientUnaryCall;
    sendHeartbeat(request: mev_protos_shredstream_pb.Heartbeat, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: mev_protos_shredstream_pb.HeartbeatResponse) => void): grpc.ClientUnaryCall;
    sendHeartbeat(request: mev_protos_shredstream_pb.Heartbeat, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: mev_protos_shredstream_pb.HeartbeatResponse) => void): grpc.ClientUnaryCall;
}

export class ShredstreamClient extends grpc.Client implements IShredstreamClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public sendHeartbeat(request: mev_protos_shredstream_pb.Heartbeat, callback: (error: grpc.ServiceError | null, response: mev_protos_shredstream_pb.HeartbeatResponse) => void): grpc.ClientUnaryCall;
    public sendHeartbeat(request: mev_protos_shredstream_pb.Heartbeat, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: mev_protos_shredstream_pb.HeartbeatResponse) => void): grpc.ClientUnaryCall;
    public sendHeartbeat(request: mev_protos_shredstream_pb.Heartbeat, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: mev_protos_shredstream_pb.HeartbeatResponse) => void): grpc.ClientUnaryCall;
}
