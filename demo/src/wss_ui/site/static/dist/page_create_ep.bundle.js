webpackJsonp([0],{

/***/ 244:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(21);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(45);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _page_create = __webpack_require__(245);

var _page_create2 = _interopRequireDefault(_page_create);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {

  var page_create = function page_create() {

    var urls = {};

    var setup = function setup(urlsContextData) {
      urls = urlsContextData;
      _reactDom2.default.render(_react2.default.createElement(_page_create2.default, { urls: urls }), document.getElementById('create'));
    };

    return { urls: urls, setup: setup };
  };

  if (!window.page_create) {
    window.page_create = page_create();
  }
})();

/***/ }),

/***/ 245:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(21);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(62);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _wfpWssUiReact = __webpack_require__(63);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GridHeading = function GridHeading(props) {
  return _react2.default.createElement(
    'h3',
    null,
    _react2.default.createElement('i', { className: "fa fa-fw " + props.className }),
    _react2.default.createElement(
      'span',
      null,
      props.headingText
    )
  );
};

var FormLink = function FormLink(props) {
  return _react2.default.createElement(
    'div',
    { className: 'wfp-u-1-2 wfp-grid wfp-form-description' },
    _react2.default.createElement('div', { className: 'wfp-u-1-12' }),
    _react2.default.createElement(
      'div',
      { className: 'wfp-u-10-12' },
      _react2.default.createElement(
        'div',
        { className: 'heading' },
        props.content.heading
      ),
      _react2.default.createElement(
        'div',
        { className: 'title' },
        _react2.default.createElement(
          'a',
          { className: 'menuitem', 'data-target': 'content',
            'data-action': 'page_my', 'data-content': props.content.ident,
            'data-fill-attribute': 'data-action',
            href: props.content.form_url },
          _react2.default.createElement(
            'span',
            null,
            props.content.name
          )
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'description' },
        props.content.description
      )
    )
  );
};

var Grid = function Grid(props) {
  return _react2.default.createElement(
    'div',
    { className: 'wfp-grid' },
    _react2.default.createElement(
      'div',
      { className: 'wfp-grid wfp-u-1-1' },
      props.content_list.map(function (content, ind) {
        return _react2.default.createElement(FormLink, { key: ind, content: content });
      })
    )
  );
};

var PageCreate = function PageCreate(props) {
  return _react2.default.createElement(
    'div',
    { className: 'content' },
    _react2.default.createElement(_wfpWssUiReact.Breadcrumbs, { home: 'labels.home', nextLabels: ["labels.create_a_request"], nextLinks: [] }),
    _react2.default.createElement(
      'section',
      null,
      _react2.default.createElement(GridHeading, { className: 'fa-clock-o', headingText: labels.latest_forms_used }),
      _react2.default.createElement(Grid, { content_list: latest_forms })
    ),
    _react2.default.createElement(
      _wfpWssUiReact.Tabs,
      { tabsTitle: labels.order_by },
      _react2.default.createElement(
        _wfpWssUiReact.Tab,
        { tabLabel: labels.az },
        _react2.default.createElement(
          'div',
          { className: 'wfp-form-list--az' },
          _react2.default.createElement(GridHeading, { className: 'fa-align-left', headingText: labels.all_forms_az }),
          _react2.default.createElement(Grid, { content_list: formslist_by_az })
        )
      ),
      _react2.default.createElement(
        _wfpWssUiReact.Tab,
        { tabLabel: labels.topics },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(GridHeading, { className: 'fa-align-left', headingText: labels.all_forms_topic }),
          _react2.default.createElement(Grid, { content_list: formslist_by_topics })
        )
      )
    )
  );
};

PageCreate.propTypes = {
  className: _propTypes2.default.string
};

exports.default = PageCreate;

/***/ })

},[244]);