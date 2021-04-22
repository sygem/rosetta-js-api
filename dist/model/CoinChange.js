"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CoinAction = _interopRequireDefault(require("./CoinAction"));

var _CoinIdentifier = _interopRequireDefault(require("./CoinIdentifier"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CoinChange model module.
 * @module model/CoinChange
 * @version 1.4.10
 */
var CoinChange = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CoinChange</code>.
   * CoinChange is used to represent a change in state of a some coin identified by a coin_identifier. This object is part of the Operation model and must be populated for UTXO-based blockchains. Coincidentally, this abstraction of UTXOs allows for supporting both account-based transfers and UTXO-based transfers on the same blockchain (when a transfer is account-based, don&#39;t populate this model).
   * @alias module:model/CoinChange
   * @param coinIdentifier {module:model/CoinIdentifier} 
   * @param coinAction {module:model/CoinAction} 
   */
  function CoinChange(coinIdentifier, coinAction) {
    _classCallCheck(this, CoinChange);

    CoinChange.initialize(this, coinIdentifier, coinAction);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CoinChange, null, [{
    key: "initialize",
    value: function initialize(obj, coinIdentifier, coinAction) {
      obj['coin_identifier'] = coinIdentifier;
      obj['coin_action'] = coinAction;
    }
    /**
     * Constructs a <code>CoinChange</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CoinChange} obj Optional instance to populate.
     * @return {module:model/CoinChange} The populated <code>CoinChange</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CoinChange();

        if (data.hasOwnProperty('coin_identifier')) {
          obj['coin_identifier'] = _CoinIdentifier["default"].constructFromObject(data['coin_identifier']);
        }

        if (data.hasOwnProperty('coin_action')) {
          obj['coin_action'] = _CoinAction["default"].constructFromObject(data['coin_action']);
        }
      }

      return obj;
    }
  }]);

  return CoinChange;
}();
/**
 * @member {module:model/CoinIdentifier} coin_identifier
 */


CoinChange.prototype['coin_identifier'] = undefined;
/**
 * @member {module:model/CoinAction} coin_action
 */

CoinChange.prototype['coin_action'] = undefined;
var _default = CoinChange;
exports["default"] = _default;