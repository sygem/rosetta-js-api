"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Error = _interopRequireDefault(require("../model/Error"));

var _SearchTransactionsRequest = _interopRequireDefault(require("../model/SearchTransactionsRequest"));

var _SearchTransactionsResponse = _interopRequireDefault(require("../model/SearchTransactionsResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Search service.
* @module api/SearchApi
* @version 1.4.10
*/
var SearchApi = /*#__PURE__*/function () {
  /**
  * Constructs a new SearchApi. 
  * @alias module:api/SearchApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function SearchApi(apiClient) {
    _classCallCheck(this, SearchApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * [INDEXER] Search for Transactions
   * `/search/transactions` allows the caller to search for transactions that meet certain conditions. Some conditions include matching a transaction hash, containing an operation with a certain status, or containing an operation that affects a certain account. `/search/transactions` is considered an \"indexer\" endpoint and Rosetta implementations are not required to complete it to adhere to the Rosetta spec. However, any Rosetta \"indexer\" MUST support this endpoint.
   * @param {module:model/SearchTransactionsRequest} searchTransactionsRequest 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SearchTransactionsResponse} and HTTP response
   */


  _createClass(SearchApi, [{
    key: "searchTransactionsWithHttpInfo",
    value: function searchTransactionsWithHttpInfo(searchTransactionsRequest) {
      var postBody = searchTransactionsRequest; // verify the required parameter 'searchTransactionsRequest' is set

      if (searchTransactionsRequest === undefined || searchTransactionsRequest === null) {
        throw new _Error["default"]("Missing the required parameter 'searchTransactionsRequest' when calling searchTransactions");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _SearchTransactionsResponse["default"];
      return this.apiClient.callApi('/search/transactions', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * [INDEXER] Search for Transactions
     * `/search/transactions` allows the caller to search for transactions that meet certain conditions. Some conditions include matching a transaction hash, containing an operation with a certain status, or containing an operation that affects a certain account. `/search/transactions` is considered an \"indexer\" endpoint and Rosetta implementations are not required to complete it to adhere to the Rosetta spec. However, any Rosetta \"indexer\" MUST support this endpoint.
     * @param {module:model/SearchTransactionsRequest} searchTransactionsRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SearchTransactionsResponse}
     */

  }, {
    key: "searchTransactions",
    value: function searchTransactions(searchTransactionsRequest) {
      return this.searchTransactionsWithHttpInfo(searchTransactionsRequest).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return SearchApi;
}();

exports["default"] = SearchApi;