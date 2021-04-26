/**
 * Rosetta
 * Build Once. Integrate Your Blockchain Everywhere.
 *
 * The version of the OpenAPI document: 1.4.10
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import ConstructionCombineRequest from '../model/ConstructionCombineRequest';
import ConstructionCombineResponse from '../model/ConstructionCombineResponse';
import ConstructionDeriveRequest from '../model/ConstructionDeriveRequest';
import ConstructionDeriveResponse from '../model/ConstructionDeriveResponse';
import ConstructionHashRequest from '../model/ConstructionHashRequest';
import ConstructionMetadataRequest from '../model/ConstructionMetadataRequest';
import ConstructionMetadataResponse from '../model/ConstructionMetadataResponse';
import ConstructionParseRequest from '../model/ConstructionParseRequest';
import ConstructionParseResponse from '../model/ConstructionParseResponse';
import ConstructionPayloadsRequest from '../model/ConstructionPayloadsRequest';
import ConstructionPayloadsResponse from '../model/ConstructionPayloadsResponse';
import ConstructionPreprocessRequest from '../model/ConstructionPreprocessRequest';
import ConstructionPreprocessResponse from '../model/ConstructionPreprocessResponse';
import ConstructionSubmitRequest from '../model/ConstructionSubmitRequest';
import Error from '../model/Error';
import TransactionIdentifierResponse from '../model/TransactionIdentifierResponse';

/**
* Construction service.
* @module api/ConstructionApi
* @version 1.4.10
*/
export default class ConstructionApi {

    /**
    * Constructs a new ConstructionApi. 
    * @alias module:api/ConstructionApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Create Network Transaction from Signatures
     * Combine creates a network-specific transaction from an unsigned transaction and an array of provided signatures. The signed transaction returned from this method will be sent to the `/construction/submit` endpoint by the caller.
     * @param {module:model/ConstructionCombineRequest} constructionCombineRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ConstructionCombineResponse} and HTTP response
     */
    constructionCombineWithHttpInfo(constructionCombineRequest) {
      let postBody = constructionCombineRequest;
      // verify the required parameter 'constructionCombineRequest' is set
      if (constructionCombineRequest === undefined || constructionCombineRequest === null) {
        throw new Error("Missing the required parameter 'constructionCombineRequest' when calling constructionCombine");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ConstructionCombineResponse;
      return this.apiClient.callApi(
        '/construction/combine', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create Network Transaction from Signatures
     * Combine creates a network-specific transaction from an unsigned transaction and an array of provided signatures. The signed transaction returned from this method will be sent to the `/construction/submit` endpoint by the caller.
     * @param {module:model/ConstructionCombineRequest} constructionCombineRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ConstructionCombineResponse}
     */
    constructionCombine(constructionCombineRequest) {
      return this.constructionCombineWithHttpInfo(constructionCombineRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Derive an AccountIdentifier from a PublicKey
     * Derive returns the AccountIdentifier associated with a public key. Blockchains that require an on-chain action to create an account should not implement this method.
     * @param {module:model/ConstructionDeriveRequest} constructionDeriveRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ConstructionDeriveResponse} and HTTP response
     */
    constructionDeriveWithHttpInfo(constructionDeriveRequest) {
      let postBody = constructionDeriveRequest;
      // verify the required parameter 'constructionDeriveRequest' is set
      if (constructionDeriveRequest === undefined || constructionDeriveRequest === null) {
        throw new Error("Missing the required parameter 'constructionDeriveRequest' when calling constructionDerive");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ConstructionDeriveResponse;
      return this.apiClient.callApi(
        '/construction/derive', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Derive an AccountIdentifier from a PublicKey
     * Derive returns the AccountIdentifier associated with a public key. Blockchains that require an on-chain action to create an account should not implement this method.
     * @param {module:model/ConstructionDeriveRequest} constructionDeriveRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ConstructionDeriveResponse}
     */
    constructionDerive(constructionDeriveRequest) {
      return this.constructionDeriveWithHttpInfo(constructionDeriveRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get the Hash of a Signed Transaction
     * TransactionHash returns the network-specific transaction hash for a signed transaction.
     * @param {module:model/ConstructionHashRequest} constructionHashRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TransactionIdentifierResponse} and HTTP response
     */
    constructionHashWithHttpInfo(constructionHashRequest) {
      let postBody = constructionHashRequest;
      // verify the required parameter 'constructionHashRequest' is set
      if (constructionHashRequest === undefined || constructionHashRequest === null) {
        throw new Error("Missing the required parameter 'constructionHashRequest' when calling constructionHash");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = TransactionIdentifierResponse;
      return this.apiClient.callApi(
        '/construction/hash', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get the Hash of a Signed Transaction
     * TransactionHash returns the network-specific transaction hash for a signed transaction.
     * @param {module:model/ConstructionHashRequest} constructionHashRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TransactionIdentifierResponse}
     */
    constructionHash(constructionHashRequest) {
      return this.constructionHashWithHttpInfo(constructionHashRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get Metadata for Transaction Construction
     * Get any information required to construct a transaction for a specific network. Metadata returned here could be a recent hash to use, an account sequence number, or even arbitrary chain state. The request used when calling this endpoint is created by calling `/construction/preprocess` in an offline environment. You should NEVER assume that the request sent to this endpoint will be created by the caller or populated with any custom parameters. This must occur in `/construction/preprocess`. It is important to clarify that this endpoint should not pre-construct any transactions for the client (this should happen in `/construction/payloads`). This endpoint is left purposely unstructured because of the wide scope of metadata that could be required.
     * @param {module:model/ConstructionMetadataRequest} constructionMetadataRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ConstructionMetadataResponse} and HTTP response
     */
    constructionMetadataWithHttpInfo(constructionMetadataRequest) {
      let postBody = constructionMetadataRequest;
      // verify the required parameter 'constructionMetadataRequest' is set
      if (constructionMetadataRequest === undefined || constructionMetadataRequest === null) {
        throw new Error("Missing the required parameter 'constructionMetadataRequest' when calling constructionMetadata");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ConstructionMetadataResponse;
      return this.apiClient.callApi(
        '/construction/metadata', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get Metadata for Transaction Construction
     * Get any information required to construct a transaction for a specific network. Metadata returned here could be a recent hash to use, an account sequence number, or even arbitrary chain state. The request used when calling this endpoint is created by calling `/construction/preprocess` in an offline environment. You should NEVER assume that the request sent to this endpoint will be created by the caller or populated with any custom parameters. This must occur in `/construction/preprocess`. It is important to clarify that this endpoint should not pre-construct any transactions for the client (this should happen in `/construction/payloads`). This endpoint is left purposely unstructured because of the wide scope of metadata that could be required.
     * @param {module:model/ConstructionMetadataRequest} constructionMetadataRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ConstructionMetadataResponse}
     */
    constructionMetadata(constructionMetadataRequest) {
      return this.constructionMetadataWithHttpInfo(constructionMetadataRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Parse a Transaction
     * Parse is called on both unsigned and signed transactions to understand the intent of the formulated transaction. This is run as a sanity check before signing (after `/construction/payloads`) and before broadcast (after `/construction/combine`). 
     * @param {module:model/ConstructionParseRequest} constructionParseRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ConstructionParseResponse} and HTTP response
     */
    constructionParseWithHttpInfo(constructionParseRequest) {
      let postBody = constructionParseRequest;
      // verify the required parameter 'constructionParseRequest' is set
      if (constructionParseRequest === undefined || constructionParseRequest === null) {
        throw new Error("Missing the required parameter 'constructionParseRequest' when calling constructionParse");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ConstructionParseResponse;
      return this.apiClient.callApi(
        '/construction/parse', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Parse a Transaction
     * Parse is called on both unsigned and signed transactions to understand the intent of the formulated transaction. This is run as a sanity check before signing (after `/construction/payloads`) and before broadcast (after `/construction/combine`). 
     * @param {module:model/ConstructionParseRequest} constructionParseRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ConstructionParseResponse}
     */
    constructionParse(constructionParseRequest) {
      return this.constructionParseWithHttpInfo(constructionParseRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Generate an Unsigned Transaction and Signing Payloads
     * Payloads is called with an array of operations and the response from `/construction/metadata`. It returns an unsigned transaction blob and a collection of payloads that must be signed by particular AccountIdentifiers using a certain SignatureType. The array of operations provided in transaction construction often times can not specify all \"effects\" of a transaction (consider invoked transactions in Ethereum). However, they can deterministically specify the \"intent\" of the transaction, which is sufficient for construction. For this reason, parsing the corresponding transaction in the Data API (when it lands on chain) will contain a superset of whatever operations were provided during construction.
     * @param {module:model/ConstructionPayloadsRequest} constructionPayloadsRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ConstructionPayloadsResponse} and HTTP response
     */
    constructionPayloadsWithHttpInfo(constructionPayloadsRequest) {
      let postBody = constructionPayloadsRequest;
      // verify the required parameter 'constructionPayloadsRequest' is set
      if (constructionPayloadsRequest === undefined || constructionPayloadsRequest === null) {
        throw new Error("Missing the required parameter 'constructionPayloadsRequest' when calling constructionPayloads");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ConstructionPayloadsResponse;
      return this.apiClient.callApi(
        '/construction/payloads', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Generate an Unsigned Transaction and Signing Payloads
     * Payloads is called with an array of operations and the response from `/construction/metadata`. It returns an unsigned transaction blob and a collection of payloads that must be signed by particular AccountIdentifiers using a certain SignatureType. The array of operations provided in transaction construction often times can not specify all \"effects\" of a transaction (consider invoked transactions in Ethereum). However, they can deterministically specify the \"intent\" of the transaction, which is sufficient for construction. For this reason, parsing the corresponding transaction in the Data API (when it lands on chain) will contain a superset of whatever operations were provided during construction.
     * @param {module:model/ConstructionPayloadsRequest} constructionPayloadsRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ConstructionPayloadsResponse}
     */
    constructionPayloads(constructionPayloadsRequest) {
      return this.constructionPayloadsWithHttpInfo(constructionPayloadsRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create a Request to Fetch Metadata
     * Preprocess is called prior to `/construction/payloads` to construct a request for any metadata that is needed for transaction construction given (i.e. account nonce). The `options` object returned from this endpoint will be sent to the `/construction/metadata` endpoint UNMODIFIED by the caller (in an offline execution environment). If your Construction API implementation has configuration options, they MUST be specified in the `/construction/preprocess` request (in the `metadata` field).
     * @param {module:model/ConstructionPreprocessRequest} constructionPreprocessRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ConstructionPreprocessResponse} and HTTP response
     */
    constructionPreprocessWithHttpInfo(constructionPreprocessRequest) {
      let postBody = constructionPreprocessRequest;
      // verify the required parameter 'constructionPreprocessRequest' is set
      if (constructionPreprocessRequest === undefined || constructionPreprocessRequest === null) {
        throw new Error("Missing the required parameter 'constructionPreprocessRequest' when calling constructionPreprocess");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ConstructionPreprocessResponse;
      return this.apiClient.callApi(
        '/construction/preprocess', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create a Request to Fetch Metadata
     * Preprocess is called prior to `/construction/payloads` to construct a request for any metadata that is needed for transaction construction given (i.e. account nonce). The `options` object returned from this endpoint will be sent to the `/construction/metadata` endpoint UNMODIFIED by the caller (in an offline execution environment). If your Construction API implementation has configuration options, they MUST be specified in the `/construction/preprocess` request (in the `metadata` field).
     * @param {module:model/ConstructionPreprocessRequest} constructionPreprocessRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ConstructionPreprocessResponse}
     */
    constructionPreprocess(constructionPreprocessRequest) {
      return this.constructionPreprocessWithHttpInfo(constructionPreprocessRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Submit a Signed Transaction
     * Submit a pre-signed transaction to the node. This call should not block on the transaction being included in a block. Rather, it should return immediately with an indication of whether or not the transaction was included in the mempool. The transaction submission response should only return a 200 status if the submitted transaction could be included in the mempool. Otherwise, it should return an error.
     * @param {module:model/ConstructionSubmitRequest} constructionSubmitRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TransactionIdentifierResponse} and HTTP response
     */
    constructionSubmitWithHttpInfo(constructionSubmitRequest) {
      let postBody = constructionSubmitRequest;
      // verify the required parameter 'constructionSubmitRequest' is set
      if (constructionSubmitRequest === undefined || constructionSubmitRequest === null) {
        throw new Error("Missing the required parameter 'constructionSubmitRequest' when calling constructionSubmit");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = TransactionIdentifierResponse;
      return this.apiClient.callApi(
        '/construction/submit', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Submit a Signed Transaction
     * Submit a pre-signed transaction to the node. This call should not block on the transaction being included in a block. Rather, it should return immediately with an indication of whether or not the transaction was included in the mempool. The transaction submission response should only return a 200 status if the submitted transaction could be included in the mempool. Otherwise, it should return an error.
     * @param {module:model/ConstructionSubmitRequest} constructionSubmitRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TransactionIdentifierResponse}
     */
    constructionSubmit(constructionSubmitRequest) {
      return this.constructionSubmitWithHttpInfo(constructionSubmitRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
