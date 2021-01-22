"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(content, label) {
  return {
    type: 'custom',
    content: {
      content: content,
      label: label
    }
  };
};

exports["default"] = _default;