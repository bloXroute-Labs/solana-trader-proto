// package: searcher
// file: mev-protos/searcher.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as mev_protos_searcher_pb from "../mev-protos/searcher_pb";
import * as mev_protos_bundle_pb from "../mev-protos/bundle_pb";
import * as mev_protos_packet_pb from "../mev-protos/packet_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

interface ISearcherServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    subscribeBundleResults: ISearcherServiceService_ISubscribeBundleResults;
    subscribeMempool: ISearcherServiceService_ISubscribeMempool;
    sendBundle: ISearcherServiceService_ISendBundle;
    getNextScheduledLeader: ISearcherServiceService_IGetNextScheduledLeader;
    getConnectedLeaders: ISearcherServiceService_IGetConnectedLeaders;
    getConnectedLeadersRegioned: ISearcherServiceService_IGetConnectedLeadersRegioned;
    getTipAccounts: ISearcherServiceService_IGetTipAccounts;
    getRegions: ISearcherServiceService_IGetRegions;
}

interface ISearcherServiceService_ISubscribeBundleResults extends grpc.MethodDefinition<mev_protos_searcher_pb.SubscribeBundleResultsRequest, mev_protos_bundle_pb.BundleResult> {
    path: "/searcher.SearcherService/SubscribeBundleResults";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<mev_protos_searcher_pb.SubscribeBundleResultsRequest>;
    requestDeserialize: grpc.deserialize<mev_protos_searcher_pb.SubscribeBundleResultsRequest>;
    responseSerialize: grpc.serialize<mev_protos_bundle_pb.BundleResult>;
    responseDeserialize: grpc.deserialize<mev_protos_bundle_pb.BundleResult>;
}
interface ISearcherServiceService_ISubscribeMempool extends grpc.MethodDefinition<mev_protos_searcher_pb.MempoolSubscription, mev_protos_searcher_pb.PendingTxNotification> {
    path: "/searcher.SearcherService/SubscribeMempool";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<mev_protos_searcher_pb.MempoolSubscription>;
    requestDeserialize: grpc.deserialize<mev_protos_searcher_pb.MempoolSubscription>;
    responseSerialize: grpc.serialize<mev_protos_searcher_pb.PendingTxNotification>;
    responseDeserialize: grpc.deserialize<mev_protos_searcher_pb.PendingTxNotification>;
}
interface ISearcherServiceService_ISendBundle extends grpc.MethodDefinition<mev_protos_searcher_pb.SendBundleRequest, mev_protos_searcher_pb.SendBundleResponse> {
    path: "/searcher.SearcherService/SendBundle";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<mev_protos_searcher_pb.SendBundleRequest>;
    requestDeserialize: grpc.deserialize<mev_protos_searcher_pb.SendBundleRequest>;
    responseSerialize: grpc.serialize<mev_protos_searcher_pb.SendBundleResponse>;
    responseDeserialize: grpc.deserialize<mev_protos_searcher_pb.SendBundleResponse>;
}
interface ISearcherServiceService_IGetNextScheduledLeader extends grpc.MethodDefinition<mev_protos_searcher_pb.NextScheduledLeaderRequest, mev_protos_searcher_pb.NextScheduledLeaderResponse> {
    path: "/searcher.SearcherService/GetNextScheduledLeader";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<mev_protos_searcher_pb.NextScheduledLeaderRequest>;
    requestDeserialize: grpc.deserialize<mev_protos_searcher_pb.NextScheduledLeaderRequest>;
    responseSerialize: grpc.serialize<mev_protos_searcher_pb.NextScheduledLeaderResponse>;
    responseDeserialize: grpc.deserialize<mev_protos_searcher_pb.NextScheduledLeaderResponse>;
}
interface ISearcherServiceService_IGetConnectedLeaders extends grpc.MethodDefinition<mev_protos_searcher_pb.ConnectedLeadersRequest, mev_protos_searcher_pb.ConnectedLeadersResponse> {
    path: "/searcher.SearcherService/GetConnectedLeaders";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<mev_protos_searcher_pb.ConnectedLeadersRequest>;
    requestDeserialize: grpc.deserialize<mev_protos_searcher_pb.ConnectedLeadersRequest>;
    responseSerialize: grpc.serialize<mev_protos_searcher_pb.ConnectedLeadersResponse>;
    responseDeserialize: grpc.deserialize<mev_protos_searcher_pb.ConnectedLeadersResponse>;
}
interface ISearcherServiceService_IGetConnectedLeadersRegioned extends grpc.MethodDefinition<mev_protos_searcher_pb.ConnectedLeadersRegionedRequest, mev_protos_searcher_pb.ConnectedLeadersRegionedResponse> {
    path: "/searcher.SearcherService/GetConnectedLeadersRegioned";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<mev_protos_searcher_pb.ConnectedLeadersRegionedRequest>;
    requestDeserialize: grpc.deserialize<mev_protos_searcher_pb.ConnectedLeadersRegionedRequest>;
    responseSerialize: grpc.serialize<mev_protos_searcher_pb.ConnectedLeadersRegionedResponse>;
    responseDeserialize: grpc.deserialize<mev_protos_searcher_pb.ConnectedLeadersRegionedResponse>;
}
interface ISearcherServiceService_IGetTipAccounts extends grpc.MethodDefinition<mev_protos_searcher_pb.GetTipAccountsRequest, mev_protos_searcher_pb.GetTipAccountsResponse> {
    path: "/searcher.SearcherService/GetTipAccounts";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<mev_protos_searcher_pb.GetTipAccountsRequest>;
    requestDeserialize: grpc.deserialize<mev_protos_searcher_pb.GetTipAccountsRequest>;
    responseSerialize: grpc.serialize<mev_protos_searcher_pb.GetTipAccountsResponse>;
    responseDeserialize: grpc.deserialize<mev_protos_searcher_pb.GetTipAccountsResponse>;
}
interface ISearcherServiceService_IGetRegions extends grpc.MethodDefinition<mev_protos_searcher_pb.GetRegionsRequest, mev_protos_searcher_pb.GetRegionsResponse> {
    path: "/searcher.SearcherService/GetRegions";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<mev_protos_searcher_pb.GetRegionsRequest>;
    requestDeserialize: grpc.deserialize<mev_protos_searcher_pb.GetRegionsRequest>;
    responseSerialize: grpc.serialize<mev_protos_searcher_pb.GetRegionsResponse>;
    responseDeserialize: grpc.deserialize<mev_protos_searcher_pb.GetRegionsResponse>;
}

export const SearcherServiceService: ISearcherServiceService;

export interface ISearcherServiceServer extends grpc.UntypedServiceImplementation {
    subscribeBundleResults: grpc.handleServerStreamingCall<mev_protos_searcher_pb.SubscribeBundleResultsRequest, mev_protos_bundle_pb.BundleResult>;
    subscribeMempool: grpc.handleServerStreamingCall<mev_protos_searcher_pb.MempoolSubscription, mev_protos_searcher_pb.PendingTxNotification>;
    sendBundle: grpc.handleUnaryCall<mev_protos_searcher_pb.SendBundleRequest, mev_protos_searcher_pb.SendBundleResponse>;
    getNextScheduledLeader: grpc.handleUnaryCall<mev_protos_searcher_pb.NextScheduledLeaderRequest, mev_protos_searcher_pb.NextScheduledLeaderResponse>;
    getConnectedLeaders: grpc.handleUnaryCall<mev_protos_searcher_pb.ConnectedLeadersRequest, mev_protos_searcher_pb.ConnectedLeadersResponse>;
    getConnectedLeadersRegioned: grpc.handleUnaryCall<mev_protos_searcher_pb.ConnectedLeadersRegionedRequest, mev_protos_searcher_pb.ConnectedLeadersRegionedResponse>;
    getTipAccounts: grpc.handleUnaryCall<mev_protos_searcher_pb.GetTipAccountsRequest, mev_protos_searcher_pb.GetTipAccountsResponse>;
    getRegions: grpc.handleUnaryCall<mev_protos_searcher_pb.GetRegionsRequest, mev_protos_searcher_pb.GetRegionsResponse>;
}

export interface ISearcherServiceClient {
    subscribeBundleResults(request: mev_protos_searcher_pb.SubscribeBundleResultsRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<mev_protos_bundle_pb.BundleResult>;
    subscribeBundleResults(request: mev_protos_searcher_pb.SubscribeBundleResultsRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<mev_protos_bundle_pb.BundleResult>;
    subscribeMempool(request: mev_protos_searcher_pb.MempoolSubscription, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<mev_protos_searcher_pb.PendingTxNotification>;
    subscribeMempool(request: mev_protos_searcher_pb.MempoolSubscription, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<mev_protos_searcher_pb.PendingTxNotification>;
    sendBundle(request: mev_protos_searcher_pb.SendBundleRequest, callback: (error: grpc.ServiceError | null, response: mev_protos_searcher_pb.SendBundleResponse) => void): grpc.ClientUnaryCall;
    sendBundle(request: mev_protos_searcher_pb.SendBundleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: mev_protos_searcher_pb.SendBundleResponse) => void): grpc.ClientUnaryCall;
    sendBundle(request: mev_protos_searcher_pb.SendBundleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: mev_protos_searcher_pb.SendBundleResponse) => void): grpc.ClientUnaryCall;
    getNextScheduledLeader(request: mev_protos_searcher_pb.NextScheduledLeaderRequest, callback: (error: grpc.ServiceError | null, response: mev_protos_searcher_pb.NextScheduledLeaderResponse) => void): grpc.ClientUnaryCall;
    getNextScheduledLeader(request: mev_protos_searcher_pb.NextScheduledLeaderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: mev_protos_searcher_pb.NextScheduledLeaderResponse) => void): grpc.ClientUnaryCall;
    getNextScheduledLeader(request: mev_protos_searcher_pb.NextScheduledLeaderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: mev_protos_searcher_pb.NextScheduledLeaderResponse) => void): grpc.ClientUnaryCall;
    getConnectedLeaders(request: mev_protos_searcher_pb.ConnectedLeadersRequest, callback: (error: grpc.ServiceError | null, response: mev_protos_searcher_pb.ConnectedLeadersResponse) => void): grpc.ClientUnaryCall;
    getConnectedLeaders(request: mev_protos_searcher_pb.ConnectedLeadersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: mev_protos_searcher_pb.ConnectedLeadersResponse) => void): grpc.ClientUnaryCall;
    getConnectedLeaders(request: mev_protos_searcher_pb.ConnectedLeadersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: mev_protos_searcher_pb.ConnectedLeadersResponse) => void): grpc.ClientUnaryCall;
    getConnectedLeadersRegioned(request: mev_protos_searcher_pb.ConnectedLeadersRegionedRequest, callback: (error: grpc.ServiceError | null, response: mev_protos_searcher_pb.ConnectedLeadersRegionedResponse) => void): grpc.ClientUnaryCall;
    getConnectedLeadersRegioned(request: mev_protos_searcher_pb.ConnectedLeadersRegionedRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: mev_protos_searcher_pb.ConnectedLeadersRegionedResponse) => void): grpc.ClientUnaryCall;
    getConnectedLeadersRegioned(request: mev_protos_searcher_pb.ConnectedLeadersRegionedRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: mev_protos_searcher_pb.ConnectedLeadersRegionedResponse) => void): grpc.ClientUnaryCall;
    getTipAccounts(request: mev_protos_searcher_pb.GetTipAccountsRequest, callback: (error: grpc.ServiceError | null, response: mev_protos_searcher_pb.GetTipAccountsResponse) => void): grpc.ClientUnaryCall;
    getTipAccounts(request: mev_protos_searcher_pb.GetTipAccountsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: mev_protos_searcher_pb.GetTipAccountsResponse) => void): grpc.ClientUnaryCall;
    getTipAccounts(request: mev_protos_searcher_pb.GetTipAccountsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: mev_protos_searcher_pb.GetTipAccountsResponse) => void): grpc.ClientUnaryCall;
    getRegions(request: mev_protos_searcher_pb.GetRegionsRequest, callback: (error: grpc.ServiceError | null, response: mev_protos_searcher_pb.GetRegionsResponse) => void): grpc.ClientUnaryCall;
    getRegions(request: mev_protos_searcher_pb.GetRegionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: mev_protos_searcher_pb.GetRegionsResponse) => void): grpc.ClientUnaryCall;
    getRegions(request: mev_protos_searcher_pb.GetRegionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: mev_protos_searcher_pb.GetRegionsResponse) => void): grpc.ClientUnaryCall;
}

export class SearcherServiceClient extends grpc.Client implements ISearcherServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public subscribeBundleResults(request: mev_protos_searcher_pb.SubscribeBundleResultsRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<mev_protos_bundle_pb.BundleResult>;
    public subscribeBundleResults(request: mev_protos_searcher_pb.SubscribeBundleResultsRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<mev_protos_bundle_pb.BundleResult>;
    public subscribeMempool(request: mev_protos_searcher_pb.MempoolSubscription, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<mev_protos_searcher_pb.PendingTxNotification>;
    public subscribeMempool(request: mev_protos_searcher_pb.MempoolSubscription, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<mev_protos_searcher_pb.PendingTxNotification>;
    public sendBundle(request: mev_protos_searcher_pb.SendBundleRequest, callback: (error: grpc.ServiceError | null, response: mev_protos_searcher_pb.SendBundleResponse) => void): grpc.ClientUnaryCall;
    public sendBundle(request: mev_protos_searcher_pb.SendBundleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: mev_protos_searcher_pb.SendBundleResponse) => void): grpc.ClientUnaryCall;
    public sendBundle(request: mev_protos_searcher_pb.SendBundleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: mev_protos_searcher_pb.SendBundleResponse) => void): grpc.ClientUnaryCall;
    public getNextScheduledLeader(request: mev_protos_searcher_pb.NextScheduledLeaderRequest, callback: (error: grpc.ServiceError | null, response: mev_protos_searcher_pb.NextScheduledLeaderResponse) => void): grpc.ClientUnaryCall;
    public getNextScheduledLeader(request: mev_protos_searcher_pb.NextScheduledLeaderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: mev_protos_searcher_pb.NextScheduledLeaderResponse) => void): grpc.ClientUnaryCall;
    public getNextScheduledLeader(request: mev_protos_searcher_pb.NextScheduledLeaderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: mev_protos_searcher_pb.NextScheduledLeaderResponse) => void): grpc.ClientUnaryCall;
    public getConnectedLeaders(request: mev_protos_searcher_pb.ConnectedLeadersRequest, callback: (error: grpc.ServiceError | null, response: mev_protos_searcher_pb.ConnectedLeadersResponse) => void): grpc.ClientUnaryCall;
    public getConnectedLeaders(request: mev_protos_searcher_pb.ConnectedLeadersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: mev_protos_searcher_pb.ConnectedLeadersResponse) => void): grpc.ClientUnaryCall;
    public getConnectedLeaders(request: mev_protos_searcher_pb.ConnectedLeadersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: mev_protos_searcher_pb.ConnectedLeadersResponse) => void): grpc.ClientUnaryCall;
    public getConnectedLeadersRegioned(request: mev_protos_searcher_pb.ConnectedLeadersRegionedRequest, callback: (error: grpc.ServiceError | null, response: mev_protos_searcher_pb.ConnectedLeadersRegionedResponse) => void): grpc.ClientUnaryCall;
    public getConnectedLeadersRegioned(request: mev_protos_searcher_pb.ConnectedLeadersRegionedRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: mev_protos_searcher_pb.ConnectedLeadersRegionedResponse) => void): grpc.ClientUnaryCall;
    public getConnectedLeadersRegioned(request: mev_protos_searcher_pb.ConnectedLeadersRegionedRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: mev_protos_searcher_pb.ConnectedLeadersRegionedResponse) => void): grpc.ClientUnaryCall;
    public getTipAccounts(request: mev_protos_searcher_pb.GetTipAccountsRequest, callback: (error: grpc.ServiceError | null, response: mev_protos_searcher_pb.GetTipAccountsResponse) => void): grpc.ClientUnaryCall;
    public getTipAccounts(request: mev_protos_searcher_pb.GetTipAccountsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: mev_protos_searcher_pb.GetTipAccountsResponse) => void): grpc.ClientUnaryCall;
    public getTipAccounts(request: mev_protos_searcher_pb.GetTipAccountsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: mev_protos_searcher_pb.GetTipAccountsResponse) => void): grpc.ClientUnaryCall;
    public getRegions(request: mev_protos_searcher_pb.GetRegionsRequest, callback: (error: grpc.ServiceError | null, response: mev_protos_searcher_pb.GetRegionsResponse) => void): grpc.ClientUnaryCall;
    public getRegions(request: mev_protos_searcher_pb.GetRegionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: mev_protos_searcher_pb.GetRegionsResponse) => void): grpc.ClientUnaryCall;
    public getRegions(request: mev_protos_searcher_pb.GetRegionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: mev_protos_searcher_pb.GetRegionsResponse) => void): grpc.ClientUnaryCall;
}
