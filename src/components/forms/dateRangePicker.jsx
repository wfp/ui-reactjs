import React from 'react';

import 'react-dates/initialize';
import moment from 'moment';

import { DateRangePicker } from 'react-dates';
import InlineError from './inlineError';
import Label from './label';
import { START_DATE, END_DATE } from 'react-dates/constants';

class DateRangePickerWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focusedInput: null,
      focused: null,
      startDate: null,
      endDate: null
    };
  }

  handleDatesChange = (dates) => {
    console.log(dates);
    //if (dates.startDate) {
      const startField = this.props[this.props.startDateFieldName];
      startField.input.onChange(dates.startDate.format("YYYY-MM-DD"));
    //}
    //if (dates.endDate) {
      const endField = this.props[this.props.endDateFieldName];
      endField.input.onChange(dates.endDate.format("YYYY-MM-DD"));
      if (dates.endDate) {
        this.handleFocusChange('startDate');
      }
    //}
    //this.props.onDatesChange(dates);
  }

  handleFocusChange = (focusedInput) => {

    this.setState({ focusedInput: focusedInput });

    console.log("Handle Focus Change", focusedInput);

    //this.props.onFocusChange(focusedInput);

    if (focusedInput === START_DATE) {
      console.log("focus first");
      this.props[this.props.startDateFieldName].input.onFocus();
      return;
    }
    if (focusedInput === END_DATE) {
      console.log("focus last");
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
          displayFormat="DD/MM/YYYY"
          endDate={this.state.endDate}
          endDateId="end"
          endDatePlaceholderText="To"
          focusedInput={this.state.focusedInput || null}
          hideKeyboardShortcutsPanel
          isOutsideRange={this.props.isOutsideRange}
          onDatesChange={this.handleDatesChange}
          onFocusChange={this.handleFocusChange}
          keepOpenOnDateSelect
          startDate={this.state.startDate}
          startDateId="start"
          startDatePlaceholderText="From"
          renderCalendarInfo={(e) => {
            return (
              <div onClick>Hello</div>
            )
          }}
        />
      </span>
    );
  }
}

const DateRangePickerEl = ( props) => {
  return (
    <InlineError {...props[props.names[0]]}>
      <Label {...props} />
      <DateRangePickerWrapper
        startDateFieldName={props.names[0]}
        endDateFieldName={props.names[1]}
        {...props}
      />
    </InlineError>
  );
};

export default DateRangePickerEl;

