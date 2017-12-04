import React from 'react';
import classNames from 'classnames';
import InlineError from './inlineError';
import Label from './label';
import Select from 'react-select';
import PropTypes from 'prop-types';

import 'react-dates/initialize';

import { SingleDatePicker } from 'react-dates';
import { START_DATE, END_DATE} from 'react-dates/constants';

class StaffSelect extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: null
    };
  }

  handleChange = (date) => {
    this.setState({ date });
    if (date) {
      this.props.input.onChange(date.format("YYYY-MM-DD"));
    }
  }

  render () {
    const { input, label, type, loadOptions, meta: { touched, error } } = this.props;
    return (
      <InlineError {...this.props}>
        <div className="wfp-form--date-picker">
          <Label>{label}</Label>
          <SingleDatePicker
            date={this.state.date}
            focused={this.state.focused}
            hideKeyboardShortcutsPanel= {true}
            numberOfMonths={1}
            onDateChange={this.handleChange}
            onFocusChange={({ focused }) => this.setState({ focused })}
          />
          <input
            {...input}
            placeholder={label}
            type="hidden"
          />
        </div>
      </InlineError>
    )
  }
};

StaffSelect.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  type: PropTypes.string,
  loadOptions: PropTypes.func,
  meta: PropTypes.object
};

export default StaffSelect;
