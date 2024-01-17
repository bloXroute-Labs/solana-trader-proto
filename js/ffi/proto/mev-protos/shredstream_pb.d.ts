// package: shredstream
// file: mev-protos/shredstream.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as mev_protos_shared_pb from "../mev-protos/shared_pb";

export class Heartbeat extends jspb.Message { 

    hasSocket(): boolean;
    clearSocket(): void;
    getSocket(): mev_protos_shared_pb.Socket | undefined;
    setSocket(value?: mev_protos_shared_pb.Socket): Heartbeat;
    clearRegionsList(): void;
    getRegionsList(): Array<string>;
    setRegionsList(value: Array<string>): Heartbeat;
    addRegions(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Heartbeat.AsObject;
    static toObject(includeInstance: boolean, msg: Heartbeat): Heartbeat.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Heartbeat, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Heartbeat;
    static deserializeBinaryFromReader(message: Heartbeat, reader: jspb.BinaryReader): Heartbeat;
}

export namespace Heartbeat {
    export type AsObject = {
        socket?: mev_protos_shared_pb.Socket.AsObject,
        regionsList: Array<string>,
    }
}

export class HeartbeatResponse extends jspb.Message { 
    getTtlMs(): number;
    setTtlMs(value: number): HeartbeatResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HeartbeatResponse.AsObject;
    static toObject(includeInstance: boolean, msg: HeartbeatResponse): HeartbeatResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HeartbeatResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HeartbeatResponse;
    static deserializeBinaryFromReader(message: HeartbeatResponse, reader: jspb.BinaryReader): HeartbeatResponse;
}

export namespace HeartbeatResponse {
    export type AsObject = {
        ttlMs: number,
    }
}
