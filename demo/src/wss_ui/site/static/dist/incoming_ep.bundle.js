webpackJsonp([2],{

/***/ 241:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(33);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(57);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _incoming = __webpack_require__(242);

var _incoming2 = _interopRequireDefault(_incoming);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {

  var incoming_requests = function incoming_requests() {

    var urls = {};

    var setup = function setup() {
      _reactDom2.default.render(_react2.default.createElement(_incoming2.default, null), document.getElementById('incoming'));
    };

    return { urls: urls, setup: setup };
  };

  if (!window.pagecreate) {
    window.incoming_requests = incoming_requests();
  }
})();

/***/ }),

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(33);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(74);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import {
//   CommonLinksHeader,
//   Header,
//   LinkMenuItem,
//   SearchWidget,
//   UserMenuWidget
// } from "wfp-wss-ui-react";


var WSSIncomingRequests = function WSSIncomingRequests(props) {
  return _react2.default.createElement(
    'div',
    { className: 'content' },
    _react2.default.createElement(
      'ul',
      { className: 'wfp--breadcrumbs' },
      _react2.default.createElement(
        'li',
        { className: 'wfp--breadcrumbs--home wfp--breadcrumbs--step' },
        _react2.default.createElement(
          'a',
          { href: '/' },
          _react2.default.createElement('i', { className: 'fa fa-fw fa-home' }),
          _react2.default.createElement('span', { className: 'fill-data', 'data-content': 'labels.home' })
        )
      ),
      _react2.default.createElement(
        'li',
        { className: 'wfp--breadcrumbs--step' },
        _react2.default.createElement('span', { className: 'fill-data', 'data-content': 'labels.incoming_requests' })
      )
    ),
    _react2.default.createElement(
      'section',
      null,
      _react2.default.createElement(
        'h2',
        null,
        _react2.default.createElement('span', { className: 'fill-data', 'data-content': 'labels.incoming_requests' })
      ),
      _react2.default.createElement(
        'div',
        { className: 'wfp-filter closed' },
        _react2.default.createElement(
          'div',
          { className: 'wfp-filter--closed' },
          _react2.default.createElement(
            'div',
            { className: 'accordion-head' },
            _react2.default.createElement(
              'a',
              null,
              _react2.default.createElement('span', { className: 'title fill-data', 'data-content': 'labels.show_filters' }),
              _react2.default.createElement(
                'span',
                { className: 'pull-right' },
                _react2.default.createElement('i', { className: 'fa fa-fw fa-chevron-down' })
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'wfp-filter--open' },
          _react2.default.createElement(
            'div',
            { className: 'accordion-head' },
            _react2.default.createElement(
              'a',
              null,
              _react2.default.createElement('span', { className: 'title fill-data', 'data-content': 'labels.hide_filters' }),
              _react2.default.createElement(
                'span',
                { className: 'pull-right' },
                _react2.default.createElement('i', { className: 'fa fa-fw fa-chevron-up' })
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'wfp-form--stacked filter_container' },
            _react2.default.createElement(
              'form',
              { className: 'font-medium' },
              _react2.default.createElement(
                'div',
                { className: 'wfp-grid' },
                _react2.default.createElement(
                  'div',
                  { className: 'wfp-u-1 wfp-u-md-1-2 wfp-box--flat' },
                  _react2.default.createElement('label', { className: 'fill-data', 'for': 'form-name', 'data-content': 'labels.form' }),
                  _react2.default.createElement(
                    'select',
                    { id: 'form-name' },
                    _react2.default.createElement(
                      'option',
                      { value: '0', selected: true },
                      'All form types'
                    ),
                    _react2.default.createElement(
                      'option',
                      { disabled: true },
                      '\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500'
                    ),
                    _react2.default.createElement(
                      'optgroup',
                      { label: 'Filter by form type' },
                      _react2.default.createElement(
                        'option',
                        { value: '1' },
                        '[HR044] Certificate of attendance and statement of school expenditures'
                      ),
                      _react2.default.createElement(
                        'option',
                        { value: '2' },
                        '[HR044] Leave Application'
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'wfp-u-1 wfp-u-md-1-2 wfp-box--flat' },
                  _react2.default.createElement('label', { className: 'fill-data', 'for': 'status', 'data-content': 'labels.status' }),
                  _react2.default.createElement(
                    'select',
                    { id: 'status' },
                    _react2.default.createElement(
                      'option',
                      { value: '0', selected: '' },
                      'All status'
                    ),
                    _react2.default.createElement(
                      'option',
                      { disabled: true },
                      '\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500'
                    ),
                    _react2.default.createElement(
                      'optgroup',
                      { label: 'Filter by status' },
                      _react2.default.createElement(
                        'option',
                        { value: '1' },
                        'Saved draft'
                      ),
                      _react2.default.createElement(
                        'option',
                        { value: '2' },
                        'Submitted'
                      ),
                      _react2.default.createElement(
                        'option',
                        { value: '3' },
                        'Supervisor acknowledge'
                      ),
                      _react2.default.createElement(
                        'option',
                        { value: '4' },
                        'Approved'
                      ),
                      _react2.default.createElement(
                        'option',
                        { value: '5' },
                        'Sent back'
                      ),
                      _react2.default.createElement(
                        'option',
                        { value: '6' },
                        'Rejected'
                      )
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'wfp-grid' },
                _react2.default.createElement(
                  'div',
                  { className: 'wfp-u-1 wfp-u-md-1-2 wfp-box--flat' },
                  _react2.default.createElement(
                    'div',
                    { className: 'wfp-grid' },
                    _react2.default.createElement(
                      'div',
                      { className: 'wfp-u-1-3 wfp-box--flat' },
                      _react2.default.createElement('label', { className: 'fill-data', 'data-content': 'labels.creation_date' })
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'wfp-u-1-3 wfp-box--flat pl0' },
                      _react2.default.createElement(
                        'label',
                        null,
                        _react2.default.createElement('span', { className: 'fill-data', 'for': 'from-date', 'data-content': 'labels.from' }),
                        _react2.default.createElement(
                          'span',
                          {
                            className: 'required-symbol' },
                          '*'
                        )
                      ),
                      _react2.default.createElement('input', { type: 'date', name: 'from-date' })
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'wfp-u-1-3 wfp-box--flat' },
                      _react2.default.createElement(
                        'label',
                        null,
                        _react2.default.createElement('span', { className: 'fill-data', 'for': 'to-date', 'data-content': 'labels.to' }),
                        _react2.default.createElement(
                          'span',
                          {
                            className: 'required-symbol' },
                          '*'
                        )
                      ),
                      _react2.default.createElement('input', { type: 'date', name: 'to-date' })
                    )
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'wfp-u-1 wfp-u-md-1-2 wfp-box--flat' },
                  _react2.default.createElement('label', { className: 'fill-data', 'for': 'officer-name', 'data-content': 'labels.officer' }),
                  _react2.default.createElement(
                    'select',
                    { id: 'officer-name' },
                    _react2.default.createElement(
                      'optgroup',
                      { label: 'Filter by officer name' },
                      _react2.default.createElement(
                        'option',
                        { value: '0', selected: '' },
                        'From everyone'
                      ),
                      _react2.default.createElement(
                        'option',
                        { disabled: true },
                        '\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500'
                      ),
                      _react2.default.createElement(
                        'option',
                        { value: '1' },
                        'Mario ROSSI'
                      ),
                      _react2.default.createElement(
                        'option',
                        { value: '2' },
                        'John SMITH'
                      )
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'wfp-form--actions' },
                _react2.default.createElement(
                  'button',
                  { className: 'wfp-btn wfp-btn--ghost btn-small' },
                  'Clear'
                ),
                _react2.default.createElement(
                  'button',
                  { className: 'wfp-btn wfp-btn--primary btn-medium' },
                  'Filter'
                )
              )
            )
          )
        )
      ),
      _react2.default.createElement(
        'table',
        { rules: 'group', className: 'wfp-table' },
        _react2.default.createElement(
          'thead',
          null,
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'th',
              null,
              _react2.default.createElement('span', { className: 'fill-data', 'data-content': 'labels.requestor' }),
              ' ',
              _react2.default.createElement('i', { className: 'fa fa-fw fa-sort' })
            ),
            _react2.default.createElement(
              'th',
              null,
              _react2.default.createElement('span', { className: 'fill-data', 'data-content': 'labels.request' }),
              ' ',
              _react2.default.createElement('i', { className: 'fa fa-fw fa-sort' })
            ),
            _react2.default.createElement(
              'th',
              null,
              _react2.default.createElement('span', { className: 'fill-data', 'data-content': 'labels.history' })
            ),
            _react2.default.createElement(
              'th',
              null,
              _react2.default.createElement('span', { className: 'fill-data', 'data-content': 'labels.status' }),
              ' ',
              _react2.default.createElement('i', { className: 'fa fa-fw fa-sort' })
            ),
            _react2.default.createElement(
              'th',
              null,
              _react2.default.createElement('span', { className: 'fill-data', 'data-content': 'labels.details' })
            ),
            _react2.default.createElement(
              'th',
              { className: 'table_cols_actions' },
              _react2.default.createElement('span', { className: 'fill-data', 'data-content': 'labels.action' })
            )
          )
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
      _react2.default.createElement(
        'div',
        { className: 'wfp-pagination' },
        _react2.default.createElement(
          'ol',
          { className: 'pagination--wrapper' },
          _react2.default.createElement(
            'li',
            { className: 'pagination--item' },
            _react2.default.createElement(
              'a',
              { href: '#', className: 'pagination--btn' },
              'Previous'
            )
          ),
          _react2.default.createElement(
            'li',
            { className: 'pagination--item active' },
            _react2.default.createElement(
              'span',
              { className: 'pagination--btn' },
              '1'
            )
          ),
          _react2.default.createElement(
            'li',
            { className: 'pagination--item' },
            _react2.default.createElement(
              'a',
              { href: '#', className: 'pagination--btn' },
              '2'
            )
          ),
          _react2.default.createElement(
            'li',
            { className: 'pagination--item' },
            _react2.default.createElement(
              'a',
              { href: '#', className: 'pagination--btn' },
              '3'
            )
          ),
          _react2.default.createElement(
            'li',
            { className: 'pagination--item ellipsis' },
            _react2.default.createElement(
              'span',
              { className: 'pagination--btn ' },
              '\u2026'
            )
          ),
          _react2.default.createElement(
            'li',
            { className: 'pagination--item' },
            _react2.default.createElement(
              'a',
              { href: '#', className: 'pagination--btn' },
              'Next'
            )
          )
        )
      )
    )
  );
};

WSSIncomingRequests.propTypes = {
  className: _propTypes2.default.string
};

exports.default = WSSIncomingRequests;

/***/ })

},[241]);