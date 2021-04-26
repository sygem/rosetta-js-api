"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Error = _interopRequireDefault(require("../model/Error"));

var _MetadataRequest = _interopRequireDefault(require("../model/MetadataRequest"));

var _NetworkListResponse = _interopRequireDefault(require("../model/NetworkListResponse"));

var _NetworkOptionsResponse = _interopRequireDefault(require("../model/NetworkOptionsResponse"));

var _NetworkRequest = _interopRequireDefault(require("../model/NetworkRequest"));

var _NetworkStatusResponse = _interopRequireDefault(require("../model/NetworkStatusResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Network service.
* @module api/NetworkApi
* @version 1.4.10
*/
var NetworkApi = /*#__PURE__*/function () {
  /**
  * Constructs a new NetworkApi. 
  * @alias module:api/NetworkApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function NetworkApi(apiClient) {
    _classCallCheck(this, NetworkApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Get List of Available Networks
   * This endpoint returns a list of NetworkIdentifiers that the Rosetta server supports.
   * @param {module:model/MetadataRequest} metadataRequest 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/NetworkListResponse} and HTTP response
   */


  _createClass(NetworkApi, [{
    key: "networkListWithHttpInfo",
    value: function networkListWithHttpInfo(metadataRequest) {
      var postBody = metadataRequest; // verify the required parameter 'metadataRequest' is set

      if (metadataRequest === undefined || metadataRequest === null) {
        throw new _Error["default"]("Missing the required parameter 'metadataRequest' when calling networkList");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _NetworkListResponse["default"];
      return this.apiClient.callApi('/network/list', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get List of Available Networks
     * This endpoint returns a list of NetworkIdentifiers that the Rosetta server supports.
     * @param {module:model/MetadataRequest} metadataRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/NetworkListResponse}
     */

  }, {
    key: "networkList",
    value: function networkList(metadataRequest) {
      return this.networkListWithHttpInfo(metadataRequest).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get Network Options
     * This endpoint returns the version information and allowed network-specific types for a NetworkIdentifier. Any NetworkIdentifier returned by /network/list should be accessible here. Because options are retrievable in the context of a NetworkIdentifier, it is possible to define unique options for each network.
     * @param {module:model/NetworkRequest} networkRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/NetworkOptionsResponse} and HTTP response
     */

  }, {
    key: "networkOptionsWithHttpInfo",
    value: function networkOptionsWithHttpInfo(networkRequest) {
      var postBody = networkRequest; // verify the required parameter 'networkRequest' is set

      if (networkRequest === undefined || networkRequest === null) {
        throw new _Error["default"]("Missing the required parameter 'networkRequest' when calling networkOptions");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _NetworkOptionsResponse["default"];
      return this.apiClient.callApi('/network/options', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get Network Options
     * This endpoint returns the version information and allowed network-specific types for a NetworkIdentifier. Any NetworkIdentifier returned by /network/list should be accessible here. Because options are retrievable in the context of a NetworkIdentifier, it is possible to define unique options for each network.
     * @param {module:model/NetworkRequest} networkRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/NetworkOptionsResponse}
     */

  }, {
    key: "networkOptions",
    value: function networkOptions(networkRequest) {
      return this.networkOptionsWithHttpInfo(networkRequest).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get Network Status
     * This endpoint returns the current status of the network requested. Any NetworkIdentifier returned by /network/list should be accessible here.
     * @param {module:model/NetworkRequest} networkRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/NetworkStatusResponse} and HTTP response
     */

  }, {
    key: "networkStatusWithHttpInfo",
    value: function networkStatusWithHttpInfo(networkRequest) {
      var postBody = networkRequest; // verify the required parameter 'networkRequest' is set

      if (networkRequest === undefined || networkRequest === null) {
        throw new _Error["default"]("Missing the required parameter 'networkRequest' when calling networkStatus");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _NetworkStatusResponse["default"];
      return this.apiClient.callApi('/network/status', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get Network Status
     * This endpoint returns the current status of the network requested. Any NetworkIdentifier returned by /network/list should be accessible here.
     * @param {module:model/NetworkRequest} networkRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/NetworkStatusResponse}
     */

  }, {
    key: "networkStatus",
    value: function networkStatus(networkRequest) {
      return this.networkStatusWithHttpInfo(networkRequest).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return NetworkApi;
}();

exports["default"] = NetworkApi;