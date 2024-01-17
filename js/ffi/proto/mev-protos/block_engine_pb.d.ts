// package: block_engine
// file: mev-protos/block_engine.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as mev_protos_packet_pb from "../mev-protos/packet_pb";
import * as mev_protos_shared_pb from "../mev-protos/shared_pb";
import * as mev_protos_bundle_pb from "../mev-protos/bundle_pb";

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

    hasBatch(): boolean;
    clearBatch(): void;
    getBatch(): mev_protos_packet_pb.PacketBatch | undefined;
    setBatch(value?: mev_protos_packet_pb.PacketBatch): SubscribePacketsResponse;

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
        batch?: mev_protos_packet_pb.PacketBatch.AsObject,
    }
}

export class SubscribeBundlesRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SubscribeBundlesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SubscribeBundlesRequest): SubscribeBundlesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SubscribeBundlesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SubscribeBundlesRequest;
    static deserializeBinaryFromReader(message: SubscribeBundlesRequest, reader: jspb.BinaryReader): SubscribeBundlesRequest;
}

export namespace SubscribeBundlesRequest {
    export type AsObject = {
    }
}

export class SubscribeBundlesResponse extends jspb.Message { 
    clearBundlesList(): void;
    getBundlesList(): Array<mev_protos_bundle_pb.BundleUuid>;
    setBundlesList(value: Array<mev_protos_bundle_pb.BundleUuid>): SubscribeBundlesResponse;
    addBundles(value?: mev_protos_bundle_pb.BundleUuid, index?: number): mev_protos_bundle_pb.BundleUuid;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SubscribeBundlesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SubscribeBundlesResponse): SubscribeBundlesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SubscribeBundlesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SubscribeBundlesResponse;
    static deserializeBinaryFromReader(message: SubscribeBundlesResponse, reader: jspb.BinaryReader): SubscribeBundlesResponse;
}

export namespace SubscribeBundlesResponse {
    export type AsObject = {
        bundlesList: Array<mev_protos_bundle_pb.BundleUuid.AsObject>,
    }
}

export class BlockBuilderFeeInfoRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BlockBuilderFeeInfoRequest.AsObject;
    static toObject(includeInstance: boolean, msg: BlockBuilderFeeInfoRequest): BlockBuilderFeeInfoRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BlockBuilderFeeInfoRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BlockBuilderFeeInfoRequest;
    static deserializeBinaryFromReader(message: BlockBuilderFeeInfoRequest, reader: jspb.BinaryReader): BlockBuilderFeeInfoRequest;
}

export namespace BlockBuilderFeeInfoRequest {
    export type AsObject = {
    }
}

export class BlockBuilderFeeInfoResponse extends jspb.Message { 
    getPubkey(): string;
    setPubkey(value: string): BlockBuilderFeeInfoResponse;
    getCommission(): number;
    setCommission(value: number): BlockBuilderFeeInfoResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BlockBuilderFeeInfoResponse.AsObject;
    static toObject(includeInstance: boolean, msg: BlockBuilderFeeInfoResponse): BlockBuilderFeeInfoResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BlockBuilderFeeInfoResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BlockBuilderFeeInfoResponse;
    static deserializeBinaryFromReader(message: BlockBuilderFeeInfoResponse, reader: jspb.BinaryReader): BlockBuilderFeeInfoResponse;
}

export namespace BlockBuilderFeeInfoResponse {
    export type AsObject = {
        pubkey: string,
        commission: number,
    }
}

export class AccountsOfInterest extends jspb.Message { 
    clearAccountsList(): void;
    getAccountsList(): Array<string>;
    setAccountsList(value: Array<string>): AccountsOfInterest;
    addAccounts(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AccountsOfInterest.AsObject;
    static toObject(includeInstance: boolean, msg: AccountsOfInterest): AccountsOfInterest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AccountsOfInterest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AccountsOfInterest;
    static deserializeBinaryFromReader(message: AccountsOfInterest, reader: jspb.BinaryReader): AccountsOfInterest;
}

export namespace AccountsOfInterest {
    export type AsObject = {
        accountsList: Array<string>,
    }
}

export class AccountsOfInterestRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AccountsOfInterestRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AccountsOfInterestRequest): AccountsOfInterestRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AccountsOfInterestRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AccountsOfInterestRequest;
    static deserializeBinaryFromReader(message: AccountsOfInterestRequest, reader: jspb.BinaryReader): AccountsOfInterestRequest;
}

export namespace AccountsOfInterestRequest {
    export type AsObject = {
    }
}

export class AccountsOfInterestUpdate extends jspb.Message { 
    clearAccountsList(): void;
    getAccountsList(): Array<string>;
    setAccountsList(value: Array<string>): AccountsOfInterestUpdate;
    addAccounts(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AccountsOfInterestUpdate.AsObject;
    static toObject(includeInstance: boolean, msg: AccountsOfInterestUpdate): AccountsOfInterestUpdate.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AccountsOfInterestUpdate, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AccountsOfInterestUpdate;
    static deserializeBinaryFromReader(message: AccountsOfInterestUpdate, reader: jspb.BinaryReader): AccountsOfInterestUpdate;
}

export namespace AccountsOfInterestUpdate {
    export type AsObject = {
        accountsList: Array<string>,
    }
}

export class ProgramsOfInterestRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProgramsOfInterestRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ProgramsOfInterestRequest): ProgramsOfInterestRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProgramsOfInterestRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProgramsOfInterestRequest;
    static deserializeBinaryFromReader(message: ProgramsOfInterestRequest, reader: jspb.BinaryReader): ProgramsOfInterestRequest;
}

export namespace ProgramsOfInterestRequest {
    export type AsObject = {
    }
}

export class ProgramsOfInterestUpdate extends jspb.Message { 
    clearProgramsList(): void;
    getProgramsList(): Array<string>;
    setProgramsList(value: Array<string>): ProgramsOfInterestUpdate;
    addPrograms(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProgramsOfInterestUpdate.AsObject;
    static toObject(includeInstance: boolean, msg: ProgramsOfInterestUpdate): ProgramsOfInterestUpdate.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProgramsOfInterestUpdate, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProgramsOfInterestUpdate;
    static deserializeBinaryFromReader(message: ProgramsOfInterestUpdate, reader: jspb.BinaryReader): ProgramsOfInterestUpdate;
}

export namespace ProgramsOfInterestUpdate {
    export type AsObject = {
        programsList: Array<string>,
    }
}

export class ExpiringPacketBatch extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): mev_protos_shared_pb.Header | undefined;
    setHeader(value?: mev_protos_shared_pb.Header): ExpiringPacketBatch;

    hasBatch(): boolean;
    clearBatch(): void;
    getBatch(): mev_protos_packet_pb.PacketBatch | undefined;
    setBatch(value?: mev_protos_packet_pb.PacketBatch): ExpiringPacketBatch;
    getExpiryMs(): number;
    setExpiryMs(value: number): ExpiringPacketBatch;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExpiringPacketBatch.AsObject;
    static toObject(includeInstance: boolean, msg: ExpiringPacketBatch): ExpiringPacketBatch.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExpiringPacketBatch, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExpiringPacketBatch;
    static deserializeBinaryFromReader(message: ExpiringPacketBatch, reader: jspb.BinaryReader): ExpiringPacketBatch;
}

export namespace ExpiringPacketBatch {
    export type AsObject = {
        header?: mev_protos_shared_pb.Header.AsObject,
        batch?: mev_protos_packet_pb.PacketBatch.AsObject,
        expiryMs: number,
    }
}

export class PacketBatchUpdate extends jspb.Message { 

    hasBatches(): boolean;
    clearBatches(): void;
    getBatches(): ExpiringPacketBatch | undefined;
    setBatches(value?: ExpiringPacketBatch): PacketBatchUpdate;

    hasHeartbeat(): boolean;
    clearHeartbeat(): void;
    getHeartbeat(): mev_protos_shared_pb.Heartbeat | undefined;
    setHeartbeat(value?: mev_protos_shared_pb.Heartbeat): PacketBatchUpdate;

    getMsgCase(): PacketBatchUpdate.MsgCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PacketBatchUpdate.AsObject;
    static toObject(includeInstance: boolean, msg: PacketBatchUpdate): PacketBatchUpdate.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PacketBatchUpdate, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PacketBatchUpdate;
    static deserializeBinaryFromReader(message: PacketBatchUpdate, reader: jspb.BinaryReader): PacketBatchUpdate;
}

export namespace PacketBatchUpdate {
    export type AsObject = {
        batches?: ExpiringPacketBatch.AsObject,
        heartbeat?: mev_protos_shared_pb.Heartbeat.AsObject,
    }

    export enum MsgCase {
        MSG_NOT_SET = 0,
        BATCHES = 1,
        HEARTBEAT = 2,
    }

}

export class StartExpiringPacketStreamResponse extends jspb.Message { 

    hasHeartbeat(): boolean;
    clearHeartbeat(): void;
    getHeartbeat(): mev_protos_shared_pb.Heartbeat | undefined;
    setHeartbeat(value?: mev_protos_shared_pb.Heartbeat): StartExpiringPacketStreamResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StartExpiringPacketStreamResponse.AsObject;
    static toObject(includeInstance: boolean, msg: StartExpiringPacketStreamResponse): StartExpiringPacketStreamResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StartExpiringPacketStreamResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StartExpiringPacketStreamResponse;
    static deserializeBinaryFromReader(message: StartExpiringPacketStreamResponse, reader: jspb.BinaryReader): StartExpiringPacketStreamResponse;
}

export namespace StartExpiringPacketStreamResponse {
    export type AsObject = {
        heartbeat?: mev_protos_shared_pb.Heartbeat.AsObject,
    }
}
