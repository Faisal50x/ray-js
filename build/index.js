"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _uuid = require("uuid");

var _ColorPayload = _interopRequireDefault(require("./payloads/ColorPayload"));

var _HidePayload = _interopRequireDefault(require("./payloads/HidePayload"));

var _LogPayload = _interopRequireDefault(require("./payloads/LogPayload"));

var _NewScreenPayload = _interopRequireDefault(require("./payloads/NewScreenPayload"));

var _RemovePayload = _interopRequireDefault(require("./payloads/RemovePayload"));

var _SizePayload = _interopRequireDefault(require("./payloads/SizePayload"));

var _NotifyPayload = _interopRequireDefault(require("./payloads/NotifyPayload"));

var _CustomPayload = _interopRequireDefault(require("./payloads/CustomPayload"));

var _JsonStringPayload = _interopRequireDefault(require("./payloads/JsonStringPayload"));

var _PayloadFactory = _interopRequireDefault(require("./PayloadFactory"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Ray = /*#__PURE__*/function () {
  function Ray() {
    var host = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '127.0.0.1';
    var port = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 23517;

    _classCallCheck(this, Ray);

    this.uuid = (0, _uuid.v4)();
    this.client = _axios["default"].create({
      baseURL: "http://".concat(host, ":").concat(port, "/")
    });
  }

  _createClass(Ray, [{
    key: "newScreen",
    value: function newScreen() {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      this.sendRequest((0, _NewScreenPayload["default"])(name));
      return this;
    }
  }, {
    key: "clearScreen",
    value: function clearScreen() {
      return this.newScreen();
    }
  }, {
    key: "color",
    value: function color(_color) {
      this.sendRequest((0, _ColorPayload["default"])(_color));
      return this;
    }
  }, {
    key: "size",
    value: function size(_size) {
      this.sendRequest((0, _SizePayload["default"])(_size));
      return this;
    }
  }, {
    key: "remove",
    value: function remove() {
      this.sendRequest((0, _RemovePayload["default"])());
      return this;
    }
  }, {
    key: "hide",
    value: function hide() {
      this.sendRequest((0, _HidePayload["default"])());
      return this;
    }
  }, {
    key: "notify",
    value: function notify(text) {
      this.sendRequest((0, _NotifyPayload["default"])(text));
      return this;
    }
  }, {
    key: "die",
    value: function die() {
      process.exit();
    }
  }, {
    key: "showWhen",
    value: function showWhen(boolOrFunc) {
      if (typeof boolOrFunc == 'function') boolOrFunc = boolOrFunc();
      if (!boolOrFunc) this.remove();
      return this;
    }
  }, {
    key: "showIf",
    value: function showIf(boolOrFunc) {
      return this.showWhen(boolOrFunc);
    }
  }, {
    key: "removeWhen",
    value: function removeWhen(boolOrFunc) {
      if (typeof boolOrFunc == 'function') boolOrFunc = boolOrFunc();
      if (boolOrFunc) this.remove();
      return this;
    }
  }, {
    key: "removeIf",
    value: function removeIf(boolOrFunc) {
      return this.removeWhen(boolOrFunc);
    }
  }, {
    key: "ban",
    value: function ban() {
      return this.send('🕶');
    }
  }, {
    key: "charles",
    value: function charles() {
      return this.send('🎶 🎹 🎷 🕺');
    }
  }, {
    key: "toJson",
    value: function toJson() {
      if (arguments.length === 0) return this;
      this.sendRequest(_JsonStringPayload["default"].apply(void 0, arguments));
      return this;
    }
  }, {
    key: "send",
    value: function send() {
      for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
        values[_key] = arguments[_key];
      }

      if (values.length === 0) return this;

      var payloads = _PayloadFactory["default"].createForValues(values);

      this.sendRequest.apply(this, _toConsumableArray(payloads));
      return this;
    }
  }, {
    key: "pass",
    value: function pass(value) {
      this.send(value);
      return value;
    }
  }, {
    key: "sendCustom",
    value: function sendCustom(content) {
      var label = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      this.sendRequest((0, _CustomPayload["default"])(content, label));
      return this;
    }
  }, {
    key: "sendRequest",
    value: function sendRequest() {
      for (var _len2 = arguments.length, payloads = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        payloads[_key2] = arguments[_key2];
      }

      this.client.post('/', {
        uuid: this.uuid,
        payloads: payloads.map(function (payload) {
          payload.origin = {
            file: '/some/path/here.js',
            line_number: 1
          };
          return payload;
        }),
        meta: []
      });
    }
  }]);

  return Ray;
}();

exports["default"] = Ray;

_defineProperty(Ray, "client", void 0);