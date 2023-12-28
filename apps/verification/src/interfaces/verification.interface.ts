import { IUserRequest } from "@credebl/user-request/user-request.interface";

interface IProofRequestAttribute {
    attributeName: string;
    condition?: string;
    value?: string;
    credDefId?: string;
    schemaId: string;
    credentialName: string;
}

export interface IRequestProof {
    orgId: string;
    connectionId?: string;
    attributes: IProofRequestAttribute[];
    comment: string;
    autoAcceptProof: string;
    protocolVersion: string;
    emailId?: string[]
}

export interface IGetAllProofPresentations {
    url: string;
    apiKey: string;
}

export interface IGetProofPresentationById {
    url: string;
    apiKey: string;
}

export interface IVerifyPresentation {
    url: string;
    apiKey: string;
}

export interface ProofFormDataPayload {
    url: string;
    apiKey: string;
}

export interface ProofFormData {
    id: string;
    orgId: string; 
    user: IUserRequest;
}

interface IProofFormats {
    indy: IndyProof
}

interface IndyProof {
    name: string;
    version: string;
    requested_attributes: IRequestedAttributes;
    requested_predicates: IRequestedPredicates;
}

interface IRequestedAttributes {
    [key: string]: IRequestedAttributesName;
}

interface IRequestedAttributesName {
    name: string;
    restrictions: IRequestedRestriction[]
}

interface IRequestedPredicates {
    [key: string]: IRequestedPredicatesName;
}

interface IRequestedPredicatesName {
    name: string;
    restrictions: IRequestedRestriction[]
}

interface IRequestedRestriction {
    cred_def_id: string;
}

export interface ISendProofRequestPayload {
    protocolVersion: string;
    comment: string;
    connectionId?: string;
    proofFormats: IProofFormats;
    autoAcceptProof: string;
    label?: string;
}

export interface IProofRequestPayload {
    url: string;
    apiKey: string;
    proofRequestPayload: ISendProofRequestPayload;
}

interface IWebhookPresentationProof {
    threadId: string;
    state: string;
    connectionId
}

export interface IWebhookProofPresentation {
    metadata: object;
    _tags: IWebhookPresentationProof;
    id: string;
    createdAt: string;
    protocolVersion: string;
    state: string;
    connectionId: string;
    presentationId: string;
    threadId: string;
    autoAcceptProof: string;
    updatedAt: string;
    isVerified: boolean;
    contextCorrelationId: string;
}

export interface IProofPresentation {
    proofPresentationPayload: IWebhookProofPresentation;
    orgId: string;
}

export interface IProofRequests {
    proofRequestsSearchCriteria: IProofRequestsSearchCriteria;
    user: IUserRequest;
    orgId: string;
  }

export interface IProofRequestsSearchCriteria {
    pageNumber: number;
    pageSize: number;
    sorting: string;
    sortByValue: string;
    searchByText: string;
  }  
  
