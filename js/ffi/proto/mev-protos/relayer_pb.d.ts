// package: relayer
// file: mev-protos/relayer.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as mev_protos_packet_pb from "../mev-protos/packet_pb";
import * as mev_protos_shared_pb from "../mev-protos/shared_pb";

export class GetTpuConfigsRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTpuConfigsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetTpuConfigsRequest): GetTpuConfigsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTpuConfigsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTpuConfigsRequest;
    static deserializeBinaryFromReader(message: GetTpuConfigsRequest, reader: jspb.BinaryReader): GetTpuConfigsRequest;
}

export namespace GetTpuConfigsRequest {
    export type AsObject = {
    }
}

export class GetTpuConfigsResponse extends jspb.Message { 

    hasTpu(): boolean;
    clearTpu(): void;
    getTpu(): mev_protos_shared_pb.Socket | undefined;
    setTpu(value?: mev_protos_shared_pb.Socket): GetTpuConfigsResponse;

    hasTpuForward(): boolean;
    clearTpuForward(): void;
    getTpuForward(): mev_protos_shared_pb.Socket | undefined;
    setTpuForward(value?: mev_protos_shared_pb.Socket): GetTpuConfigsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTpuConfigsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetTpuConfigsResponse): GetTpuConfigsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTpuConfigsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTpuConfigsResponse;
    static deserializeBinaryFromReader(message: GetTpuConfigsResponse, reader: jspb.BinaryReader): GetTpuConfigsResponse;
}

export namespace GetTpuConfigsResponse {
    export type AsObject = {
        tpu?: mev_protos_shared_pb.Socket.AsObject,
        tpuForward?: mev_protos_shared_pb.Socket.AsObject,
    }
}

export class SubscribePacketsRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SubscribePacketsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SubscribePacketsRequest): SubscribePacketsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SubscribePacketsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SubscribePacketsRequest;
    static deserializeBinaryFromReader(message: SubscribePacketsRequest, reader: jspb.BinaryReader): SubscribePacketsRequest;
}

export namespace SubscribePacketsRequest {
    export type AsObject = {
    }
}

export class SubscribePacketsResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): mev_protos_shared_pb.Header | undefined;
    setHeader(value?: mev_protos_shared_pb.Header): SubscribePacketsResponse;

    hasHeartbeat(): boolean;
    clearHeartbeat(): void;
    getHeartbeat(): mev_protos_shared_pb.Heartbeat | undefined;
    setHeartbeat(value?: mev_protos_shared_pb.Heartbeat): SubscribePacketsResponse;

    hasBatch(): boolean;
    clearBatch(): void;
    getBatch(): mev_protos_packet_pb.PacketBatch | undefined;
    setBatch(value?: mev_protos_packet_pb.PacketBatch): SubscribePacketsResponse;

    getMsgCase(): SubscribePacketsResponse.MsgCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SubscribePacketsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SubscribePacketsResponse): SubscribePacketsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SubscribePacketsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SubscribePacketsResponse;
    static deserializeBinaryFromReader(message: SubscribePacketsResponse, reader: jspb.BinaryReader): SubscribePacketsResponse;
}

export namespace SubscribePacketsResponse {
    export type AsObject = {
        header?: mev_protos_shared_pb.Header.AsObject,
        heartbeat?: mev_protos_shared_pb.Heartbeat.AsObject,
        batch?: mev_protos_packet_pb.PacketBatch.AsObject,
    }

    export enum MsgCase {
        MSG_NOT_SET = 0,
        HEARTBEAT = 2,
        BATCH = 3,
    }

}
