"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AccountBalanceRequest = _interopRequireDefault(require("../model/AccountBalanceRequest"));

var _AccountBalanceResponse = _interopRequireDefault(require("../model/AccountBalanceResponse"));

var _AccountCoinsRequest = _interopRequireDefault(require("../model/AccountCoinsRequest"));

var _AccountCoinsResponse = _interopRequireDefault(require("../model/AccountCoinsResponse"));

var _Error = _interopRequireDefault(require("../model/Error"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Account service.
* @module api/AccountApi
* @version 1.4.10
*/
var AccountApi = /*#__PURE__*/function () {
  /**
  * Constructs a new AccountApi. 
  * @alias module:api/AccountApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function AccountApi(apiClient) {
    _classCallCheck(this, AccountApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the accountBalance operation.
   * @callback module:api/AccountApi~accountBalanceCallback
   * @param {String} error Error message, if any.
   * @param {module:model/AccountBalanceResponse} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get an Account's Balance
   * Get an array of all AccountBalances for an AccountIdentifier and the BlockIdentifier at which the balance lookup was performed. The BlockIdentifier must always be returned because some consumers of account balance data need to know specifically at which block the balance was calculated to compare balances they compute from operations with the balance returned by the node. It is important to note that making a balance request for an account without populating the SubAccountIdentifier should not result in the balance of all possible SubAccountIdentifiers being returned. Rather, it should result in the balance pertaining to no SubAccountIdentifiers being returned (sometimes called the liquid balance). To get all balances associated with an account, it may be necessary to perform multiple balance requests with unique AccountIdentifiers. It is also possible to perform a historical balance lookup (if the server supports it) by passing in an optional BlockIdentifier.
   * @param {module:model/AccountBalanceRequest} accountBalanceRequest 
   * @param {module:api/AccountApi~accountBalanceCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/AccountBalanceResponse}
   */


  _createClass(AccountApi, [{
    key: "accountBalance",
    value: function accountBalance(accountBalanceRequest, callback) {
      var postBody = accountBalanceRequest; // verify the required parameter 'accountBalanceRequest' is set

      if (accountBalanceRequest === undefined || accountBalanceRequest === null) {
        throw new _Error["default"]("Missing the required parameter 'accountBalanceRequest' when calling accountBalance");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _AccountBalanceResponse["default"];
      return this.apiClient.callApi('/account/balance', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the accountCoins operation.
     * @callback module:api/AccountApi~accountCoinsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AccountCoinsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get an Account's Unspent Coins
     * Get an array of all unspent coins for an AccountIdentifier and the BlockIdentifier at which the lookup was performed. If your implementation does not support coins (i.e. it is for an account-based blockchain), you do not need to implement this endpoint. If you implementation does support coins (i.e. it is fro a UTXO-based blockchain), you MUST also complete the `/account/balance` endpoint. It is important to note that making a coins request for an account without populating the SubAccountIdentifier should not result in the coins of all possible SubAccountIdentifiers being returned. Rather, it should result in the coins pertaining to no SubAccountIdentifiers being returned. To get all coins associated with an account, it may be necessary to perform multiple coin requests with unique AccountIdentifiers. Optionally, an implementation may choose to support updating an AccountIdentifier's unspent coins based on the contents of the mempool. Note, using this functionality breaks any guarantee of idempotency.
     * @param {module:model/AccountCoinsRequest} accountCoinsRequest 
     * @param {module:api/AccountApi~accountCoinsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AccountCoinsResponse}
     */

  }, {
    key: "accountCoins",
    value: function accountCoins(accountCoinsRequest, callback) {
      var postBody = accountCoinsRequest; // verify the required parameter 'accountCoinsRequest' is set

      if (accountCoinsRequest === undefined || accountCoinsRequest === null) {
        throw new _Error["default"]("Missing the required parameter 'accountCoinsRequest' when calling accountCoins");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _AccountCoinsResponse["default"];
      return this.apiClient.callApi('/account/coins', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return AccountApi;
}();

exports["default"] = AccountApi;