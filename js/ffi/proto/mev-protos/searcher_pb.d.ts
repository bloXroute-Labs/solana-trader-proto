// package: searcher
// file: mev-protos/searcher.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as mev_protos_bundle_pb from "../mev-protos/bundle_pb";
import * as mev_protos_packet_pb from "../mev-protos/packet_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class SlotList extends jspb.Message { 
    clearSlotsList(): void;
    getSlotsList(): Array<number>;
    setSlotsList(value: Array<number>): SlotList;
    addSlots(value: number, index?: number): number;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SlotList.AsObject;
    static toObject(includeInstance: boolean, msg: SlotList): SlotList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SlotList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SlotList;
    static deserializeBinaryFromReader(message: SlotList, reader: jspb.BinaryReader): SlotList;
}

export namespace SlotList {
    export type AsObject = {
        slotsList: Array<number>,
    }
}

export class ConnectedLeadersResponse extends jspb.Message { 

    getConnectedValidatorsMap(): jspb.Map<string, SlotList>;
    clearConnectedValidatorsMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ConnectedLeadersResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ConnectedLeadersResponse): ConnectedLeadersResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ConnectedLeadersResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ConnectedLeadersResponse;
    static deserializeBinaryFromReader(message: ConnectedLeadersResponse, reader: jspb.BinaryReader): ConnectedLeadersResponse;
}

export namespace ConnectedLeadersResponse {
    export type AsObject = {

        connectedValidatorsMap: Array<[string, SlotList.AsObject]>,
    }
}

export class SendBundleRequest extends jspb.Message { 

    hasBundle(): boolean;
    clearBundle(): void;
    getBundle(): mev_protos_bundle_pb.Bundle | undefined;
    setBundle(value?: mev_protos_bundle_pb.Bundle): SendBundleRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SendBundleRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SendBundleRequest): SendBundleRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SendBundleRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SendBundleRequest;
    static deserializeBinaryFromReader(message: SendBundleRequest, reader: jspb.BinaryReader): SendBundleRequest;
}

export namespace SendBundleRequest {
    export type AsObject = {
        bundle?: mev_protos_bundle_pb.Bundle.AsObject,
    }
}

export class SendBundleResponse extends jspb.Message { 
    getUuid(): string;
    setUuid(value: string): SendBundleResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SendBundleResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SendBundleResponse): SendBundleResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SendBundleResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SendBundleResponse;
    static deserializeBinaryFromReader(message: SendBundleResponse, reader: jspb.BinaryReader): SendBundleResponse;
}

export namespace SendBundleResponse {
    export type AsObject = {
        uuid: string,
    }
}

export class ProgramSubscriptionV0 extends jspb.Message { 
    clearProgramsList(): void;
    getProgramsList(): Array<string>;
    setProgramsList(value: Array<string>): ProgramSubscriptionV0;
    addPrograms(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProgramSubscriptionV0.AsObject;
    static toObject(includeInstance: boolean, msg: ProgramSubscriptionV0): ProgramSubscriptionV0.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProgramSubscriptionV0, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProgramSubscriptionV0;
    static deserializeBinaryFromReader(message: ProgramSubscriptionV0, reader: jspb.BinaryReader): ProgramSubscriptionV0;
}

export namespace ProgramSubscriptionV0 {
    export type AsObject = {
        programsList: Array<string>,
    }
}

export class WriteLockedAccountSubscriptionV0 extends jspb.Message { 
    clearAccountsList(): void;
    getAccountsList(): Array<string>;
    setAccountsList(value: Array<string>): WriteLockedAccountSubscriptionV0;
    addAccounts(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WriteLockedAccountSubscriptionV0.AsObject;
    static toObject(includeInstance: boolean, msg: WriteLockedAccountSubscriptionV0): WriteLockedAccountSubscriptionV0.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WriteLockedAccountSubscriptionV0, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WriteLockedAccountSubscriptionV0;
    static deserializeBinaryFromReader(message: WriteLockedAccountSubscriptionV0, reader: jspb.BinaryReader): WriteLockedAccountSubscriptionV0;
}

export namespace WriteLockedAccountSubscriptionV0 {
    export type AsObject = {
        accountsList: Array<string>,
    }
}

export class MempoolSubscription extends jspb.Message { 

    hasProgramV0Sub(): boolean;
    clearProgramV0Sub(): void;
    getProgramV0Sub(): ProgramSubscriptionV0 | undefined;
    setProgramV0Sub(value?: ProgramSubscriptionV0): MempoolSubscription;

    hasWlaV0Sub(): boolean;
    clearWlaV0Sub(): void;
    getWlaV0Sub(): WriteLockedAccountSubscriptionV0 | undefined;
    setWlaV0Sub(value?: WriteLockedAccountSubscriptionV0): MempoolSubscription;
    clearRegionsList(): void;
    getRegionsList(): Array<string>;
    setRegionsList(value: Array<string>): MempoolSubscription;
    addRegions(value: string, index?: number): string;

    getMsgCase(): MempoolSubscription.MsgCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MempoolSubscription.AsObject;
    static toObject(includeInstance: boolean, msg: MempoolSubscription): MempoolSubscription.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MempoolSubscription, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MempoolSubscription;
    static deserializeBinaryFromReader(message: MempoolSubscription, reader: jspb.BinaryReader): MempoolSubscription;
}

export namespace MempoolSubscription {
    export type AsObject = {
        programV0Sub?: ProgramSubscriptionV0.AsObject,
        wlaV0Sub?: WriteLockedAccountSubscriptionV0.AsObject,
        regionsList: Array<string>,
    }

    export enum MsgCase {
        MSG_NOT_SET = 0,
        PROGRAM_V0_SUB = 1,
        WLA_V0_SUB = 2,
    }

}

export class PendingTxNotification extends jspb.Message { 

    hasServerSideTs(): boolean;
    clearServerSideTs(): void;
    getServerSideTs(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setServerSideTs(value?: google_protobuf_timestamp_pb.Timestamp): PendingTxNotification;

    hasExpirationTime(): boolean;
    clearExpirationTime(): void;
    getExpirationTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setExpirationTime(value?: google_protobuf_timestamp_pb.Timestamp): PendingTxNotification;
    clearTransactionsList(): void;
    getTransactionsList(): Array<mev_protos_packet_pb.Packet>;
    setTransactionsList(value: Array<mev_protos_packet_pb.Packet>): PendingTxNotification;
    addTransactions(value?: mev_protos_packet_pb.Packet, index?: number): mev_protos_packet_pb.Packet;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PendingTxNotification.AsObject;
    static toObject(includeInstance: boolean, msg: PendingTxNotification): PendingTxNotification.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PendingTxNotification, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PendingTxNotification;
    static deserializeBinaryFromReader(message: PendingTxNotification, reader: jspb.BinaryReader): PendingTxNotification;
}

export namespace PendingTxNotification {
    export type AsObject = {
        serverSideTs?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        expirationTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        transactionsList: Array<mev_protos_packet_pb.Packet.AsObject>,
    }
}

export class NextScheduledLeaderRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NextScheduledLeaderRequest.AsObject;
    static toObject(includeInstance: boolean, msg: NextScheduledLeaderRequest): NextScheduledLeaderRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NextScheduledLeaderRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NextScheduledLeaderRequest;
    static deserializeBinaryFromReader(message: NextScheduledLeaderRequest, reader: jspb.BinaryReader): NextScheduledLeaderRequest;
}

export namespace NextScheduledLeaderRequest {
    export type AsObject = {
    }
}

export class NextScheduledLeaderResponse extends jspb.Message { 
    getCurrentSlot(): number;
    setCurrentSlot(value: number): NextScheduledLeaderResponse;
    getNextLeaderSlot(): number;
    setNextLeaderSlot(value: number): NextScheduledLeaderResponse;
    getNextLeaderIdentity(): string;
    setNextLeaderIdentity(value: string): NextScheduledLeaderResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NextScheduledLeaderResponse.AsObject;
    static toObject(includeInstance: boolean, msg: NextScheduledLeaderResponse): NextScheduledLeaderResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NextScheduledLeaderResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NextScheduledLeaderResponse;
    static deserializeBinaryFromReader(message: NextScheduledLeaderResponse, reader: jspb.BinaryReader): NextScheduledLeaderResponse;
}

export namespace NextScheduledLeaderResponse {
    export type AsObject = {
        currentSlot: number,
        nextLeaderSlot: number,
        nextLeaderIdentity: string,
    }
}

export class ConnectedLeadersRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ConnectedLeadersRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ConnectedLeadersRequest): ConnectedLeadersRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ConnectedLeadersRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ConnectedLeadersRequest;
    static deserializeBinaryFromReader(message: ConnectedLeadersRequest, reader: jspb.BinaryReader): ConnectedLeadersRequest;
}

export namespace ConnectedLeadersRequest {
    export type AsObject = {
    }
}

export class ConnectedLeadersRegionedRequest extends jspb.Message { 
    clearRegionsList(): void;
    getRegionsList(): Array<string>;
    setRegionsList(value: Array<string>): ConnectedLeadersRegionedRequest;
    addRegions(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ConnectedLeadersRegionedRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ConnectedLeadersRegionedRequest): ConnectedLeadersRegionedRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ConnectedLeadersRegionedRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ConnectedLeadersRegionedRequest;
    static deserializeBinaryFromReader(message: ConnectedLeadersRegionedRequest, reader: jspb.BinaryReader): ConnectedLeadersRegionedRequest;
}

export namespace ConnectedLeadersRegionedRequest {
    export type AsObject = {
        regionsList: Array<string>,
    }
}

export class ConnectedLeadersRegionedResponse extends jspb.Message { 

    getConnectedValidatorsMap(): jspb.Map<string, ConnectedLeadersResponse>;
    clearConnectedValidatorsMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ConnectedLeadersRegionedResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ConnectedLeadersRegionedResponse): ConnectedLeadersRegionedResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ConnectedLeadersRegionedResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ConnectedLeadersRegionedResponse;
    static deserializeBinaryFromReader(message: ConnectedLeadersRegionedResponse, reader: jspb.BinaryReader): ConnectedLeadersRegionedResponse;
}

export namespace ConnectedLeadersRegionedResponse {
    export type AsObject = {

        connectedValidatorsMap: Array<[string, ConnectedLeadersResponse.AsObject]>,
    }
}

export class GetTipAccountsRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTipAccountsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetTipAccountsRequest): GetTipAccountsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTipAccountsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTipAccountsRequest;
    static deserializeBinaryFromReader(message: GetTipAccountsRequest, reader: jspb.BinaryReader): GetTipAccountsRequest;
}

export namespace GetTipAccountsRequest {
    export type AsObject = {
    }
}

export class GetTipAccountsResponse extends jspb.Message { 
    clearAccountsList(): void;
    getAccountsList(): Array<string>;
    setAccountsList(value: Array<string>): GetTipAccountsResponse;
    addAccounts(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTipAccountsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetTipAccountsResponse): GetTipAccountsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTipAccountsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTipAccountsResponse;
    static deserializeBinaryFromReader(message: GetTipAccountsResponse, reader: jspb.BinaryReader): GetTipAccountsResponse;
}

export namespace GetTipAccountsResponse {
    export type AsObject = {
        accountsList: Array<string>,
    }
}

export class SubscribeBundleResultsRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SubscribeBundleResultsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SubscribeBundleResultsRequest): SubscribeBundleResultsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SubscribeBundleResultsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SubscribeBundleResultsRequest;
    static deserializeBinaryFromReader(message: SubscribeBundleResultsRequest, reader: jspb.BinaryReader): SubscribeBundleResultsRequest;
}

export namespace SubscribeBundleResultsRequest {
    export type AsObject = {
    }
}

export class GetRegionsRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetRegionsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetRegionsRequest): GetRegionsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetRegionsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetRegionsRequest;
    static deserializeBinaryFromReader(message: GetRegionsRequest, reader: jspb.BinaryReader): GetRegionsRequest;
}

export namespace GetRegionsRequest {
    export type AsObject = {
    }
}

export class GetRegionsResponse extends jspb.Message { 
    getCurrentRegion(): string;
    setCurrentRegion(value: string): GetRegionsResponse;
    clearAvailableRegionsList(): void;
    getAvailableRegionsList(): Array<string>;
    setAvailableRegionsList(value: Array<string>): GetRegionsResponse;
    addAvailableRegions(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetRegionsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetRegionsResponse): GetRegionsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetRegionsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetRegionsResponse;
    static deserializeBinaryFromReader(message: GetRegionsResponse, reader: jspb.BinaryReader): GetRegionsResponse;
}

export namespace GetRegionsResponse {
    export type AsObject = {
        currentRegion: string,
        availableRegionsList: Array<string>,
    }
}
