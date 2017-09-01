webpackJsonp([0],{

/***/ 244:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(26);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(45);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _incoming = __webpack_require__(245);

var _incoming2 = _interopRequireDefault(_incoming);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {

  var incoming_requests = function incoming_requests() {

    var urls = {};

    var setup = function setup(urlsContextData) {
      urls = urlsContextData;
      _reactDom2.default.render(_react2.default.createElement(_incoming2.default, { urls: urls }), document.getElementById('incoming'));
    };

    return { urls: urls, setup: setup };
  };

  if (!window.pagecreate) {
    window.incoming_requests = incoming_requests();
  }
})();

/***/ }),

/***/ 245:
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

var Table = function Table(props) {
  return _react2.default.createElement(
    'table',
    { className: 'wfp-table' },
    props.children
  );
};

var TableHeader = function TableHeader(props) {
  return _react2.default.createElement(
    'thead',
    null,
    _react2.default.createElement(
      'tr',
      null,
      props.children
    )
  );
};

var TableHeaderItem = function TableHeaderItem(props) {
  return _react2.default.createElement(
    'th',
    null,
    _react2.default.createElement('span', { className: props.className, 'data-content': props.label }),
    _react2.default.createElement('i', { className: 'fa fa-fw fa-sort' })
  );
};

var WSSIncomingRequests = function WSSIncomingRequests(props) {
  return _react2.default.createElement(
    'div',
    { className: 'content' },
    _react2.default.createElement(_wfpWssUiReact.Breadcrumbs, { home: 'labels.home', nextLabels: ["labels.incoming_requests"], nextLinks: [props.urls.incoming] }),
    _react2.default.createElement(
      'section',
      null,
      _react2.default.createElement(
        'h2',
        null,
        _react2.default.createElement('span', { className: 'fill-data', 'data-content': 'labels.incoming_requests' })
      ),
      _react2.default.createElement(_wfpWssUiReact.FilterPanel, null),
      _react2.default.createElement(
        Table,
        null,
        _react2.default.createElement(
          TableHeader,
          null,
          _react2.default.createElement(TableHeaderItem, { className: 'fill-data', label: 'labels.requestor' }),
          _react2.default.createElement(TableHeaderItem, { className: 'fill-data', label: 'labels.request' }),
          _react2.default.createElement(TableHeaderItem, { className: 'fill-data', label: 'labels.history' }),
          _react2.default.createElement(TableHeaderItem, { className: 'fill-data', label: 'labels.status' }),
          _react2.default.createElement(TableHeaderItem, { className: 'fill-data', label: 'labels.details' }),
          _react2.default.createElement(TableHeaderItem, { className: 'table_cols_actions', label: 'labels.action' })
        ),
        _react2.default.createElement(
          'tbody',
          { className: 'fill-data-list', 'data-content': 'requests_awaiting' },
          _react2.default.createElement(
            'tr',
            { className: 'template' },
            _react2.default.createElement('td', { className: 'fill-data-list-item', 'data-content': 'requestor' }),
            _react2.default.createElement(
              'td',
              null,
              _react2.default.createElement(
                'a',
                { href: '#' },
                _react2.default.createElement('div', { className: 'fill-data-list-item', 'data-content': 'request.type' }),
                _react2.default.createElement('div', { className: 'fill-data-list-item', 'data-content': 'request.id' })
              )
            ),
            _react2.default.createElement(
              'td',
              null,
              _react2.default.createElement(
                'ul',
                { className: 'fill-data-list-item', 'data-fill-mode': 'list', 'data-content': 'history' },
                _react2.default.createElement(
                  'li',
                  { className: 'template wfp-grid' },
                  _react2.default.createElement(
                    'div',
                    { className: 'wfp-u-5-6' },
                    _react2.default.createElement('span', { className: 'fill-data-list-item faint', 'data-content': 'date' }),
                    _react2.default.createElement('span', { className: 'fill-data-list-item', 'data-content': 'author' })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'wfp-u-1-6 fill-data-list-item message-box', 'data-fill-attribute': 'className',
                      'data-content': 'message' },
                    _react2.default.createElement(
                      'a',
                      { href: '#' },
                      _react2.default.createElement('i', { className: 'fa fa-fw fa-envelope' })
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              'td',
              null,
              _react2.default.createElement('div', { className: 'fill-data-list-item status-widget',
                'data-fill-attribute': 'data-steps|data-done|data-state|data-require_action|data-require_action_msg',
                'data-content': 'status.steps|status.current|status.state|status.require_action|status.require_action_msg' })
            ),
            _react2.default.createElement(
              'td',
              null,
              _react2.default.createElement(
                'ul',
                { className: 'fill-data-list-item', 'data-fill-mode': 'list', 'data-content': 'details' },
                _react2.default.createElement(
                  'li',
                  { className: 'template' },
                  _react2.default.createElement('div', { className: 'fill-data-list-item', 'data-content': 'name' }),
                  _react2.default.createElement('div', { className: 'fill-data-list-item', 'data-content': 'value' })
                )
              )
            ),
            _react2.default.createElement(
              'td',
              null,
              _react2.default.createElement(
                'div',
                { className: 'inline-actions' },
                _react2.default.createElement(
                  'span',
                  { className: 'fill-data-list-item', 'data-fill-mode': 'list', 'data-content': 'actions' },
                  _react2.default.createElement(
                    'span',
                    { className: 'template' },
                    _react2.default.createElement(
                      'button',
                      { className: 'wfp-btn btn-small xsmall fill-data-list-item',
                        'data-fill-attribute': 'className', 'data-content': 'mode' },
                      _react2.default.createElement('span', {
                        className: ' fill-data-list-item', 'data-content': 'name' })
                    )
                  )
                ),
                _react2.default.createElement(
                  'span',
                  { className: 'fill-data-list-item', 'data-fill-mode': 'list', 'data-content': 'secondary_actions' },
                  _react2.default.createElement(
                    'button',
                    { className: 'wfp-btn xsmall other dropdown-trigger closed' },
                    _react2.default.createElement('i', {
                      className: 'fa fa-fw fa-chevron-down' })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'dropdown' },
                    _react2.default.createElement(
                      'ul',
                      { className: 'menu--group' },
                      _react2.default.createElement(
                        'div',
                        { className: 'template' },
                        _react2.default.createElement(
                          'li',
                          { className: 'menu--item ' },
                          _react2.default.createElement(
                            'a',
                            { className: '' },
                            _react2.default.createElement('span', { className: 'fill-data-list-item',
                              'data-content': 'name' })
                          )
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        )
      ),
      _react2.default.createElement(_wfpWssUiReact.Pages, null)
    )
  );
};

WSSIncomingRequests.propTypes = {
  className: _propTypes2.default.string
};

exports.default = WSSIncomingRequests;

/***/ })

},[244]);