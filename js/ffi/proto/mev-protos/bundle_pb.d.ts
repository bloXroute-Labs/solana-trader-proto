// package: bundle
// file: mev-protos/bundle.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as mev_protos_packet_pb from "../mev-protos/packet_pb";
import * as mev_protos_shared_pb from "../mev-protos/shared_pb";

export class Bundle extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): mev_protos_shared_pb.Header | undefined;
    setHeader(value?: mev_protos_shared_pb.Header): Bundle;
    clearPacketsList(): void;
    getPacketsList(): Array<mev_protos_packet_pb.Packet>;
    setPacketsList(value: Array<mev_protos_packet_pb.Packet>): Bundle;
    addPackets(value?: mev_protos_packet_pb.Packet, index?: number): mev_protos_packet_pb.Packet;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Bundle.AsObject;
    static toObject(includeInstance: boolean, msg: Bundle): Bundle.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Bundle, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Bundle;
    static deserializeBinaryFromReader(message: Bundle, reader: jspb.BinaryReader): Bundle;
}

export namespace Bundle {
    export type AsObject = {
        header?: mev_protos_shared_pb.Header.AsObject,
        packetsList: Array<mev_protos_packet_pb.Packet.AsObject>,
    }
}

export class BundleUuid extends jspb.Message { 

    hasBundle(): boolean;
    clearBundle(): void;
    getBundle(): Bundle | undefined;
    setBundle(value?: Bundle): BundleUuid;
    getUuid(): string;
    setUuid(value: string): BundleUuid;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BundleUuid.AsObject;
    static toObject(includeInstance: boolean, msg: BundleUuid): BundleUuid.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BundleUuid, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BundleUuid;
    static deserializeBinaryFromReader(message: BundleUuid, reader: jspb.BinaryReader): BundleUuid;
}

export namespace BundleUuid {
    export type AsObject = {
        bundle?: Bundle.AsObject,
        uuid: string,
    }
}

export class Accepted extends jspb.Message { 
    getSlot(): number;
    setSlot(value: number): Accepted;
    getValidatorIdentity(): string;
    setValidatorIdentity(value: string): Accepted;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Accepted.AsObject;
    static toObject(includeInstance: boolean, msg: Accepted): Accepted.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Accepted, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Accepted;
    static deserializeBinaryFromReader(message: Accepted, reader: jspb.BinaryReader): Accepted;
}

export namespace Accepted {
    export type AsObject = {
        slot: number,
        validatorIdentity: string,
    }
}

export class Rejected extends jspb.Message { 

    hasStateAuctionBidRejected(): boolean;
    clearStateAuctionBidRejected(): void;
    getStateAuctionBidRejected(): StateAuctionBidRejected | undefined;
    setStateAuctionBidRejected(value?: StateAuctionBidRejected): Rejected;

    hasWinningBatchBidRejected(): boolean;
    clearWinningBatchBidRejected(): void;
    getWinningBatchBidRejected(): WinningBatchBidRejected | undefined;
    setWinningBatchBidRejected(value?: WinningBatchBidRejected): Rejected;

    hasSimulationFailure(): boolean;
    clearSimulationFailure(): void;
    getSimulationFailure(): SimulationFailure | undefined;
    setSimulationFailure(value?: SimulationFailure): Rejected;

    hasInternalError(): boolean;
    clearInternalError(): void;
    getInternalError(): InternalError | undefined;
    setInternalError(value?: InternalError): Rejected;

    hasDroppedBundle(): boolean;
    clearDroppedBundle(): void;
    getDroppedBundle(): DroppedBundle | undefined;
    setDroppedBundle(value?: DroppedBundle): Rejected;

    getReasonCase(): Rejected.ReasonCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Rejected.AsObject;
    static toObject(includeInstance: boolean, msg: Rejected): Rejected.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Rejected, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Rejected;
    static deserializeBinaryFromReader(message: Rejected, reader: jspb.BinaryReader): Rejected;
}

export namespace Rejected {
    export type AsObject = {
        stateAuctionBidRejected?: StateAuctionBidRejected.AsObject,
        winningBatchBidRejected?: WinningBatchBidRejected.AsObject,
        simulationFailure?: SimulationFailure.AsObject,
        internalError?: InternalError.AsObject,
        droppedBundle?: DroppedBundle.AsObject,
    }

    export enum ReasonCase {
        REASON_NOT_SET = 0,
        STATE_AUCTION_BID_REJECTED = 1,
        WINNING_BATCH_BID_REJECTED = 2,
        SIMULATION_FAILURE = 3,
        INTERNAL_ERROR = 4,
        DROPPED_BUNDLE = 5,
    }

}

export class WinningBatchBidRejected extends jspb.Message { 
    getAuctionId(): string;
    setAuctionId(value: string): WinningBatchBidRejected;
    getSimulatedBidLamports(): number;
    setSimulatedBidLamports(value: number): WinningBatchBidRejected;

    hasMsg(): boolean;
    clearMsg(): void;
    getMsg(): string | undefined;
    setMsg(value: string): WinningBatchBidRejected;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WinningBatchBidRejected.AsObject;
    static toObject(includeInstance: boolean, msg: WinningBatchBidRejected): WinningBatchBidRejected.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WinningBatchBidRejected, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WinningBatchBidRejected;
    static deserializeBinaryFromReader(message: WinningBatchBidRejected, reader: jspb.BinaryReader): WinningBatchBidRejected;
}

export namespace WinningBatchBidRejected {
    export type AsObject = {
        auctionId: string,
        simulatedBidLamports: number,
        msg?: string,
    }
}

export class StateAuctionBidRejected extends jspb.Message { 
    getAuctionId(): string;
    setAuctionId(value: string): StateAuctionBidRejected;
    getSimulatedBidLamports(): number;
    setSimulatedBidLamports(value: number): StateAuctionBidRejected;

    hasMsg(): boolean;
    clearMsg(): void;
    getMsg(): string | undefined;
    setMsg(value: string): StateAuctionBidRejected;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StateAuctionBidRejected.AsObject;
    static toObject(includeInstance: boolean, msg: StateAuctionBidRejected): StateAuctionBidRejected.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StateAuctionBidRejected, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StateAuctionBidRejected;
    static deserializeBinaryFromReader(message: StateAuctionBidRejected, reader: jspb.BinaryReader): StateAuctionBidRejected;
}

export namespace StateAuctionBidRejected {
    export type AsObject = {
        auctionId: string,
        simulatedBidLamports: number,
        msg?: string,
    }
}

export class SimulationFailure extends jspb.Message { 
    getTxSignature(): string;
    setTxSignature(value: string): SimulationFailure;

    hasMsg(): boolean;
    clearMsg(): void;
    getMsg(): string | undefined;
    setMsg(value: string): SimulationFailure;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SimulationFailure.AsObject;
    static toObject(includeInstance: boolean, msg: SimulationFailure): SimulationFailure.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SimulationFailure, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SimulationFailure;
    static deserializeBinaryFromReader(message: SimulationFailure, reader: jspb.BinaryReader): SimulationFailure;
}

export namespace SimulationFailure {
    export type AsObject = {
        txSignature: string,
        msg?: string,
    }
}

export class InternalError extends jspb.Message { 
    getMsg(): string;
    setMsg(value: string): InternalError;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InternalError.AsObject;
    static toObject(includeInstance: boolean, msg: InternalError): InternalError.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InternalError, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InternalError;
    static deserializeBinaryFromReader(message: InternalError, reader: jspb.BinaryReader): InternalError;
}

export namespace InternalError {
    export type AsObject = {
        msg: string,
    }
}

export class DroppedBundle extends jspb.Message { 
    getMsg(): string;
    setMsg(value: string): DroppedBundle;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DroppedBundle.AsObject;
    static toObject(includeInstance: boolean, msg: DroppedBundle): DroppedBundle.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DroppedBundle, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DroppedBundle;
    static deserializeBinaryFromReader(message: DroppedBundle, reader: jspb.BinaryReader): DroppedBundle;
}

export namespace DroppedBundle {
    export type AsObject = {
        msg: string,
    }
}

export class Finalized extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Finalized.AsObject;
    static toObject(includeInstance: boolean, msg: Finalized): Finalized.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Finalized, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Finalized;
    static deserializeBinaryFromReader(message: Finalized, reader: jspb.BinaryReader): Finalized;
}

export namespace Finalized {
    export type AsObject = {
    }
}

export class Processed extends jspb.Message { 
    getValidatorIdentity(): string;
    setValidatorIdentity(value: string): Processed;
    getSlot(): number;
    setSlot(value: number): Processed;
    getBundleIndex(): number;
    setBundleIndex(value: number): Processed;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Processed.AsObject;
    static toObject(includeInstance: boolean, msg: Processed): Processed.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Processed, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Processed;
    static deserializeBinaryFromReader(message: Processed, reader: jspb.BinaryReader): Processed;
}

export namespace Processed {
    export type AsObject = {
        validatorIdentity: string,
        slot: number,
        bundleIndex: number,
    }
}

export class Dropped extends jspb.Message { 
    getReason(): DroppedReason;
    setReason(value: DroppedReason): Dropped;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Dropped.AsObject;
    static toObject(includeInstance: boolean, msg: Dropped): Dropped.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Dropped, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Dropped;
    static deserializeBinaryFromReader(message: Dropped, reader: jspb.BinaryReader): Dropped;
}

export namespace Dropped {
    export type AsObject = {
        reason: DroppedReason,
    }
}

export class BundleResult extends jspb.Message { 
    getBundleId(): string;
    setBundleId(value: string): BundleResult;

    hasAccepted(): boolean;
    clearAccepted(): void;
    getAccepted(): Accepted | undefined;
    setAccepted(value?: Accepted): BundleResult;

    hasRejected(): boolean;
    clearRejected(): void;
    getRejected(): Rejected | undefined;
    setRejected(value?: Rejected): BundleResult;

    hasFinalized(): boolean;
    clearFinalized(): void;
    getFinalized(): Finalized | undefined;
    setFinalized(value?: Finalized): BundleResult;

    hasProcessed(): boolean;
    clearProcessed(): void;
    getProcessed(): Processed | undefined;
    setProcessed(value?: Processed): BundleResult;

    hasDropped(): boolean;
    clearDropped(): void;
    getDropped(): Dropped | undefined;
    setDropped(value?: Dropped): BundleResult;

    getResultCase(): BundleResult.ResultCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BundleResult.AsObject;
    static toObject(includeInstance: boolean, msg: BundleResult): BundleResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BundleResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BundleResult;
    static deserializeBinaryFromReader(message: BundleResult, reader: jspb.BinaryReader): BundleResult;
}

export namespace BundleResult {
    export type AsObject = {
        bundleId: string,
        accepted?: Accepted.AsObject,
        rejected?: Rejected.AsObject,
        finalized?: Finalized.AsObject,
        processed?: Processed.AsObject,
        dropped?: Dropped.AsObject,
    }

    export enum ResultCase {
        RESULT_NOT_SET = 0,
        ACCEPTED = 2,
        REJECTED = 3,
        FINALIZED = 4,
        PROCESSED = 5,
        DROPPED = 6,
    }

}

export enum DroppedReason {
    BLOCKHASHEXPIRED = 0,
    PARTIALLYPROCESSED = 1,
    NOTFINALIZED = 2,
}
