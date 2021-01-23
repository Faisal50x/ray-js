"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dayjs = _interopRequireDefault(require("dayjs"));

var _utc = _interopRequireDefault(require("dayjs/plugin/utc"));

var _timezone = _interopRequireDefault(require("dayjs/plugin/timezone"));

var _advancedFormat = _interopRequireDefault(require("dayjs/plugin/advancedFormat"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dayjs["default"].extend(_advancedFormat["default"]);

_dayjs["default"].extend(_utc["default"]);

_dayjs["default"].extend(_timezone["default"]);

var _default = function _default(value) {
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'YYYY-MM-DD H:mm:ss';
  var carbon = (0, _dayjs["default"])(value);
  return {
    type: 'carbon',
    content: {
      formatted: carbon.format(format),
      timestamp: carbon.valueOf(),
      timezone: _dayjs["default"].tz.guess()
    }
  };
};

exports["default"] = _default;