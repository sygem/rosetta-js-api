"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BlockEventType = _interopRequireDefault(require("./BlockEventType"));

var _BlockIdentifier = _interopRequireDefault(require("./BlockIdentifier"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The BlockEvent model module.
 * @module model/BlockEvent
 * @version 1.4.10
 */
var BlockEvent = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BlockEvent</code>.
   * BlockEvent represents the addition or removal of a BlockIdentifier from storage. Streaming BlockEvents allows lightweight clients to update their own state without needing to implement their own syncing logic.
   * @alias module:model/BlockEvent
   * @param sequence {Number} sequence is the unique identifier of a BlockEvent within the context of a NetworkIdentifier.
   * @param blockIdentifier {module:model/BlockIdentifier} 
   * @param type {module:model/BlockEventType} 
   */
  function BlockEvent(sequence, blockIdentifier, type) {
    _classCallCheck(this, BlockEvent);

    BlockEvent.initialize(this, sequence, blockIdentifier, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BlockEvent, null, [{
    key: "initialize",
    value: function initialize(obj, sequence, blockIdentifier, type) {
      obj['sequence'] = sequence;
      obj['block_identifier'] = blockIdentifier;
      obj['type'] = type;
    }
    /**
     * Constructs a <code>BlockEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BlockEvent} obj Optional instance to populate.
     * @return {module:model/BlockEvent} The populated <code>BlockEvent</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BlockEvent();

        if (data.hasOwnProperty('sequence')) {
          obj['sequence'] = _ApiClient["default"].convertToType(data['sequence'], 'Number');
        }

        if (data.hasOwnProperty('block_identifier')) {
          obj['block_identifier'] = _BlockIdentifier["default"].constructFromObject(data['block_identifier']);
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _BlockEventType["default"].constructFromObject(data['type']);
        }
      }

      return obj;
    }
  }]);

  return BlockEvent;
}();
/**
 * sequence is the unique identifier of a BlockEvent within the context of a NetworkIdentifier.
 * @member {Number} sequence
 */


BlockEvent.prototype['sequence'] = undefined;
/**
 * @member {module:model/BlockIdentifier} block_identifier
 */

BlockEvent.prototype['block_identifier'] = undefined;
/**
 * @member {module:model/BlockEventType} type
 */

BlockEvent.prototype['type'] = undefined;
var _default = BlockEvent;
exports["default"] = _default;