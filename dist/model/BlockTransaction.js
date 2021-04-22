"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BlockIdentifier = _interopRequireDefault(require("./BlockIdentifier"));

var _Transaction = _interopRequireDefault(require("./Transaction"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The BlockTransaction model module.
 * @module model/BlockTransaction
 * @version 1.4.10
 */
var BlockTransaction = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BlockTransaction</code>.
   * BlockTransaction contains a populated Transaction and the BlockIdentifier that contains it.
   * @alias module:model/BlockTransaction
   * @param blockIdentifier {module:model/BlockIdentifier} 
   * @param transaction {module:model/Transaction} 
   */
  function BlockTransaction(blockIdentifier, transaction) {
    _classCallCheck(this, BlockTransaction);

    BlockTransaction.initialize(this, blockIdentifier, transaction);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BlockTransaction, null, [{
    key: "initialize",
    value: function initialize(obj, blockIdentifier, transaction) {
      obj['block_identifier'] = blockIdentifier;
      obj['transaction'] = transaction;
    }
    /**
     * Constructs a <code>BlockTransaction</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BlockTransaction} obj Optional instance to populate.
     * @return {module:model/BlockTransaction} The populated <code>BlockTransaction</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BlockTransaction();

        if (data.hasOwnProperty('block_identifier')) {
          obj['block_identifier'] = _BlockIdentifier["default"].constructFromObject(data['block_identifier']);
        }

        if (data.hasOwnProperty('transaction')) {
          obj['transaction'] = _Transaction["default"].constructFromObject(data['transaction']);
        }
      }

      return obj;
    }
  }]);

  return BlockTransaction;
}();
/**
 * @member {module:model/BlockIdentifier} block_identifier
 */


BlockTransaction.prototype['block_identifier'] = undefined;
/**
 * @member {module:model/Transaction} transaction
 */

BlockTransaction.prototype['transaction'] = undefined;
var _default = BlockTransaction;
exports["default"] = _default;