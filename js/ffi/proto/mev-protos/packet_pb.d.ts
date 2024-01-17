// package: packet
// file: mev-protos/packet.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class PacketBatch extends jspb.Message { 
    clearPacketsList(): void;
    getPacketsList(): Array<Packet>;
    setPacketsList(value: Array<Packet>): PacketBatch;
    addPackets(value?: Packet, index?: number): Packet;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PacketBatch.AsObject;
    static toObject(includeInstance: boolean, msg: PacketBatch): PacketBatch.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PacketBatch, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PacketBatch;
    static deserializeBinaryFromReader(message: PacketBatch, reader: jspb.BinaryReader): PacketBatch;
}

export namespace PacketBatch {
    export type AsObject = {
        packetsList: Array<Packet.AsObject>,
    }
}

export class Packet extends jspb.Message { 
    getData(): Uint8Array | string;
    getData_asU8(): Uint8Array;
    getData_asB64(): string;
    setData(value: Uint8Array | string): Packet;

    hasMeta(): boolean;
    clearMeta(): void;
    getMeta(): Meta | undefined;
    setMeta(value?: Meta): Packet;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Packet.AsObject;
    static toObject(includeInstance: boolean, msg: Packet): Packet.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Packet, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Packet;
    static deserializeBinaryFromReader(message: Packet, reader: jspb.BinaryReader): Packet;
}

export namespace Packet {
    export type AsObject = {
        data: Uint8Array | string,
        meta?: Meta.AsObject,
    }
}

export class Meta extends jspb.Message { 
    getSize(): number;
    setSize(value: number): Meta;
    getAddr(): string;
    setAddr(value: string): Meta;
    getPort(): number;
    setPort(value: number): Meta;

    hasFlags(): boolean;
    clearFlags(): void;
    getFlags(): PacketFlags | undefined;
    setFlags(value?: PacketFlags): Meta;
    getSenderStake(): number;
    setSenderStake(value: number): Meta;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Meta.AsObject;
    static toObject(includeInstance: boolean, msg: Meta): Meta.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Meta, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Meta;
    static deserializeBinaryFromReader(message: Meta, reader: jspb.BinaryReader): Meta;
}

export namespace Meta {
    export type AsObject = {
        size: number,
        addr: string,
        port: number,
        flags?: PacketFlags.AsObject,
        senderStake: number,
    }
}

export class PacketFlags extends jspb.Message { 
    getDiscard(): boolean;
    setDiscard(value: boolean): PacketFlags;
    getForwarded(): boolean;
    setForwarded(value: boolean): PacketFlags;
    getRepair(): boolean;
    setRepair(value: boolean): PacketFlags;
    getSimpleVoteTx(): boolean;
    setSimpleVoteTx(value: boolean): PacketFlags;
    getTracerPacket(): boolean;
    setTracerPacket(value: boolean): PacketFlags;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PacketFlags.AsObject;
    static toObject(includeInstance: boolean, msg: PacketFlags): PacketFlags.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PacketFlags, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PacketFlags;
    static deserializeBinaryFromReader(message: PacketFlags, reader: jspb.BinaryReader): PacketFlags;
}

export namespace PacketFlags {
    export type AsObject = {
        discard: boolean,
        forwarded: boolean,
        repair: boolean,
        simpleVoteTx: boolean,
        tracerPacket: boolean,
    }
}
