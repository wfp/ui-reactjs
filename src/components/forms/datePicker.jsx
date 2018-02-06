import React, { Component } from "react";
import InlineError from './inlineError';
import Label from './label';
import Select from 'react-select';
import PropTypes from 'prop-types';
import moment from 'moment';
import 'react-dates/initialize';

import { START_DATE, END_DATE} from 'react-dates/constants';
import "react-dates/initialize";
import { SingleDatePicker } from "react-dates";

class DatePicker extends Component {
  state = { focused: null };
  handleFocusChange = ({ focused }) => this.setState({ focused });

  render() {
    const { disabled, meta: { error, touched }, input: { value = null, onChange } } = this.props;
    const { focused = null } = this.state;

    return (
       <InlineError {...this.props}>
        <Label {...this.props} />
        <div className="wfp-form--date-picker">
          <SingleDatePicker
            date={value}
            onDateChange={onChange}
            disabled={disabled}
            focused={focused}
            hideKeyboardShortcutsPanel
            numberOfMonths={1}
            onFocusChange={this.handleFocusChange}
            id="date"
            placeholder="date"
          />
        </div>
      </InlineError>
    );
  }
}

export default DatePicker;