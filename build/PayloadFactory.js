"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _CustomPayload = _interopRequireDefault(require("./payloads/CustomPayload"));

var _LogPayload = _interopRequireDefault(require("./payloads/LogPayload"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var PayloadFactory = /*#__PURE__*/function () {
  function PayloadFactory(values) {
    _classCallCheck(this, PayloadFactory);

    _defineProperty(this, "values", void 0);

    this.values = values;
  }

  _createClass(PayloadFactory, [{
    key: "getPayloads",
    value: function getPayloads() {
      var _this = this;

      return this.values.map(function (value) {
        return _this.getPayload(value);
      });
    }
  }, {
    key: "getPayload",
    value: function getPayload(value) {
      if (value === null) {
        return (0, _CustomPayload["default"])(null, 'Null');
      }

      if (typeof value == 'boolean') {
        return (0, _CustomPayload["default"])(value, 'Boolean');
      }

      if (!Array.isArray(value) && _typeof(value) == 'object') {
        return (0, _CustomPayload["default"])(value, "Object");
      }

      return (0, _LogPayload["default"])(value);
    }
  }], [{
    key: "createForValues",
    value: function createForValues($arguments) {
      return new PayloadFactory($arguments).getPayloads();
    }
  }]);

  return PayloadFactory;
}();

exports["default"] = PayloadFactory;