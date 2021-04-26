"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Error = _interopRequireDefault(require("../model/Error"));

var _MempoolResponse = _interopRequireDefault(require("../model/MempoolResponse"));

var _MempoolTransactionRequest = _interopRequireDefault(require("../model/MempoolTransactionRequest"));

var _MempoolTransactionResponse = _interopRequireDefault(require("../model/MempoolTransactionResponse"));

var _NetworkRequest = _interopRequireDefault(require("../model/NetworkRequest"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Mempool service.
* @module api/MempoolApi
* @version 1.4.10
*/
var MempoolApi = /*#__PURE__*/function () {
  /**
  * Constructs a new MempoolApi. 
  * @alias module:api/MempoolApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function MempoolApi(apiClient) {
    _classCallCheck(this, MempoolApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Get All Mempool Transactions
   * Get all Transaction Identifiers in the mempool
   * @param {module:model/NetworkRequest} networkRequest 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MempoolResponse} and HTTP response
   */


  _createClass(MempoolApi, [{
    key: "mempoolWithHttpInfo",
    value: function mempoolWithHttpInfo(networkRequest) {
      var postBody = networkRequest; // verify the required parameter 'networkRequest' is set

      if (networkRequest === undefined || networkRequest === null) {
        throw new _Error["default"]("Missing the required parameter 'networkRequest' when calling mempool");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _MempoolResponse["default"];
      return this.apiClient.callApi('/mempool', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get All Mempool Transactions
     * Get all Transaction Identifiers in the mempool
     * @param {module:model/NetworkRequest} networkRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MempoolResponse}
     */

  }, {
    key: "mempool",
    value: function mempool(networkRequest) {
      return this.mempoolWithHttpInfo(networkRequest).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get a Mempool Transaction
     * Get a transaction in the mempool by its Transaction Identifier. This is a separate request than fetching a block transaction (/block/transaction) because some blockchain nodes need to know that a transaction query is for something in the mempool instead of a transaction in a block. Transactions may not be fully parsable until they are in a block (ex: may not be possible to determine the fee to pay before a transaction is executed). On this endpoint, it is ok that returned transactions are only estimates of what may actually be included in a block.
     * @param {module:model/MempoolTransactionRequest} mempoolTransactionRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MempoolTransactionResponse} and HTTP response
     */

  }, {
    key: "mempoolTransactionWithHttpInfo",
    value: function mempoolTransactionWithHttpInfo(mempoolTransactionRequest) {
      var postBody = mempoolTransactionRequest; // verify the required parameter 'mempoolTransactionRequest' is set

      if (mempoolTransactionRequest === undefined || mempoolTransactionRequest === null) {
        throw new _Error["default"]("Missing the required parameter 'mempoolTransactionRequest' when calling mempoolTransaction");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _MempoolTransactionResponse["default"];
      return this.apiClient.callApi('/mempool/transaction', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get a Mempool Transaction
     * Get a transaction in the mempool by its Transaction Identifier. This is a separate request than fetching a block transaction (/block/transaction) because some blockchain nodes need to know that a transaction query is for something in the mempool instead of a transaction in a block. Transactions may not be fully parsable until they are in a block (ex: may not be possible to determine the fee to pay before a transaction is executed). On this endpoint, it is ok that returned transactions are only estimates of what may actually be included in a block.
     * @param {module:model/MempoolTransactionRequest} mempoolTransactionRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MempoolTransactionResponse}
     */

  }, {
    key: "mempoolTransaction",
    value: function mempoolTransaction(mempoolTransactionRequest) {
      return this.mempoolTransactionWithHttpInfo(mempoolTransactionRequest).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return MempoolApi;
}();

exports["default"] = MempoolApi;