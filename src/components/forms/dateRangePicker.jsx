import React, { Component } from 'react';

import 'react-dates/initialize';
import moment from 'moment';

import { DateRangePicker } from 'react-dates';
import InlineError from './inlineError';
import Label from './label';
import { START_DATE, END_DATE } from 'react-dates/constants';


//import 'react-dates/initialize'
//import { DateRangePicker } from 'react-dates'
//import 'react-dates/lib/css/_datepicker.css'



class DateRangePickerEl extends Component {
  /*state = { focusedInput: null, startDate: null, endDate: null }


  this.state = {
      focusedInput: props.autoFocusEndDate ? END_DATE : START_DATE,
      startDate: props.initialStartDate,
      endDate: props.initialEndDate,
    };*/


  constructor(props) {
    super(props);

    this.state = {
      focusedInput: null,
      startDate: null,
      endDate: null,
    };
  }


  handleFocusChange = focusedInput => this.setState({ focusedInput })


  handleDatesChange = (dates) => {
    console.log("Close fired", dates, this.state);
    if (dates.startDate) {
      const startField = this.props[this.props.names[0]];
      startField.input.onChange(dates.startDate.format("YYYY-MM-DD"));
    }

    if (dates.endDate) {
      const endField = this.props[this.props.names[1]];
      endField.input.onChange(dates.endDate.format("YYYY-MM-DD"));
    }

    //console.log("Set Dates",dates.startDate.format("YYYY-MM-DD"), dates.endDate.format("YYYY-MM-DD"));
  }

  componentWillReceiveProps(newProps) {
    console.log(newProps);
    const startFieldName = this.props.names[0];
    if (newProps[startFieldName].input.value && newProps[startFieldName].input.value !== this.props[startFieldName].input.value) {
      const realDate = moment(newProps[startFieldName].input.value);
      this.setState({ startDate: realDate });
    }
    const endFieldName = this.props.names[1];
    if (newProps[endFieldName].input.value && newProps[endFieldName].input.value !== this.props[endFieldName].input.value) {
      const realDate = moment(newProps[endFieldName].input.value);
      this.setState({ endDate: realDate });
    }
  }

  render () {

    const from = this.props[this.props.names[0]];
    const to = this.props[this.props.names[1]];

    //const { meta: { error, touched }, input: { value: { startDate = null, endDate = null }, onChange } } = this.this.props

    const onchangeb = () => {
      return null;
    }

    const { focusedInput = null } = this.state
    //from.input.value
    return (
      <InlineError {...this.props[this.props.names[0]]}>
        <Label {...this.props} />
        <label className='DateRangePickerInput_label'>From</label> 
        <DateRangePicker
          customArrowIcon={<label className='DateRangePickerInput_label to'>To</label>}
          endDateId='endDate'
          endDate={this.state.endDate}
          endDatePlaceholderText='End Date'
          focusedInput={focusedInput}
          hideKeyboardShortcutsPanel
          onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
          onFocusChange={this.handleFocusChange}
          onClose={this.handleDatesChange}
          startDateId='startDate'
          startDate={this.state.startDate}
          startDatePlaceholderText='Start Date'
          disabled={this.props.disabled}
          readOnly={this.props.readOnly}
        />
      </InlineError>
    )
  }
}

export default DateRangePickerEl;

