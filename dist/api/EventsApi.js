"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Error = _interopRequireDefault(require("../model/Error"));

var _EventsBlocksRequest = _interopRequireDefault(require("../model/EventsBlocksRequest"));

var _EventsBlocksResponse = _interopRequireDefault(require("../model/EventsBlocksResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Events service.
* @module api/EventsApi
* @version 1.4.10
*/
var EventsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new EventsApi. 
  * @alias module:api/EventsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function EventsApi(apiClient) {
    _classCallCheck(this, EventsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the eventsBlocks operation.
   * @callback module:api/EventsApi~eventsBlocksCallback
   * @param {String} error Error message, if any.
   * @param {module:model/EventsBlocksResponse} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * [INDEXER] Get a range of BlockEvents
   * `/events/blocks` allows the caller to query a sequence of BlockEvents indicating which blocks were added and removed from storage to reach the current state. Following BlockEvents allows lightweight clients to update their state without needing to implement their own syncing logic (like finding the common parent in a reorg). `/events/blocks` is considered an \"indexer\" endpoint and Rosetta implementations are not required to complete it to adhere to the Rosetta spec. However, any Rosetta \"indexer\" MUST support this endpoint.
   * @param {module:model/EventsBlocksRequest} eventsBlocksRequest 
   * @param {module:api/EventsApi~eventsBlocksCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/EventsBlocksResponse}
   */


  _createClass(EventsApi, [{
    key: "eventsBlocks",
    value: function eventsBlocks(eventsBlocksRequest, callback) {
      var postBody = eventsBlocksRequest; // verify the required parameter 'eventsBlocksRequest' is set

      if (eventsBlocksRequest === undefined || eventsBlocksRequest === null) {
        throw new _Error["default"]("Missing the required parameter 'eventsBlocksRequest' when calling eventsBlocks");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _EventsBlocksResponse["default"];
      return this.apiClient.callApi('/events/blocks', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return EventsApi;
}();

exports["default"] = EventsApi;