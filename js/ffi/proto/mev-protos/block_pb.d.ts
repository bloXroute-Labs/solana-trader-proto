// package: block
// file: mev-protos/block.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as mev_protos_shared_pb from "../mev-protos/shared_pb";

export class CondensedBlock extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): mev_protos_shared_pb.Header | undefined;
    setHeader(value?: mev_protos_shared_pb.Header): CondensedBlock;
    getPreviousBlockhash(): string;
    setPreviousBlockhash(value: string): CondensedBlock;
    getBlockhash(): string;
    setBlockhash(value: string): CondensedBlock;
    getParentSlot(): number;
    setParentSlot(value: number): CondensedBlock;
    clearVersionedTransactionsList(): void;
    getVersionedTransactionsList(): Array<Uint8Array | string>;
    getVersionedTransactionsList_asU8(): Array<Uint8Array>;
    getVersionedTransactionsList_asB64(): Array<string>;
    setVersionedTransactionsList(value: Array<Uint8Array | string>): CondensedBlock;
    addVersionedTransactions(value: Uint8Array | string, index?: number): Uint8Array | string;
    getSlot(): number;
    setSlot(value: number): CondensedBlock;
    getCommitment(): string;
    setCommitment(value: string): CondensedBlock;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CondensedBlock.AsObject;
    static toObject(includeInstance: boolean, msg: CondensedBlock): CondensedBlock.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CondensedBlock, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CondensedBlock;
    static deserializeBinaryFromReader(message: CondensedBlock, reader: jspb.BinaryReader): CondensedBlock;
}

export namespace CondensedBlock {
    export type AsObject = {
        header?: mev_protos_shared_pb.Header.AsObject,
        previousBlockhash: string,
        blockhash: string,
        parentSlot: number,
        versionedTransactionsList: Array<Uint8Array | string>,
        slot: number,
        commitment: string,
    }
}
