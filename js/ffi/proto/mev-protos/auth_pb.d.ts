// package: auth
// file: mev-protos/auth.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class GenerateAuthChallengeRequest extends jspb.Message { 
    getRole(): Role;
    setRole(value: Role): GenerateAuthChallengeRequest;
    getPubkey(): Uint8Array | string;
    getPubkey_asU8(): Uint8Array;
    getPubkey_asB64(): string;
    setPubkey(value: Uint8Array | string): GenerateAuthChallengeRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GenerateAuthChallengeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GenerateAuthChallengeRequest): GenerateAuthChallengeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GenerateAuthChallengeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GenerateAuthChallengeRequest;
    static deserializeBinaryFromReader(message: GenerateAuthChallengeRequest, reader: jspb.BinaryReader): GenerateAuthChallengeRequest;
}

export namespace GenerateAuthChallengeRequest {
    export type AsObject = {
        role: Role,
        pubkey: Uint8Array | string,
    }
}

export class GenerateAuthChallengeResponse extends jspb.Message { 
    getChallenge(): string;
    setChallenge(value: string): GenerateAuthChallengeResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GenerateAuthChallengeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GenerateAuthChallengeResponse): GenerateAuthChallengeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GenerateAuthChallengeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GenerateAuthChallengeResponse;
    static deserializeBinaryFromReader(message: GenerateAuthChallengeResponse, reader: jspb.BinaryReader): GenerateAuthChallengeResponse;
}

export namespace GenerateAuthChallengeResponse {
    export type AsObject = {
        challenge: string,
    }
}

export class GenerateAuthTokensRequest extends jspb.Message { 
    getChallenge(): string;
    setChallenge(value: string): GenerateAuthTokensRequest;
    getClientPubkey(): Uint8Array | string;
    getClientPubkey_asU8(): Uint8Array;
    getClientPubkey_asB64(): string;
    setClientPubkey(value: Uint8Array | string): GenerateAuthTokensRequest;
    getSignedChallenge(): Uint8Array | string;
    getSignedChallenge_asU8(): Uint8Array;
    getSignedChallenge_asB64(): string;
    setSignedChallenge(value: Uint8Array | string): GenerateAuthTokensRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GenerateAuthTokensRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GenerateAuthTokensRequest): GenerateAuthTokensRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GenerateAuthTokensRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GenerateAuthTokensRequest;
    static deserializeBinaryFromReader(message: GenerateAuthTokensRequest, reader: jspb.BinaryReader): GenerateAuthTokensRequest;
}

export namespace GenerateAuthTokensRequest {
    export type AsObject = {
        challenge: string,
        clientPubkey: Uint8Array | string,
        signedChallenge: Uint8Array | string,
    }
}

export class Token extends jspb.Message { 
    getValue(): string;
    setValue(value: string): Token;

    hasExpiresAtUtc(): boolean;
    clearExpiresAtUtc(): void;
    getExpiresAtUtc(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setExpiresAtUtc(value?: google_protobuf_timestamp_pb.Timestamp): Token;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Token.AsObject;
    static toObject(includeInstance: boolean, msg: Token): Token.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Token, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Token;
    static deserializeBinaryFromReader(message: Token, reader: jspb.BinaryReader): Token;
}

export namespace Token {
    export type AsObject = {
        value: string,
        expiresAtUtc?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class GenerateAuthTokensResponse extends jspb.Message { 

    hasAccessToken(): boolean;
    clearAccessToken(): void;
    getAccessToken(): Token | undefined;
    setAccessToken(value?: Token): GenerateAuthTokensResponse;

    hasRefreshToken(): boolean;
    clearRefreshToken(): void;
    getRefreshToken(): Token | undefined;
    setRefreshToken(value?: Token): GenerateAuthTokensResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GenerateAuthTokensResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GenerateAuthTokensResponse): GenerateAuthTokensResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GenerateAuthTokensResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GenerateAuthTokensResponse;
    static deserializeBinaryFromReader(message: GenerateAuthTokensResponse, reader: jspb.BinaryReader): GenerateAuthTokensResponse;
}

export namespace GenerateAuthTokensResponse {
    export type AsObject = {
        accessToken?: Token.AsObject,
        refreshToken?: Token.AsObject,
    }
}

export class RefreshAccessTokenRequest extends jspb.Message { 
    getRefreshToken(): string;
    setRefreshToken(value: string): RefreshAccessTokenRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RefreshAccessTokenRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RefreshAccessTokenRequest): RefreshAccessTokenRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RefreshAccessTokenRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RefreshAccessTokenRequest;
    static deserializeBinaryFromReader(message: RefreshAccessTokenRequest, reader: jspb.BinaryReader): RefreshAccessTokenRequest;
}

export namespace RefreshAccessTokenRequest {
    export type AsObject = {
        refreshToken: string,
    }
}

export class RefreshAccessTokenResponse extends jspb.Message { 

    hasAccessToken(): boolean;
    clearAccessToken(): void;
    getAccessToken(): Token | undefined;
    setAccessToken(value?: Token): RefreshAccessTokenResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RefreshAccessTokenResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RefreshAccessTokenResponse): RefreshAccessTokenResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RefreshAccessTokenResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RefreshAccessTokenResponse;
    static deserializeBinaryFromReader(message: RefreshAccessTokenResponse, reader: jspb.BinaryReader): RefreshAccessTokenResponse;
}

export namespace RefreshAccessTokenResponse {
    export type AsObject = {
        accessToken?: Token.AsObject,
    }
}

export enum Role {
    RELAYER = 0,
    SEARCHER = 1,
    VALIDATOR = 2,
    SHREDSTREAM_SUBSCRIBER = 3,
}
