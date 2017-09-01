webpackJsonp([1],{

/***/ 108:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(26);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(45);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _header = __webpack_require__(208);

var _header2 = _interopRequireDefault(_header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {

  var wss = function wss() {

    var urls = {};

    var setup = function setup(urlsContextData) {
      urls = urlsContextData;
      _reactDom2.default.render(_react2.default.createElement(_header2.default, { urls: urls }), document.getElementById('header'));
    };

    return { urls: urls, setup: setup };
  };

  if (!window.wss) {
    window.wss = wss();
  }
})();

/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(26);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(62);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _wfpWssUiReact = __webpack_require__(63);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WSSHeader = function WSSHeader(props) {
  return _react2.default.createElement(
    'div',
    { className: 'navbar' },
    _react2.default.createElement(
      _wfpWssUiReact.CommonLinksHeader,
      null,
      _react2.default.createElement(_wfpWssUiReact.LinkMenuItem, { url: 'http://communities.wfp.org', text: 'WFP Communities' }),
      _react2.default.createElement(_wfpWssUiReact.LinkMenuItem, { url: 'http://opweb.wfp.org', text: 'OPweb' }),
      _react2.default.createElement(_wfpWssUiReact.LinkMenuItem, { url: 'http://docustore.wfp.org', text: 'Docustore' }),
      _react2.default.createElement(_wfpWssUiReact.LinkMenuItem, { url: 'http://manuals.wfp.org/', text: 'WFP Manuals' }),
      _react2.default.createElement(_wfpWssUiReact.LinkMenuItem, { url: 'http://newgo.wfp.org/', text: 'WFPgo' })
    ),
    _react2.default.createElement(
      _wfpWssUiReact.Header,
      { title: 'WFP Self-Service' },
      _react2.default.createElement(_wfpWssUiReact.LinkMenuItem, { url: props.urls.my, text: 'My requests' }),
      _react2.default.createElement(_wfpWssUiReact.LinkMenuItem, { url: props.urls.incoming, text: 'Incoming requests' }),
      _react2.default.createElement(_wfpWssUiReact.LinkMenuItem, { url: props.urls.create, text: 'Create a request', isButton: true }),
      _react2.default.createElement(_wfpWssUiReact.SearchWidget, null),
      _react2.default.createElement(_wfpWssUiReact.UserMenuWidget, null)
    )
  );
};

WSSHeader.propTypes = {
  className: _propTypes2.default.string
};

exports.default = WSSHeader;

/***/ })

},[108]);