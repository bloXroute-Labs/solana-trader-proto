// package: shared
// file: mev-protos/shared.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Header extends jspb.Message { 

    hasTs(): boolean;
    clearTs(): void;
    getTs(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTs(value?: google_protobuf_timestamp_pb.Timestamp): Header;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Header.AsObject;
    static toObject(includeInstance: boolean, msg: Header): Header.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Header, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Header;
    static deserializeBinaryFromReader(message: Header, reader: jspb.BinaryReader): Header;
}

export namespace Header {
    export type AsObject = {
        ts?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class Heartbeat extends jspb.Message { 
    getCount(): number;
    setCount(value: number): Heartbeat;

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
        count: number,
    }
}

export class Socket extends jspb.Message { 
    getIp(): string;
    setIp(value: string): Socket;
    getPort(): number;
    setPort(value: number): Socket;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Socket.AsObject;
    static toObject(includeInstance: boolean, msg: Socket): Socket.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Socket, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Socket;
    static deserializeBinaryFromReader(message: Socket, reader: jspb.BinaryReader): Socket;
}

export namespace Socket {
    export type AsObject = {
        ip: string,
        port: number,
    }
}
