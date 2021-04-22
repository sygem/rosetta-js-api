"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Currency = _interopRequireDefault(require("./Currency"));

var _ExemptionType = _interopRequireDefault(require("./ExemptionType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The BalanceExemption model module.
 * @module model/BalanceExemption
 * @version 1.4.10
 */
var BalanceExemption = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BalanceExemption</code>.
   * BalanceExemption indicates that the balance for an exempt account could change without a corresponding Operation. This typically occurs with staking rewards, vesting balances, and Currencies with a dynamic supply. Currently, it is possible to exempt an account from strict reconciliation by SubAccountIdentifier.Address or by Currency. This means that any account with SubAccountIdentifier.Address would be exempt or any balance of a particular Currency would be exempt, respectively. BalanceExemptions should be used sparingly as they may introduce significant complexity for integrators that attempt to reconcile all account balance changes. If your implementation relies on any BalanceExemptions, you MUST implement historical balance lookup (the ability to query an account balance at any BlockIdentifier).
   * @alias module:model/BalanceExemption
   */
  function BalanceExemption() {
    _classCallCheck(this, BalanceExemption);

    BalanceExemption.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BalanceExemption, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>BalanceExemption</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BalanceExemption} obj Optional instance to populate.
     * @return {module:model/BalanceExemption} The populated <code>BalanceExemption</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BalanceExemption();

        if (data.hasOwnProperty('sub_account_address')) {
          obj['sub_account_address'] = _ApiClient["default"].convertToType(data['sub_account_address'], 'String');
        }

        if (data.hasOwnProperty('currency')) {
          obj['currency'] = _Currency["default"].constructFromObject(data['currency']);
        }

        if (data.hasOwnProperty('exemption_type')) {
          obj['exemption_type'] = _ExemptionType["default"].constructFromObject(data['exemption_type']);
        }
      }

      return obj;
    }
  }]);

  return BalanceExemption;
}();
/**
 * SubAccountAddress is the SubAccountIdentifier.Address that the BalanceExemption applies to (regardless of the value of SubAccountIdentifier.Metadata).
 * @member {String} sub_account_address
 */


BalanceExemption.prototype['sub_account_address'] = undefined;
/**
 * @member {module:model/Currency} currency
 */

BalanceExemption.prototype['currency'] = undefined;
/**
 * @member {module:model/ExemptionType} exemption_type
 */

BalanceExemption.prototype['exemption_type'] = undefined;
var _default = BalanceExemption;
exports["default"] = _default;