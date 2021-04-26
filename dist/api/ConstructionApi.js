"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ConstructionCombineRequest = _interopRequireDefault(require("../model/ConstructionCombineRequest"));

var _ConstructionCombineResponse = _interopRequireDefault(require("../model/ConstructionCombineResponse"));

var _ConstructionDeriveRequest = _interopRequireDefault(require("../model/ConstructionDeriveRequest"));

var _ConstructionDeriveResponse = _interopRequireDefault(require("../model/ConstructionDeriveResponse"));

var _ConstructionHashRequest = _interopRequireDefault(require("../model/ConstructionHashRequest"));

var _ConstructionMetadataRequest = _interopRequireDefault(require("../model/ConstructionMetadataRequest"));

var _ConstructionMetadataResponse = _interopRequireDefault(require("../model/ConstructionMetadataResponse"));

var _ConstructionParseRequest = _interopRequireDefault(require("../model/ConstructionParseRequest"));

var _ConstructionParseResponse = _interopRequireDefault(require("../model/ConstructionParseResponse"));

var _ConstructionPayloadsRequest = _interopRequireDefault(require("../model/ConstructionPayloadsRequest"));

var _ConstructionPayloadsResponse = _interopRequireDefault(require("../model/ConstructionPayloadsResponse"));

var _ConstructionPreprocessRequest = _interopRequireDefault(require("../model/ConstructionPreprocessRequest"));

var _ConstructionPreprocessResponse = _interopRequireDefault(require("../model/ConstructionPreprocessResponse"));

var _ConstructionSubmitRequest = _interopRequireDefault(require("../model/ConstructionSubmitRequest"));

var _Error = _interopRequireDefault(require("../model/Error"));

var _TransactionIdentifierResponse = _interopRequireDefault(require("../model/TransactionIdentifierResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Construction service.
* @module api/ConstructionApi
* @version 1.4.10
*/
var ConstructionApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ConstructionApi. 
  * @alias module:api/ConstructionApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ConstructionApi(apiClient) {
    _classCallCheck(this, ConstructionApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Create Network Transaction from Signatures
   * Combine creates a network-specific transaction from an unsigned transaction and an array of provided signatures. The signed transaction returned from this method will be sent to the `/construction/submit` endpoint by the caller.
   * @param {module:model/ConstructionCombineRequest} constructionCombineRequest 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ConstructionCombineResponse} and HTTP response
   */


  _createClass(ConstructionApi, [{
    key: "constructionCombineWithHttpInfo",
    value: function constructionCombineWithHttpInfo(constructionCombineRequest) {
      var postBody = constructionCombineRequest; // verify the required parameter 'constructionCombineRequest' is set

      if (constructionCombineRequest === undefined || constructionCombineRequest === null) {
        throw new _Error["default"]("Missing the required parameter 'constructionCombineRequest' when calling constructionCombine");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ConstructionCombineResponse["default"];
      return this.apiClient.callApi('/construction/combine', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Create Network Transaction from Signatures
     * Combine creates a network-specific transaction from an unsigned transaction and an array of provided signatures. The signed transaction returned from this method will be sent to the `/construction/submit` endpoint by the caller.
     * @param {module:model/ConstructionCombineRequest} constructionCombineRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ConstructionCombineResponse}
     */

  }, {
    key: "constructionCombine",
    value: function constructionCombine(constructionCombineRequest) {
      return this.constructionCombineWithHttpInfo(constructionCombineRequest).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Derive an AccountIdentifier from a PublicKey
     * Derive returns the AccountIdentifier associated with a public key. Blockchains that require an on-chain action to create an account should not implement this method.
     * @param {module:model/ConstructionDeriveRequest} constructionDeriveRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ConstructionDeriveResponse} and HTTP response
     */

  }, {
    key: "constructionDeriveWithHttpInfo",
    value: function constructionDeriveWithHttpInfo(constructionDeriveRequest) {
      var postBody = constructionDeriveRequest; // verify the required parameter 'constructionDeriveRequest' is set

      if (constructionDeriveRequest === undefined || constructionDeriveRequest === null) {
        throw new _Error["default"]("Missing the required parameter 'constructionDeriveRequest' when calling constructionDerive");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ConstructionDeriveResponse["default"];
      return this.apiClient.callApi('/construction/derive', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Derive an AccountIdentifier from a PublicKey
     * Derive returns the AccountIdentifier associated with a public key. Blockchains that require an on-chain action to create an account should not implement this method.
     * @param {module:model/ConstructionDeriveRequest} constructionDeriveRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ConstructionDeriveResponse}
     */

  }, {
    key: "constructionDerive",
    value: function constructionDerive(constructionDeriveRequest) {
      return this.constructionDeriveWithHttpInfo(constructionDeriveRequest).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get the Hash of a Signed Transaction
     * TransactionHash returns the network-specific transaction hash for a signed transaction.
     * @param {module:model/ConstructionHashRequest} constructionHashRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TransactionIdentifierResponse} and HTTP response
     */

  }, {
    key: "constructionHashWithHttpInfo",
    value: function constructionHashWithHttpInfo(constructionHashRequest) {
      var postBody = constructionHashRequest; // verify the required parameter 'constructionHashRequest' is set

      if (constructionHashRequest === undefined || constructionHashRequest === null) {
        throw new _Error["default"]("Missing the required parameter 'constructionHashRequest' when calling constructionHash");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _TransactionIdentifierResponse["default"];
      return this.apiClient.callApi('/construction/hash', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get the Hash of a Signed Transaction
     * TransactionHash returns the network-specific transaction hash for a signed transaction.
     * @param {module:model/ConstructionHashRequest} constructionHashRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TransactionIdentifierResponse}
     */

  }, {
    key: "constructionHash",
    value: function constructionHash(constructionHashRequest) {
      return this.constructionHashWithHttpInfo(constructionHashRequest).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get Metadata for Transaction Construction
     * Get any information required to construct a transaction for a specific network. Metadata returned here could be a recent hash to use, an account sequence number, or even arbitrary chain state. The request used when calling this endpoint is created by calling `/construction/preprocess` in an offline environment. You should NEVER assume that the request sent to this endpoint will be created by the caller or populated with any custom parameters. This must occur in `/construction/preprocess`. It is important to clarify that this endpoint should not pre-construct any transactions for the client (this should happen in `/construction/payloads`). This endpoint is left purposely unstructured because of the wide scope of metadata that could be required.
     * @param {module:model/ConstructionMetadataRequest} constructionMetadataRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ConstructionMetadataResponse} and HTTP response
     */

  }, {
    key: "constructionMetadataWithHttpInfo",
    value: function constructionMetadataWithHttpInfo(constructionMetadataRequest) {
      var postBody = constructionMetadataRequest; // verify the required parameter 'constructionMetadataRequest' is set

      if (constructionMetadataRequest === undefined || constructionMetadataRequest === null) {
        throw new _Error["default"]("Missing the required parameter 'constructionMetadataRequest' when calling constructionMetadata");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ConstructionMetadataResponse["default"];
      return this.apiClient.callApi('/construction/metadata', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get Metadata for Transaction Construction
     * Get any information required to construct a transaction for a specific network. Metadata returned here could be a recent hash to use, an account sequence number, or even arbitrary chain state. The request used when calling this endpoint is created by calling `/construction/preprocess` in an offline environment. You should NEVER assume that the request sent to this endpoint will be created by the caller or populated with any custom parameters. This must occur in `/construction/preprocess`. It is important to clarify that this endpoint should not pre-construct any transactions for the client (this should happen in `/construction/payloads`). This endpoint is left purposely unstructured because of the wide scope of metadata that could be required.
     * @param {module:model/ConstructionMetadataRequest} constructionMetadataRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ConstructionMetadataResponse}
     */

  }, {
    key: "constructionMetadata",
    value: function constructionMetadata(constructionMetadataRequest) {
      return this.constructionMetadataWithHttpInfo(constructionMetadataRequest).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Parse a Transaction
     * Parse is called on both unsigned and signed transactions to understand the intent of the formulated transaction. This is run as a sanity check before signing (after `/construction/payloads`) and before broadcast (after `/construction/combine`). 
     * @param {module:model/ConstructionParseRequest} constructionParseRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ConstructionParseResponse} and HTTP response
     */

  }, {
    key: "constructionParseWithHttpInfo",
    value: function constructionParseWithHttpInfo(constructionParseRequest) {
      var postBody = constructionParseRequest; // verify the required parameter 'constructionParseRequest' is set

      if (constructionParseRequest === undefined || constructionParseRequest === null) {
        throw new _Error["default"]("Missing the required parameter 'constructionParseRequest' when calling constructionParse");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ConstructionParseResponse["default"];
      return this.apiClient.callApi('/construction/parse', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Parse a Transaction
     * Parse is called on both unsigned and signed transactions to understand the intent of the formulated transaction. This is run as a sanity check before signing (after `/construction/payloads`) and before broadcast (after `/construction/combine`). 
     * @param {module:model/ConstructionParseRequest} constructionParseRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ConstructionParseResponse}
     */

  }, {
    key: "constructionParse",
    value: function constructionParse(constructionParseRequest) {
      return this.constructionParseWithHttpInfo(constructionParseRequest).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Generate an Unsigned Transaction and Signing Payloads
     * Payloads is called with an array of operations and the response from `/construction/metadata`. It returns an unsigned transaction blob and a collection of payloads that must be signed by particular AccountIdentifiers using a certain SignatureType. The array of operations provided in transaction construction often times can not specify all \"effects\" of a transaction (consider invoked transactions in Ethereum). However, they can deterministically specify the \"intent\" of the transaction, which is sufficient for construction. For this reason, parsing the corresponding transaction in the Data API (when it lands on chain) will contain a superset of whatever operations were provided during construction.
     * @param {module:model/ConstructionPayloadsRequest} constructionPayloadsRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ConstructionPayloadsResponse} and HTTP response
     */

  }, {
    key: "constructionPayloadsWithHttpInfo",
    value: function constructionPayloadsWithHttpInfo(constructionPayloadsRequest) {
      var postBody = constructionPayloadsRequest; // verify the required parameter 'constructionPayloadsRequest' is set

      if (constructionPayloadsRequest === undefined || constructionPayloadsRequest === null) {
        throw new _Error["default"]("Missing the required parameter 'constructionPayloadsRequest' when calling constructionPayloads");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ConstructionPayloadsResponse["default"];
      return this.apiClient.callApi('/construction/payloads', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Generate an Unsigned Transaction and Signing Payloads
     * Payloads is called with an array of operations and the response from `/construction/metadata`. It returns an unsigned transaction blob and a collection of payloads that must be signed by particular AccountIdentifiers using a certain SignatureType. The array of operations provided in transaction construction often times can not specify all \"effects\" of a transaction (consider invoked transactions in Ethereum). However, they can deterministically specify the \"intent\" of the transaction, which is sufficient for construction. For this reason, parsing the corresponding transaction in the Data API (when it lands on chain) will contain a superset of whatever operations were provided during construction.
     * @param {module:model/ConstructionPayloadsRequest} constructionPayloadsRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ConstructionPayloadsResponse}
     */

  }, {
    key: "constructionPayloads",
    value: function constructionPayloads(constructionPayloadsRequest) {
      return this.constructionPayloadsWithHttpInfo(constructionPayloadsRequest).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Create a Request to Fetch Metadata
     * Preprocess is called prior to `/construction/payloads` to construct a request for any metadata that is needed for transaction construction given (i.e. account nonce). The `options` object returned from this endpoint will be sent to the `/construction/metadata` endpoint UNMODIFIED by the caller (in an offline execution environment). If your Construction API implementation has configuration options, they MUST be specified in the `/construction/preprocess` request (in the `metadata` field).
     * @param {module:model/ConstructionPreprocessRequest} constructionPreprocessRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ConstructionPreprocessResponse} and HTTP response
     */

  }, {
    key: "constructionPreprocessWithHttpInfo",
    value: function constructionPreprocessWithHttpInfo(constructionPreprocessRequest) {
      var postBody = constructionPreprocessRequest; // verify the required parameter 'constructionPreprocessRequest' is set

      if (constructionPreprocessRequest === undefined || constructionPreprocessRequest === null) {
        throw new _Error["default"]("Missing the required parameter 'constructionPreprocessRequest' when calling constructionPreprocess");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ConstructionPreprocessResponse["default"];
      return this.apiClient.callApi('/construction/preprocess', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Create a Request to Fetch Metadata
     * Preprocess is called prior to `/construction/payloads` to construct a request for any metadata that is needed for transaction construction given (i.e. account nonce). The `options` object returned from this endpoint will be sent to the `/construction/metadata` endpoint UNMODIFIED by the caller (in an offline execution environment). If your Construction API implementation has configuration options, they MUST be specified in the `/construction/preprocess` request (in the `metadata` field).
     * @param {module:model/ConstructionPreprocessRequest} constructionPreprocessRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ConstructionPreprocessResponse}
     */

  }, {
    key: "constructionPreprocess",
    value: function constructionPreprocess(constructionPreprocessRequest) {
      return this.constructionPreprocessWithHttpInfo(constructionPreprocessRequest).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Submit a Signed Transaction
     * Submit a pre-signed transaction to the node. This call should not block on the transaction being included in a block. Rather, it should return immediately with an indication of whether or not the transaction was included in the mempool. The transaction submission response should only return a 200 status if the submitted transaction could be included in the mempool. Otherwise, it should return an error.
     * @param {module:model/ConstructionSubmitRequest} constructionSubmitRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TransactionIdentifierResponse} and HTTP response
     */

  }, {
    key: "constructionSubmitWithHttpInfo",
    value: function constructionSubmitWithHttpInfo(constructionSubmitRequest) {
      var postBody = constructionSubmitRequest; // verify the required parameter 'constructionSubmitRequest' is set

      if (constructionSubmitRequest === undefined || constructionSubmitRequest === null) {
        throw new _Error["default"]("Missing the required parameter 'constructionSubmitRequest' when calling constructionSubmit");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _TransactionIdentifierResponse["default"];
      return this.apiClient.callApi('/construction/submit', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Submit a Signed Transaction
     * Submit a pre-signed transaction to the node. This call should not block on the transaction being included in a block. Rather, it should return immediately with an indication of whether or not the transaction was included in the mempool. The transaction submission response should only return a 200 status if the submitted transaction could be included in the mempool. Otherwise, it should return an error.
     * @param {module:model/ConstructionSubmitRequest} constructionSubmitRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TransactionIdentifierResponse}
     */

  }, {
    key: "constructionSubmit",
    value: function constructionSubmit(constructionSubmitRequest) {
      return this.constructionSubmitWithHttpInfo(constructionSubmitRequest).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return ConstructionApi;
}();

exports["default"] = ConstructionApi;