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
 * The CallResponse model module.
 * @module model/CallResponse
 * @version 1.4.10
 */
var CallResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CallResponse</code>.
   * CallResponse contains the result of a &#x60;/call&#x60; invocation.
   * @alias module:model/CallResponse
   * @param result {Object} Result contains the result of the `/call` invocation. This result will not be inspected or interpreted by Rosetta tooling and is left to the caller to decode.
   * @param idempotent {Boolean} Idempotent indicates that if `/call` is invoked with the same CallRequest again, at any point in time, it will return the same CallResponse. Integrators may cache the CallResponse if this is set to true to avoid making unnecessary calls to the Rosetta implementation. For this reason, implementers should be very conservative about returning true here or they could cause issues for the caller.
   */
  function CallResponse(result, idempotent) {
    _classCallCheck(this, CallResponse);

    CallResponse.initialize(this, result, idempotent);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CallResponse, null, [{
    key: "initialize",
    value: function initialize(obj, result, idempotent) {
      obj['result'] = result;
      obj['idempotent'] = idempotent;
    }
    /**
     * Constructs a <code>CallResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CallResponse} obj Optional instance to populate.
     * @return {module:model/CallResponse} The populated <code>CallResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CallResponse();

        if (data.hasOwnProperty('result')) {
          obj['result'] = _ApiClient["default"].convertToType(data['result'], Object);
        }

        if (data.hasOwnProperty('idempotent')) {
          obj['idempotent'] = _ApiClient["default"].convertToType(data['idempotent'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return CallResponse;
}();
/**
 * Result contains the result of the `/call` invocation. This result will not be inspected or interpreted by Rosetta tooling and is left to the caller to decode.
 * @member {Object} result
 */


CallResponse.prototype['result'] = undefined;
/**
 * Idempotent indicates that if `/call` is invoked with the same CallRequest again, at any point in time, it will return the same CallResponse. Integrators may cache the CallResponse if this is set to true to avoid making unnecessary calls to the Rosetta implementation. For this reason, implementers should be very conservative about returning true here or they could cause issues for the caller.
 * @member {Boolean} idempotent
 */

CallResponse.prototype['idempotent'] = undefined;
var _default = CallResponse;
exports["default"] = _default;