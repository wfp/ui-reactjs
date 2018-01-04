import React from 'react';

import 'react-dates/initialize';
import moment from 'moment';

import { DateRangePicker } from 'react-dates';
import InlineError from './inlineError';
import { START_DATE, END_DATE } from 'react-dates/constants';

class DateRangePickerWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focusedInput: null,
      startDate: null,
      endDate: null
    };
  }

  handleDatesChange = (dates) => {
    if (dates.startDate) {
      const startField = this.props[this.props.startDateFieldName];
      startField.input.onChange(dates.startDate.format("YYYY-MM-DD"));
    }
    if (dates.endDate) {
      const endField = this.props[this.props.endDateFieldName];
      endField.input.onChange(dates.endDate.format("YYYY-MM-DD"));
    }
    this.props.onDatesChange(dates);
  }

  handleFocusChange = (focusedInput) => {

    this.setState({ focusedInput: focusedInput });

    this.props.onFocusChange(focusedInput);

    if (focusedInput === START_DATE) {
      this.props[this.props.startDateFieldName].input.onFocus();
      return;
    }
    if (focusedInput === END_DATE) {
      this.props[this.props.endDateFieldName].input.onFocus();
      return;
    }
  }

  componentWillReceiveProps(newProps) {
    const startDate = moment(newProps[newProps.startDateFieldName].input.value);
    const endDate = moment(newProps[newProps.endDateFieldName].input.value);

    this.setState({ startDate: startDate, endDate: endDate });
  }

  render() {
    return (
      <span>
        <label className='DateRangePickerInput_label'>From</label> 
        <DateRangePicker
          customArrowIcon={<label className='DateRangePickerInput_label to'>To</label>}
          endDate={this.state.endDate}
          endDateId="end"
          endDatePlaceholderText="To"
          focusedInput={this.state.focusedInput || null}
          hideKeyboardShortcutsPanel
          isOutsideRange={this.props.isOutsideRange}
          onDatesChange={this.handleDatesChange}
          onFocusChange={this.handleFocusChange}
          startDate={this.state.startDate}
          startDateId="start"
          startDatePlaceholderText="From"
        />
      </span>
    );
  }
}

const DateRangePickerEl = (fields) => {
  return (
    <InlineError {...fields[fields.names[0]]}>
      <DateRangePickerWrapper
        startDateFieldName={fields.names[0]}
        endDateFieldName={fields.names[1]}
        {...fields}
      />
    </InlineError>
  );
};

export default DateRangePickerEl;

