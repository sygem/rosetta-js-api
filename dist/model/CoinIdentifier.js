"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CoinIdentifier model module.
 * @module model/CoinIdentifier
 * @version 1.4.10
 */
var CoinIdentifier = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CoinIdentifier</code>.
   * CoinIdentifier uniquely identifies a Coin.
   * @alias module:model/CoinIdentifier
   * @param identifier {String} Identifier should be populated with a globally unique identifier of a Coin. In Bitcoin, this identifier would be transaction_hash:index.
   */
  function CoinIdentifier(identifier) {
    _classCallCheck(this, CoinIdentifier);

    CoinIdentifier.initialize(this, identifier);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CoinIdentifier, null, [{
    key: "initialize",
    value: function initialize(obj, identifier) {
      obj['identifier'] = identifier;
    }
    /**
     * Constructs a <code>CoinIdentifier</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CoinIdentifier} obj Optional instance to populate.
     * @return {module:model/CoinIdentifier} The populated <code>CoinIdentifier</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CoinIdentifier();

        if (data.hasOwnProperty('identifier')) {
          obj['identifier'] = _ApiClient["default"].convertToType(data['identifier'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CoinIdentifier;
}();
/**
 * Identifier should be populated with a globally unique identifier of a Coin. In Bitcoin, this identifier would be transaction_hash:index.
 * @member {String} identifier
 */


CoinIdentifier.prototype['identifier'] = undefined;
var _default = CoinIdentifier;
exports["default"] = _default;