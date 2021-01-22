"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default() {
  var value = JSON.stringify.apply(JSON, arguments);
  return {
    type: 'json_string',
    content: {
      value: value
    }
  };
};

exports["default"] = _default;