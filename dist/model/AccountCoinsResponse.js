"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BlockIdentifier = _interopRequireDefault(require("./BlockIdentifier"));

var _Coin = _interopRequireDefault(require("./Coin"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The AccountCoinsResponse model module.
 * @module model/AccountCoinsResponse
 * @version 1.4.10
 */
var AccountCoinsResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AccountCoinsResponse</code>.
   * AccountCoinsResponse is returned on the /account/coins endpoint and includes all unspent Coins owned by an AccountIdentifier.
   * @alias module:model/AccountCoinsResponse
   * @param blockIdentifier {module:model/BlockIdentifier} 
   * @param coins {Array.<module:model/Coin>} If a blockchain is UTXO-based, all unspent Coins owned by an account_identifier should be returned alongside the balance. It is highly recommended to populate this field so that users of the Rosetta API implementation don't need to maintain their own indexer to track their UTXOs.
   */
  function AccountCoinsResponse(blockIdentifier, coins) {
    _classCallCheck(this, AccountCoinsResponse);

    AccountCoinsResponse.initialize(this, blockIdentifier, coins);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AccountCoinsResponse, null, [{
    key: "initialize",
    value: function initialize(obj, blockIdentifier, coins) {
      obj['block_identifier'] = blockIdentifier;
      obj['coins'] = coins;
    }
    /**
     * Constructs a <code>AccountCoinsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AccountCoinsResponse} obj Optional instance to populate.
     * @return {module:model/AccountCoinsResponse} The populated <code>AccountCoinsResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AccountCoinsResponse();

        if (data.hasOwnProperty('block_identifier')) {
          obj['block_identifier'] = _BlockIdentifier["default"].constructFromObject(data['block_identifier']);
        }

        if (data.hasOwnProperty('coins')) {
          obj['coins'] = _ApiClient["default"].convertToType(data['coins'], [_Coin["default"]]);
        }

        if (data.hasOwnProperty('metadata')) {
          obj['metadata'] = _ApiClient["default"].convertToType(data['metadata'], Object);
        }
      }

      return obj;
    }
  }]);

  return AccountCoinsResponse;
}();
/**
 * @member {module:model/BlockIdentifier} block_identifier
 */


AccountCoinsResponse.prototype['block_identifier'] = undefined;
/**
 * If a blockchain is UTXO-based, all unspent Coins owned by an account_identifier should be returned alongside the balance. It is highly recommended to populate this field so that users of the Rosetta API implementation don't need to maintain their own indexer to track their UTXOs.
 * @member {Array.<module:model/Coin>} coins
 */

AccountCoinsResponse.prototype['coins'] = undefined;
/**
 * Account-based blockchains that utilize a nonce or sequence number should include that number in the metadata. This number could be unique to the identifier or global across the account address.
 * @member {Object} metadata
 */

AccountCoinsResponse.prototype['metadata'] = undefined;
var _default = AccountCoinsResponse;
exports["default"] = _default;