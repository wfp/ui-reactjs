import React from 'react';

import 'react-dates/initialize';

import { DateRangePicker } from 'react-dates';
import { START_DATE, END_DATE} from 'react-dates/constants';

class DateRangePickerWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focusedInput: null,
    };
  }

  handleDatesChange = (dates) => {
    const startField = this.props[this.props.startDateFieldName];
    const endField = this.props[this.props.endDateFieldName];
    startField.input.onChange(dates.startDate);
    endField.input.onChange(dates.endDate);
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

  render() {
    const startDate = this.props[this.props.startDateFieldName].input.value;
    const endDate = this.props[this.props.endDateFieldName].input.value;

    return (
      <span>
      <label className='DateRangePickerInput_label'>From</label> 
      <DateRangePicker
        endDate={endDate}
        endDatePlaceholderText="To"
        startDate={startDate}
        startDatePlaceholderText="From"
        focusedInput={this.state.focusedInput || null}
        onDatesChange={this.handleDatesChange}
        onFocusChange={this.handleFocusChange}
        customArrowIcon={<label className='DateRangePickerInput_label to'>To</label>}
        hideKeyboardShortcutsPanel= {true}
        isOutsideRange = {this.props.isOutsideRange}
      /></span>
    );
  }
}
export default DateRangePickerWrapper;