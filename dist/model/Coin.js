"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Amount = _interopRequireDefault(require("./Amount"));

var _CoinIdentifier = _interopRequireDefault(require("./CoinIdentifier"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Coin model module.
 * @module model/Coin
 * @version 1.4.10
 */
var Coin = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Coin</code>.
   * Coin contains its unique identifier and the amount it represents.
   * @alias module:model/Coin
   * @param coinIdentifier {module:model/CoinIdentifier} 
   * @param amount {module:model/Amount} 
   */
  function Coin(coinIdentifier, amount) {
    _classCallCheck(this, Coin);

    Coin.initialize(this, coinIdentifier, amount);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Coin, null, [{
    key: "initialize",
    value: function initialize(obj, coinIdentifier, amount) {
      obj['coin_identifier'] = coinIdentifier;
      obj['amount'] = amount;
    }
    /**
     * Constructs a <code>Coin</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Coin} obj Optional instance to populate.
     * @return {module:model/Coin} The populated <code>Coin</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Coin();

        if (data.hasOwnProperty('coin_identifier')) {
          obj['coin_identifier'] = _CoinIdentifier["default"].constructFromObject(data['coin_identifier']);
        }

        if (data.hasOwnProperty('amount')) {
          obj['amount'] = _Amount["default"].constructFromObject(data['amount']);
        }
      }

      return obj;
    }
  }]);

  return Coin;
}();
/**
 * @member {module:model/CoinIdentifier} coin_identifier
 */


Coin.prototype['coin_identifier'] = undefined;
/**
 * @member {module:model/Amount} amount
 */

Coin.prototype['amount'] = undefined;
var _default = Coin;
exports["default"] = _default;