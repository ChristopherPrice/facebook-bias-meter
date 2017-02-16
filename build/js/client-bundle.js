(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _biasIndicator = require("./client/bias-indicator.jsx");

var _biasIndicator2 = _interopRequireDefault(_biasIndicator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

ReactDOM.render(React.createElement(_biasIndicator2.default, null), document.querySelector("body"));

},{"./client/bias-indicator.jsx":2}],2:[function(require,module,exports){
"use strict";

module.exports = React.createClass({
    displayName: "exports",

    render: function render() {
        return React.createElement(
            "div",
            null,
            "Hello"
        );
    }
});

},{}]},{},[1]);
