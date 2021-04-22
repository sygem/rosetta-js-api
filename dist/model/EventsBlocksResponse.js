"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BlockEvent = _interopRequireDefault(require("./BlockEvent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The EventsBlocksResponse model module.
 * @module model/EventsBlocksResponse
 * @version 1.4.10
 */
var EventsBlocksResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EventsBlocksResponse</code>.
   * EventsBlocksResponse contains an ordered collection of BlockEvents and the max retrievable sequence.
   * @alias module:model/EventsBlocksResponse
   * @param maxSequence {Number} max_sequence is the maximum available sequence number to fetch.
   * @param events {Array.<module:model/BlockEvent>} events is an array of BlockEvents indicating the order to add and remove blocks to maintain a canonical view of blockchain state. Lightweight clients can use this event stream to update state without implementing their own block syncing logic.
   */
  function EventsBlocksResponse(maxSequence, events) {
    _classCallCheck(this, EventsBlocksResponse);

    EventsBlocksResponse.initialize(this, maxSequence, events);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EventsBlocksResponse, null, [{
    key: "initialize",
    value: function initialize(obj, maxSequence, events) {
      obj['max_sequence'] = maxSequence;
      obj['events'] = events;
    }
    /**
     * Constructs a <code>EventsBlocksResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EventsBlocksResponse} obj Optional instance to populate.
     * @return {module:model/EventsBlocksResponse} The populated <code>EventsBlocksResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EventsBlocksResponse();

        if (data.hasOwnProperty('max_sequence')) {
          obj['max_sequence'] = _ApiClient["default"].convertToType(data['max_sequence'], 'Number');
        }

        if (data.hasOwnProperty('events')) {
          obj['events'] = _ApiClient["default"].convertToType(data['events'], [_BlockEvent["default"]]);
        }
      }

      return obj;
    }
  }]);

  return EventsBlocksResponse;
}();
/**
 * max_sequence is the maximum available sequence number to fetch.
 * @member {Number} max_sequence
 */


EventsBlocksResponse.prototype['max_sequence'] = undefined;
/**
 * events is an array of BlockEvents indicating the order to add and remove blocks to maintain a canonical view of blockchain state. Lightweight clients can use this event stream to update state without implementing their own block syncing logic.
 * @member {Array.<module:model/BlockEvent>} events
 */

EventsBlocksResponse.prototype['events'] = undefined;
var _default = EventsBlocksResponse;
exports["default"] = _default;