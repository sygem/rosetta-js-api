"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CallRequest = _interopRequireDefault(require("../model/CallRequest"));

var _CallResponse = _interopRequireDefault(require("../model/CallResponse"));

var _Error = _interopRequireDefault(require("../model/Error"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Call service.
* @module api/CallApi
* @version 1.4.10
*/
var CallApi = /*#__PURE__*/function () {
  /**
  * Constructs a new CallApi. 
  * @alias module:api/CallApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function CallApi(apiClient) {
    _classCallCheck(this, CallApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the call operation.
   * @callback module:api/CallApi~callCallback
   * @param {String} error Error message, if any.
   * @param {module:model/CallResponse} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Make a Network-Specific Procedure Call
   * Call invokes an arbitrary, network-specific procedure call with network-specific parameters. The guidance for what this endpoint should or could do is purposely left vague. In Ethereum, this could be used to invoke `eth_call` to implement an entire Rosetta API interface for some smart contract that is not parsed by the implementation creator (like a DEX). This endpoint could also be used to provide access to data that does not map to any Rosetta models instead of requiring an integrator to use some network-specific SDK and call some network-specific endpoint (like surfacing staking parameters). Call is NOT a replacement for implementing Rosetta API endpoints or mapping network-specific data to Rosetta models. Rather, it enables developers to build additional Rosetta API interfaces for things they care about without introducing complexity into a base-level Rosetta implementation. Simply put, imagine that the average integrator will use layered Rosetta API implementations that each surfaces unique data.
   * @param {module:model/CallRequest} callRequest 
   * @param {module:api/CallApi~callCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/CallResponse}
   */


  _createClass(CallApi, [{
    key: "call",
    value: function call(callRequest, callback) {
      var postBody = callRequest; // verify the required parameter 'callRequest' is set

      if (callRequest === undefined || callRequest === null) {
        throw new _Error["default"]("Missing the required parameter 'callRequest' when calling call");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _CallResponse["default"];
      return this.apiClient.callApi('/call', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return CallApi;
}();

exports["default"] = CallApi;