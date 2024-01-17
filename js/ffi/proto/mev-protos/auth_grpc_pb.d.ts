// package: auth
// file: mev-protos/auth.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as mev_protos_auth_pb from "../mev-protos/auth_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

interface IAuthServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    generateAuthChallenge: IAuthServiceService_IGenerateAuthChallenge;
    generateAuthTokens: IAuthServiceService_IGenerateAuthTokens;
    refreshAccessToken: IAuthServiceService_IRefreshAccessToken;
}

interface IAuthServiceService_IGenerateAuthChallenge extends grpc.MethodDefinition<mev_protos_auth_pb.GenerateAuthChallengeRequest, mev_protos_auth_pb.GenerateAuthChallengeResponse> {
    path: "/auth.AuthService/GenerateAuthChallenge";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<mev_protos_auth_pb.GenerateAuthChallengeRequest>;
    requestDeserialize: grpc.deserialize<mev_protos_auth_pb.GenerateAuthChallengeRequest>;
    responseSerialize: grpc.serialize<mev_protos_auth_pb.GenerateAuthChallengeResponse>;
    responseDeserialize: grpc.deserialize<mev_protos_auth_pb.GenerateAuthChallengeResponse>;
}
interface IAuthServiceService_IGenerateAuthTokens extends grpc.MethodDefinition<mev_protos_auth_pb.GenerateAuthTokensRequest, mev_protos_auth_pb.GenerateAuthTokensResponse> {
    path: "/auth.AuthService/GenerateAuthTokens";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<mev_protos_auth_pb.GenerateAuthTokensRequest>;
    requestDeserialize: grpc.deserialize<mev_protos_auth_pb.GenerateAuthTokensRequest>;
    responseSerialize: grpc.serialize<mev_protos_auth_pb.GenerateAuthTokensResponse>;
    responseDeserialize: grpc.deserialize<mev_protos_auth_pb.GenerateAuthTokensResponse>;
}
interface IAuthServiceService_IRefreshAccessToken extends grpc.MethodDefinition<mev_protos_auth_pb.RefreshAccessTokenRequest, mev_protos_auth_pb.RefreshAccessTokenResponse> {
    path: "/auth.AuthService/RefreshAccessToken";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<mev_protos_auth_pb.RefreshAccessTokenRequest>;
    requestDeserialize: grpc.deserialize<mev_protos_auth_pb.RefreshAccessTokenRequest>;
    responseSerialize: grpc.serialize<mev_protos_auth_pb.RefreshAccessTokenResponse>;
    responseDeserialize: grpc.deserialize<mev_protos_auth_pb.RefreshAccessTokenResponse>;
}

export const AuthServiceService: IAuthServiceService;

export interface IAuthServiceServer extends grpc.UntypedServiceImplementation {
    generateAuthChallenge: grpc.handleUnaryCall<mev_protos_auth_pb.GenerateAuthChallengeRequest, mev_protos_auth_pb.GenerateAuthChallengeResponse>;
    generateAuthTokens: grpc.handleUnaryCall<mev_protos_auth_pb.GenerateAuthTokensRequest, mev_protos_auth_pb.GenerateAuthTokensResponse>;
    refreshAccessToken: grpc.handleUnaryCall<mev_protos_auth_pb.RefreshAccessTokenRequest, mev_protos_auth_pb.RefreshAccessTokenResponse>;
}

export interface IAuthServiceClient {
    generateAuthChallenge(request: mev_protos_auth_pb.GenerateAuthChallengeRequest, callback: (error: grpc.ServiceError | null, response: mev_protos_auth_pb.GenerateAuthChallengeResponse) => void): grpc.ClientUnaryCall;
    generateAuthChallenge(request: mev_protos_auth_pb.GenerateAuthChallengeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: mev_protos_auth_pb.GenerateAuthChallengeResponse) => void): grpc.ClientUnaryCall;
    generateAuthChallenge(request: mev_protos_auth_pb.GenerateAuthChallengeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: mev_protos_auth_pb.GenerateAuthChallengeResponse) => void): grpc.ClientUnaryCall;
    generateAuthTokens(request: mev_protos_auth_pb.GenerateAuthTokensRequest, callback: (error: grpc.ServiceError | null, response: mev_protos_auth_pb.GenerateAuthTokensResponse) => void): grpc.ClientUnaryCall;
    generateAuthTokens(request: mev_protos_auth_pb.GenerateAuthTokensRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: mev_protos_auth_pb.GenerateAuthTokensResponse) => void): grpc.ClientUnaryCall;
    generateAuthTokens(request: mev_protos_auth_pb.GenerateAuthTokensRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: mev_protos_auth_pb.GenerateAuthTokensResponse) => void): grpc.ClientUnaryCall;
    refreshAccessToken(request: mev_protos_auth_pb.RefreshAccessTokenRequest, callback: (error: grpc.ServiceError | null, response: mev_protos_auth_pb.RefreshAccessTokenResponse) => void): grpc.ClientUnaryCall;
    refreshAccessToken(request: mev_protos_auth_pb.RefreshAccessTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: mev_protos_auth_pb.RefreshAccessTokenResponse) => void): grpc.ClientUnaryCall;
    refreshAccessToken(request: mev_protos_auth_pb.RefreshAccessTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: mev_protos_auth_pb.RefreshAccessTokenResponse) => void): grpc.ClientUnaryCall;
}

export class AuthServiceClient extends grpc.Client implements IAuthServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public generateAuthChallenge(request: mev_protos_auth_pb.GenerateAuthChallengeRequest, callback: (error: grpc.ServiceError | null, response: mev_protos_auth_pb.GenerateAuthChallengeResponse) => void): grpc.ClientUnaryCall;
    public generateAuthChallenge(request: mev_protos_auth_pb.GenerateAuthChallengeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: mev_protos_auth_pb.GenerateAuthChallengeResponse) => void): grpc.ClientUnaryCall;
    public generateAuthChallenge(request: mev_protos_auth_pb.GenerateAuthChallengeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: mev_protos_auth_pb.GenerateAuthChallengeResponse) => void): grpc.ClientUnaryCall;
    public generateAuthTokens(request: mev_protos_auth_pb.GenerateAuthTokensRequest, callback: (error: grpc.ServiceError | null, response: mev_protos_auth_pb.GenerateAuthTokensResponse) => void): grpc.ClientUnaryCall;
    public generateAuthTokens(request: mev_protos_auth_pb.GenerateAuthTokensRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: mev_protos_auth_pb.GenerateAuthTokensResponse) => void): grpc.ClientUnaryCall;
    public generateAuthTokens(request: mev_protos_auth_pb.GenerateAuthTokensRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: mev_protos_auth_pb.GenerateAuthTokensResponse) => void): grpc.ClientUnaryCall;
    public refreshAccessToken(request: mev_protos_auth_pb.RefreshAccessTokenRequest, callback: (error: grpc.ServiceError | null, response: mev_protos_auth_pb.RefreshAccessTokenResponse) => void): grpc.ClientUnaryCall;
    public refreshAccessToken(request: mev_protos_auth_pb.RefreshAccessTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: mev_protos_auth_pb.RefreshAccessTokenResponse) => void): grpc.ClientUnaryCall;
    public refreshAccessToken(request: mev_protos_auth_pb.RefreshAccessTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: mev_protos_auth_pb.RefreshAccessTokenResponse) => void): grpc.ClientUnaryCall;
}
