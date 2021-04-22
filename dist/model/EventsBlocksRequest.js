"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _NetworkIdentifier = _interopRequireDefault(require("./NetworkIdentifier"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The EventsBlocksRequest model module.
 * @module model/EventsBlocksRequest
 * @version 1.4.10
 */
var EventsBlocksRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EventsBlocksRequest</code>.
   * EventsBlocksRequest is utilized to fetch a sequence of BlockEvents indicating which blocks were added and removed from storage to reach the current state.
   * @alias module:model/EventsBlocksRequest
   * @param networkIdentifier {module:model/NetworkIdentifier} 
   */
  function EventsBlocksRequest(networkIdentifier) {
    _classCallCheck(this, EventsBlocksRequest);

    EventsBlocksRequest.initialize(this, networkIdentifier);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EventsBlocksRequest, null, [{
    key: "initialize",
    value: function initialize(obj, networkIdentifier) {
      obj['network_identifier'] = networkIdentifier;
    }
    /**
     * Constructs a <code>EventsBlocksRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EventsBlocksRequest} obj Optional instance to populate.
     * @return {module:model/EventsBlocksRequest} The populated <code>EventsBlocksRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EventsBlocksRequest();

        if (data.hasOwnProperty('network_identifier')) {
          obj['network_identifier'] = _NetworkIdentifier["default"].constructFromObject(data['network_identifier']);
        }

        if (data.hasOwnProperty('offset')) {
          obj['offset'] = _ApiClient["default"].convertToType(data['offset'], 'Number');
        }

        if (data.hasOwnProperty('limit')) {
          obj['limit'] = _ApiClient["default"].convertToType(data['limit'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return EventsBlocksRequest;
}();
/**
 * @member {module:model/NetworkIdentifier} network_identifier
 */


EventsBlocksRequest.prototype['network_identifier'] = undefined;
/**
 * offset is the offset into the event stream to sync events from. If this field is not populated, we return the limit events backwards from tip. If this is set to 0, we start from the beginning.
 * @member {Number} offset
 */

EventsBlocksRequest.prototype['offset'] = undefined;
/**
 * limit is the maximum number of events to fetch in one call. The implementation may return <= limit events.
 * @member {Number} limit
 */

EventsBlocksRequest.prototype['limit'] = undefined;
var _default = EventsBlocksRequest;
exports["default"] = _default;