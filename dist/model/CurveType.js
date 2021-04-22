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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* Enum class CurveType.
* @enum {}
* @readonly
*/
var CurveType = /*#__PURE__*/function () {
  function CurveType() {
    _classCallCheck(this, CurveType);

    _defineProperty(this, "secp256k1", "secp256k1");

    _defineProperty(this, "secp256r1", "secp256r1");

    _defineProperty(this, "edwards25519", "edwards25519");

    _defineProperty(this, "tweedle", "tweedle");
  }

  _createClass(CurveType, null, [{
    key: "constructFromObject",
    value:
    /**
    * Returns a <code>CurveType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/CurveType} The enum <code>CurveType</code> value.
    */
    function constructFromObject(object) {
      return object;
    }
  }]);

  return CurveType;
}();

exports["default"] = CurveType;