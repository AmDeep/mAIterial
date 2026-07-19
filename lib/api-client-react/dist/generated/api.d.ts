import type { QueryKey, UseMutationOptions, UseMutationResult, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import type { Claim, ClaimInput, ClaimUpdate, Conversation, ConversationDetail, ConversationInput, DashboardStats, DeleteResult, Discovery, Evidence, EvidenceInput, EvidenceResult, HealthStatus, KnowledgeGraph, ListMaterialsParams, ListSpeciesParams, Material, MaterialInput, MessageInput, Species, SpeciesDetail, SpeciesInput, SpeciesMaterial, SpeciesSummary } from './api.schemas';
import { customFetch } from '../custom-fetch';
import type { ErrorType, BodyType } from '../custom-fetch';
type AwaitedInput<T> = PromiseLike<T> | T;
type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;
type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];
export declare const getHealthCheckUrl: () => string;
/**
 * @summary Health check
 */
export declare const healthCheck: (options?: RequestInit) => Promise<HealthStatus>;
export declare const getHealthCheckQueryKey: () => readonly ["/api/healthz"];
export declare const getHealthCheckQueryOptions: <TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData> & {
    queryKey: QueryKey;
};
export type HealthCheckQueryResult = NonNullable<Awaited<ReturnType<typeof healthCheck>>>;
export type HealthCheckQueryError = ErrorType<unknown>;
/**
 * @summary Health check
 */
export declare function useHealthCheck<TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getListConversationsUrl: () => string;
/**
 * @summary List all chat conversations
 */
export declare const listConversations: (options?: RequestInit) => Promise<Conversation[]>;
export declare const getListConversationsQueryKey: () => readonly ["/api/chat/conversations"];
export declare const getListConversationsQueryOptions: <TData = Awaited<ReturnType<typeof listConversations>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listConversations>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listConversations>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListConversationsQueryResult = NonNullable<Awaited<ReturnType<typeof listConversations>>>;
export type ListConversationsQueryError = ErrorType<unknown>;
/**
 * @summary List all chat conversations
 */
export declare function useListConversations<TData = Awaited<ReturnType<typeof listConversations>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listConversations>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getCreateConversationUrl: () => string;
/**
 * @summary Start a new conversation
 */
export declare const createConversation: (conversationInput: ConversationInput, options?: RequestInit) => Promise<Conversation>;
export declare const getCreateConversationMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createConversation>>, TError, {
        data: BodyType<ConversationInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createConversation>>, TError, {
    data: BodyType<ConversationInput>;
}, TContext>;
export type CreateConversationMutationResult = NonNullable<Awaited<ReturnType<typeof createConversation>>>;
export type CreateConversationMutationBody = BodyType<ConversationInput>;
export type CreateConversationMutationError = ErrorType<unknown>;
/**
* @summary Start a new conversation
*/
export declare const useCreateConversation: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createConversation>>, TError, {
        data: BodyType<ConversationInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createConversation>>, TError, {
    data: BodyType<ConversationInput>;
}, TContext>;
export declare const getGetConversationUrl: (conversationId: number) => string;
/**
 * @summary Get a conversation with its messages
 */
export declare const getConversation: (conversationId: number, options?: RequestInit) => Promise<ConversationDetail>;
export declare const getGetConversationQueryKey: (conversationId: number) => readonly [`/api/chat/conversations/${number}`];
export declare const getGetConversationQueryOptions: <TData = Awaited<ReturnType<typeof getConversation>>, TError = ErrorType<void>>(conversationId: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getConversation>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getConversation>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetConversationQueryResult = NonNullable<Awaited<ReturnType<typeof getConversation>>>;
export type GetConversationQueryError = ErrorType<void>;
/**
 * @summary Get a conversation with its messages
 */
export declare function useGetConversation<TData = Awaited<ReturnType<typeof getConversation>>, TError = ErrorType<void>>(conversationId: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getConversation>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getDeleteConversationUrl: (conversationId: number) => string;
/**
 * @summary Delete a conversation
 */
export declare const deleteConversation: (conversationId: number, options?: RequestInit) => Promise<DeleteResult>;
export declare const getDeleteConversationMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteConversation>>, TError, {
        conversationId: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof deleteConversation>>, TError, {
    conversationId: number;
}, TContext>;
export type DeleteConversationMutationResult = NonNullable<Awaited<ReturnType<typeof deleteConversation>>>;
export type DeleteConversationMutationError = ErrorType<unknown>;
/**
* @summary Delete a conversation
*/
export declare const useDeleteConversation: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteConversation>>, TError, {
        conversationId: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof deleteConversation>>, TError, {
    conversationId: number;
}, TContext>;
export declare const getSendMessageUrl: (conversationId: number) => string;
/**
 * @summary Send a message and get AI-powered biomaterial recommendations (SSE streaming)
 */
export declare const sendMessage: (conversationId: number, messageInput: MessageInput, options?: RequestInit) => Promise<string>;
export declare const getSendMessageMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof sendMessage>>, TError, {
        conversationId: number;
        data: BodyType<MessageInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof sendMessage>>, TError, {
    conversationId: number;
    data: BodyType<MessageInput>;
}, TContext>;
export type SendMessageMutationResult = NonNullable<Awaited<ReturnType<typeof sendMessage>>>;
export type SendMessageMutationBody = BodyType<MessageInput>;
export type SendMessageMutationError = ErrorType<unknown>;
/**
* @summary Send a message and get AI-powered biomaterial recommendations (SSE streaming)
*/
export declare const useSendMessage: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof sendMessage>>, TError, {
        conversationId: number;
        data: BodyType<MessageInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof sendMessage>>, TError, {
    conversationId: number;
    data: BodyType<MessageInput>;
}, TContext>;
export declare const getListSpeciesUrl: (params?: ListSpeciesParams) => string;
/**
 * @summary List biological species
 */
export declare const listSpecies: (params?: ListSpeciesParams, options?: RequestInit) => Promise<Species[]>;
export declare const getListSpeciesQueryKey: (params?: ListSpeciesParams) => readonly ["/api/species", ...ListSpeciesParams[]];
export declare const getListSpeciesQueryOptions: <TData = Awaited<ReturnType<typeof listSpecies>>, TError = ErrorType<unknown>>(params?: ListSpeciesParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listSpecies>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listSpecies>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListSpeciesQueryResult = NonNullable<Awaited<ReturnType<typeof listSpecies>>>;
export type ListSpeciesQueryError = ErrorType<unknown>;
/**
 * @summary List biological species
 */
export declare function useListSpecies<TData = Awaited<ReturnType<typeof listSpecies>>, TError = ErrorType<unknown>>(params?: ListSpeciesParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listSpecies>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getCreateSpeciesUrl: () => string;
/**
 * @summary Add a new species to the knowledge graph
 */
export declare const createSpecies: (speciesInput: SpeciesInput, options?: RequestInit) => Promise<Species>;
export declare const getCreateSpeciesMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createSpecies>>, TError, {
        data: BodyType<SpeciesInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createSpecies>>, TError, {
    data: BodyType<SpeciesInput>;
}, TContext>;
export type CreateSpeciesMutationResult = NonNullable<Awaited<ReturnType<typeof createSpecies>>>;
export type CreateSpeciesMutationBody = BodyType<SpeciesInput>;
export type CreateSpeciesMutationError = ErrorType<unknown>;
/**
* @summary Add a new species to the knowledge graph
*/
export declare const useCreateSpecies: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createSpecies>>, TError, {
        data: BodyType<SpeciesInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createSpecies>>, TError, {
    data: BodyType<SpeciesInput>;
}, TContext>;
export declare const getGetSpeciesUrl: (speciesId: number) => string;
/**
 * @summary Get species details including associated materials
 */
export declare const getSpecies: (speciesId: number, options?: RequestInit) => Promise<SpeciesDetail>;
export declare const getGetSpeciesQueryKey: (speciesId: number) => readonly [`/api/species/${number}`];
export declare const getGetSpeciesQueryOptions: <TData = Awaited<ReturnType<typeof getSpecies>>, TError = ErrorType<void>>(speciesId: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getSpecies>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getSpecies>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetSpeciesQueryResult = NonNullable<Awaited<ReturnType<typeof getSpecies>>>;
export type GetSpeciesQueryError = ErrorType<void>;
/**
 * @summary Get species details including associated materials
 */
export declare function useGetSpecies<TData = Awaited<ReturnType<typeof getSpecies>>, TError = ErrorType<void>>(speciesId: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getSpecies>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getGetSpeciesMaterialsUrl: (speciesId: number) => string;
/**
 * @summary Get all materials associated with a species
 */
export declare const getSpeciesMaterials: (speciesId: number, options?: RequestInit) => Promise<SpeciesMaterial[]>;
export declare const getGetSpeciesMaterialsQueryKey: (speciesId: number) => readonly [`/api/species/${number}/materials`];
export declare const getGetSpeciesMaterialsQueryOptions: <TData = Awaited<ReturnType<typeof getSpeciesMaterials>>, TError = ErrorType<unknown>>(speciesId: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getSpeciesMaterials>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getSpeciesMaterials>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetSpeciesMaterialsQueryResult = NonNullable<Awaited<ReturnType<typeof getSpeciesMaterials>>>;
export type GetSpeciesMaterialsQueryError = ErrorType<unknown>;
/**
 * @summary Get all materials associated with a species
 */
export declare function useGetSpeciesMaterials<TData = Awaited<ReturnType<typeof getSpeciesMaterials>>, TError = ErrorType<unknown>>(speciesId: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getSpeciesMaterials>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getListMaterialsUrl: (params?: ListMaterialsParams) => string;
/**
 * @summary List biomaterials
 */
export declare const listMaterials: (params?: ListMaterialsParams, options?: RequestInit) => Promise<Material[]>;
export declare const getListMaterialsQueryKey: (params?: ListMaterialsParams) => readonly ["/api/materials", ...ListMaterialsParams[]];
export declare const getListMaterialsQueryOptions: <TData = Awaited<ReturnType<typeof listMaterials>>, TError = ErrorType<unknown>>(params?: ListMaterialsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listMaterials>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listMaterials>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListMaterialsQueryResult = NonNullable<Awaited<ReturnType<typeof listMaterials>>>;
export type ListMaterialsQueryError = ErrorType<unknown>;
/**
 * @summary List biomaterials
 */
export declare function useListMaterials<TData = Awaited<ReturnType<typeof listMaterials>>, TError = ErrorType<unknown>>(params?: ListMaterialsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listMaterials>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getCreateMaterialUrl: () => string;
/**
 * @summary Add a new biomaterial
 */
export declare const createMaterial: (materialInput: MaterialInput, options?: RequestInit) => Promise<Material>;
export declare const getCreateMaterialMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createMaterial>>, TError, {
        data: BodyType<MaterialInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createMaterial>>, TError, {
    data: BodyType<MaterialInput>;
}, TContext>;
export type CreateMaterialMutationResult = NonNullable<Awaited<ReturnType<typeof createMaterial>>>;
export type CreateMaterialMutationBody = BodyType<MaterialInput>;
export type CreateMaterialMutationError = ErrorType<unknown>;
/**
* @summary Add a new biomaterial
*/
export declare const useCreateMaterial: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createMaterial>>, TError, {
        data: BodyType<MaterialInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createMaterial>>, TError, {
    data: BodyType<MaterialInput>;
}, TContext>;
export declare const getGetMaterialUrl: (materialId: number) => string;
/**
 * @summary Get material details
 */
export declare const getMaterial: (materialId: number, options?: RequestInit) => Promise<Material>;
export declare const getGetMaterialQueryKey: (materialId: number) => readonly [`/api/materials/${number}`];
export declare const getGetMaterialQueryOptions: <TData = Awaited<ReturnType<typeof getMaterial>>, TError = ErrorType<unknown>>(materialId: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getMaterial>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getMaterial>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetMaterialQueryResult = NonNullable<Awaited<ReturnType<typeof getMaterial>>>;
export type GetMaterialQueryError = ErrorType<unknown>;
/**
 * @summary Get material details
 */
export declare function useGetMaterial<TData = Awaited<ReturnType<typeof getMaterial>>, TError = ErrorType<unknown>>(materialId: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getMaterial>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getGetKnowledgeGraphUrl: () => string;
/**
 * @summary Get the full semantic knowledge graph (nodes + edges with confidence)
 */
export declare const getKnowledgeGraph: (options?: RequestInit) => Promise<KnowledgeGraph>;
export declare const getGetKnowledgeGraphQueryKey: () => readonly ["/api/knowledge-graph"];
export declare const getGetKnowledgeGraphQueryOptions: <TData = Awaited<ReturnType<typeof getKnowledgeGraph>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getKnowledgeGraph>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getKnowledgeGraph>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetKnowledgeGraphQueryResult = NonNullable<Awaited<ReturnType<typeof getKnowledgeGraph>>>;
export type GetKnowledgeGraphQueryError = ErrorType<unknown>;
/**
 * @summary Get the full semantic knowledge graph (nodes + edges with confidence)
 */
export declare function useGetKnowledgeGraph<TData = Awaited<ReturnType<typeof getKnowledgeGraph>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getKnowledgeGraph>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getListClaimsUrl: () => string;
/**
 * @summary List all knowledge claims with confidence values
 */
export declare const listClaims: (options?: RequestInit) => Promise<Claim[]>;
export declare const getListClaimsQueryKey: () => readonly ["/api/knowledge-graph/claims"];
export declare const getListClaimsQueryOptions: <TData = Awaited<ReturnType<typeof listClaims>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listClaims>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listClaims>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListClaimsQueryResult = NonNullable<Awaited<ReturnType<typeof listClaims>>>;
export type ListClaimsQueryError = ErrorType<unknown>;
/**
 * @summary List all knowledge claims with confidence values
 */
export declare function useListClaims<TData = Awaited<ReturnType<typeof listClaims>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listClaims>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getCreateClaimUrl: () => string;
/**
 * @summary Add a species-material relationship claim to the graph
 */
export declare const createClaim: (claimInput: ClaimInput, options?: RequestInit) => Promise<Claim>;
export declare const getCreateClaimMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createClaim>>, TError, {
        data: BodyType<ClaimInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createClaim>>, TError, {
    data: BodyType<ClaimInput>;
}, TContext>;
export type CreateClaimMutationResult = NonNullable<Awaited<ReturnType<typeof createClaim>>>;
export type CreateClaimMutationBody = BodyType<ClaimInput>;
export type CreateClaimMutationError = ErrorType<unknown>;
/**
* @summary Add a species-material relationship claim to the graph
*/
export declare const useCreateClaim: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createClaim>>, TError, {
        data: BodyType<ClaimInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createClaim>>, TError, {
    data: BodyType<ClaimInput>;
}, TContext>;
export declare const getUpdateClaimUrl: (claimId: number) => string;
/**
 * @summary Update a claim's confidence or metadata
 */
export declare const updateClaim: (claimId: number, claimUpdate: ClaimUpdate, options?: RequestInit) => Promise<Claim>;
export declare const getUpdateClaimMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateClaim>>, TError, {
        claimId: number;
        data: BodyType<ClaimUpdate>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateClaim>>, TError, {
    claimId: number;
    data: BodyType<ClaimUpdate>;
}, TContext>;
export type UpdateClaimMutationResult = NonNullable<Awaited<ReturnType<typeof updateClaim>>>;
export type UpdateClaimMutationBody = BodyType<ClaimUpdate>;
export type UpdateClaimMutationError = ErrorType<unknown>;
/**
* @summary Update a claim's confidence or metadata
*/
export declare const useUpdateClaim: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateClaim>>, TError, {
        claimId: number;
        data: BodyType<ClaimUpdate>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateClaim>>, TError, {
    claimId: number;
    data: BodyType<ClaimUpdate>;
}, TContext>;
export declare const getListEvidenceUrl: () => string;
/**
 * @summary List all evidence items submitted to the belief revision system
 */
export declare const listEvidence: (options?: RequestInit) => Promise<Evidence[]>;
export declare const getListEvidenceQueryKey: () => readonly ["/api/evidence"];
export declare const getListEvidenceQueryOptions: <TData = Awaited<ReturnType<typeof listEvidence>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listEvidence>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listEvidence>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListEvidenceQueryResult = NonNullable<Awaited<ReturnType<typeof listEvidence>>>;
export type ListEvidenceQueryError = ErrorType<unknown>;
/**
 * @summary List all evidence items submitted to the belief revision system
 */
export declare function useListEvidence<TData = Awaited<ReturnType<typeof listEvidence>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listEvidence>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getSubmitEvidenceUrl: () => string;
/**
 * The system evaluates the evidence, checks for prompt injection attempts, and updates claim confidence values using Bayesian revision. Returns the updated claims and a flag if the evidence was rejected.
 * @summary Submit new experimental evidence for belief revision
 */
export declare const submitEvidence: (evidenceInput: EvidenceInput, options?: RequestInit) => Promise<EvidenceResult>;
export declare const getSubmitEvidenceMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof submitEvidence>>, TError, {
        data: BodyType<EvidenceInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof submitEvidence>>, TError, {
    data: BodyType<EvidenceInput>;
}, TContext>;
export type SubmitEvidenceMutationResult = NonNullable<Awaited<ReturnType<typeof submitEvidence>>>;
export type SubmitEvidenceMutationBody = BodyType<EvidenceInput>;
export type SubmitEvidenceMutationError = ErrorType<unknown>;
/**
* @summary Submit new experimental evidence for belief revision
*/
export declare const useSubmitEvidence: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof submitEvidence>>, TError, {
        data: BodyType<EvidenceInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof submitEvidence>>, TError, {
    data: BodyType<EvidenceInput>;
}, TContext>;
export declare const getGetEvidenceUrl: (evidenceId: number) => string;
/**
 * @summary Get evidence details including impact on claims
 */
export declare const getEvidence: (evidenceId: number, options?: RequestInit) => Promise<Evidence>;
export declare const getGetEvidenceQueryKey: (evidenceId: number) => readonly [`/api/evidence/${number}`];
export declare const getGetEvidenceQueryOptions: <TData = Awaited<ReturnType<typeof getEvidence>>, TError = ErrorType<unknown>>(evidenceId: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getEvidence>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getEvidence>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetEvidenceQueryResult = NonNullable<Awaited<ReturnType<typeof getEvidence>>>;
export type GetEvidenceQueryError = ErrorType<unknown>;
/**
 * @summary Get evidence details including impact on claims
 */
export declare function useGetEvidence<TData = Awaited<ReturnType<typeof getEvidence>>, TError = ErrorType<unknown>>(evidenceId: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getEvidence>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getGetDashboardStatsUrl: () => string;
/**
 * @summary Overview statistics for the knowledge base
 */
export declare const getDashboardStats: (options?: RequestInit) => Promise<DashboardStats>;
export declare const getGetDashboardStatsQueryKey: () => readonly ["/api/dashboard/stats"];
export declare const getGetDashboardStatsQueryOptions: <TData = Awaited<ReturnType<typeof getDashboardStats>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getDashboardStats>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getDashboardStats>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetDashboardStatsQueryResult = NonNullable<Awaited<ReturnType<typeof getDashboardStats>>>;
export type GetDashboardStatsQueryError = ErrorType<unknown>;
/**
 * @summary Overview statistics for the knowledge base
 */
export declare function useGetDashboardStats<TData = Awaited<ReturnType<typeof getDashboardStats>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getDashboardStats>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getGetRecentDiscoveriesUrl: () => string;
/**
 * @summary Most recently confirmed species-material relationships
 */
export declare const getRecentDiscoveries: (options?: RequestInit) => Promise<Discovery[]>;
export declare const getGetRecentDiscoveriesQueryKey: () => readonly ["/api/dashboard/recent-discoveries"];
export declare const getGetRecentDiscoveriesQueryOptions: <TData = Awaited<ReturnType<typeof getRecentDiscoveries>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getRecentDiscoveries>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getRecentDiscoveries>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetRecentDiscoveriesQueryResult = NonNullable<Awaited<ReturnType<typeof getRecentDiscoveries>>>;
export type GetRecentDiscoveriesQueryError = ErrorType<unknown>;
/**
 * @summary Most recently confirmed species-material relationships
 */
export declare function useGetRecentDiscoveries<TData = Awaited<ReturnType<typeof getRecentDiscoveries>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getRecentDiscoveries>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getGetTopSpeciesUrl: () => string;
/**
 * @summary Top species by number of confirmed high-confidence material links
 */
export declare const getTopSpecies: (options?: RequestInit) => Promise<SpeciesSummary[]>;
export declare const getGetTopSpeciesQueryKey: () => readonly ["/api/dashboard/top-species"];
export declare const getGetTopSpeciesQueryOptions: <TData = Awaited<ReturnType<typeof getTopSpecies>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getTopSpecies>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getTopSpecies>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetTopSpeciesQueryResult = NonNullable<Awaited<ReturnType<typeof getTopSpecies>>>;
export type GetTopSpeciesQueryError = ErrorType<unknown>;
/**
 * @summary Top species by number of confirmed high-confidence material links
 */
export declare function useGetTopSpecies<TData = Awaited<ReturnType<typeof getTopSpecies>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getTopSpecies>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export {};
//# sourceMappingURL=api.d.ts.map