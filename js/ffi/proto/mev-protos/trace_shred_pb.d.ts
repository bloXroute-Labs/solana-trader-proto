// package: trace_shred
// file: mev-protos/trace_shred.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class TraceShred extends jspb.Message { 
    getRegion(): string;
    setRegion(value: string): TraceShred;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): TraceShred;
    getSeqNum(): number;
    setSeqNum(value: number): TraceShred;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TraceShred.AsObject;
    static toObject(includeInstance: boolean, msg: TraceShred): TraceShred.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TraceShred, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TraceShred;
    static deserializeBinaryFromReader(message: TraceShred, reader: jspb.BinaryReader): TraceShred;
}

export namespace TraceShred {
    export type AsObject = {
        region: string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        seqNum: number,
    }
}
