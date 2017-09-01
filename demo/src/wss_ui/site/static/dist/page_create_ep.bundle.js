webpackJsonp([0],{

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(21);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(33);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _page_create = __webpack_require__(244);

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

/***/ 244:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(21);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(33);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = __webpack_require__(62);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _wfpWssUiReact = __webpack_require__(63);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PageCreate = function PageCreate(props) {
  return _react2.default.createElement(
    'div',
    { className: 'content' },
    _react2.default.createElement(_wfpWssUiReact.Breadcrumbs, { home: 'labels.home', nextLabels: ["labels.create_a_request"], nextLinks: [] }),
    _react2.default.createElement(
      'section',
      null,
      _react2.default.createElement(
        'h3',
        null,
        _react2.default.createElement('i', { className: 'fa fa-fw fa-clock-o' }),
        _react2.default.createElement('span', { className: 'fill-data',
          'data-content': 'labels.latest_forms_used' })
      ),
      _react2.default.createElement(
        'div',
        { className: 'wfp-grid' },
        _react2.default.createElement(
          'div',
          { className: 'fill-data-list wfp-grid wfp-u-1-1', 'data-content': 'latest_forms' },
          _react2.default.createElement(
            'div',
            { className: 'wfp-u-1-2 wfp-grid wfp-form-description template' },
            _react2.default.createElement('div', { className: 'wfp-u-1-12' }),
            _react2.default.createElement(
              'div',
              { className: 'wfp-u-10-12' },
              _react2.default.createElement('div', { className: 'heading fill-data-list-item', 'data-content': 'heading' }),
              _react2.default.createElement(
                'div',
                { className: 'title' },
                _react2.default.createElement(
                  'a',
                  { className: 'fill-data-list-item menuitem', 'data-target': 'content',
                    'data-action': 'page_my', 'data-content': 'ident', 'data-fill-attribute': 'data-action',
                    href: '#' },
                  _react2.default.createElement('span', { className: 'fill-data-list-item', 'data-content': 'name' })
                )
              ),
              _react2.default.createElement('div', { className: 'description fill-data-list-item', 'data-content': 'description' })
            )
          )
        )
      )
    ),
    _react2.default.createElement(
      'section',
      null,
      _react2.default.createElement(
        'div',
        { className: 'wfp-form-list selected-az' },
        _react2.default.createElement(
          'div',
          { className: 'tab-selector' },
          _react2.default.createElement('span', { className: 'fill-data', 'data-content': 'labels.order_by' }),
          _react2.default.createElement(
            'a',
            { href: '#', className: 'active' },
            _react2.default.createElement('span', {
              className: 'fill-data', 'data-content': 'labels.az' })
          ),
          ' | ',
          _react2.default.createElement(
            'a',
            { href: '#' },
            _react2.default.createElement('span', { className: 'fill-data',
              'data-content': 'labels.topics' })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'wfp-form-list--az' },
          _react2.default.createElement(
            'h3',
            null,
            _react2.default.createElement('i', { className: 'fa fa-fw fa-align-left' }),
            _react2.default.createElement('span', { className: 'fill-data',
              'data-content': 'labels.all_forms_az' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'wfp-grid' },
            _react2.default.createElement(
              'div',
              { className: 'fill-data-list wfp-grid wfp-u-1-1', 'data-content': 'formslist_by_az' },
              _react2.default.createElement(
                'div',
                { className: 'wfp-u-1-2 wfp-grid wfp-form-description template' },
                _react2.default.createElement('div', { className: 'wfp-u-1-12' }),
                _react2.default.createElement(
                  'div',
                  { className: 'wfp-u-10-12' },
                  _react2.default.createElement('div', { className: 'heading fill-data-list-item', 'data-content': 'heading' }),
                  _react2.default.createElement(
                    'div',
                    { className: 'title' },
                    _react2.default.createElement(
                      'a',
                      { className: 'fill-data-list-item menuitem', 'data-target': 'content',
                        'data-action': 'page_my', 'data-content': 'ident',
                        'data-fill-attribute': 'data-action', href: '#' },
                      _react2.default.createElement('span', {
                        className: 'fill-data-list-item', 'data-content': 'name' })
                    )
                  ),
                  _react2.default.createElement('div', { className: 'description fill-data-list-item', 'data-content': 'description' })
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'wfp-form-list--topics' },
          _react2.default.createElement(
            'h3',
            null,
            _react2.default.createElement('i', { className: 'fa fa-fw fa-align-left' }),
            _react2.default.createElement('span', { className: 'fill-data',
              'data-content': 'labels.all_forms_topic' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'wfp-grid' },
            _react2.default.createElement(
              'div',
              { className: 'fill-data-list wfp-grid wfp-u-1-1', 'data-content': 'formslist_by_topics' },
              _react2.default.createElement(
                'div',
                { className: 'wfp-u-1-2 wfp-grid wfp-form-description template' },
                _react2.default.createElement('div', { className: 'wfp-u-1-12' }),
                _react2.default.createElement(
                  'div',
                  { className: 'wfp-u-10-12' },
                  _react2.default.createElement('div', { className: 'heading fill-data-list-item', 'data-content': 'heading' }),
                  _react2.default.createElement(
                    'div',
                    { className: 'title' },
                    _react2.default.createElement(
                      'a',
                      { className: 'fill-data-list-item menuitem', 'data-target': 'content',
                        'data-action': 'page_my', 'data-content': 'ident',
                        'data-fill-attribute': 'data-action', href: '#' },
                      _react2.default.createElement('span', {
                        className: 'fill-data-list-item', 'data-content': 'name' })
                    )
                  ),
                  _react2.default.createElement('div', { className: 'description fill-data-list-item', 'data-content': 'description' })
                )
              )
            )
          )
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

},[243]);