import React, { Component } from 'react';

import 'react-dates/initialize';
import moment from 'moment';

import { DateRangePicker } from 'react-dates';
import InlineError from './inlineError';
import Label from './label';
import { START_DATE, END_DATE } from 'react-dates/constants';

class DateRangePickerEl extends Component {

  constructor(props) {
    super(props);

    this.state = {
      focusedInput: null,
      startDate: null,
      endDate: null,
    };
  }

  handleFocusChange = focusedInput => this.setState({ focusedInput });

  /* Update Redux-Forms values */
  handleDatesChange = () => {
    if (this.state.startDate) {
      const startField = this.props[this.props.names[0]];
      startField.input.onChange(this.state.startDate.format("YYYY-MM-DD"));
    }

    if (this.state.endDate) {
      const endField = this.props[this.props.names[1]];
      endField.input.onChange(this.state.endDate.format("YYYY-MM-DD"));
    }

    this.setState({ focusedInput: null });
  }

  /* Get initial values */
  componentWillMount() {
    const startFieldName = this.props.names[0];
    const realDateStart = moment(this.props[startFieldName].input.value);
    this.setState({ startDate: realDateStart });

    const endFieldName = this.props.names[1];
    const realDateEnd = moment(this.props[endFieldName].input.value);
    this.setState({ endDate: realDateEnd });
  }

  /* Update if redux-forms is sending new values */
  componentWillReceiveProps(newProps) {
    const startFieldName = this.props.names[0];

    if (newProps[startFieldName].input.value && newProps[startFieldName].input.value !== this.props[startFieldName].input.value) {
      const realDateStart = moment(newProps[startFieldName].input.value);
      this.setState({ startDate: realDateStart });
    }
    const endFieldName = this.props.names[1];
    if (newProps[endFieldName].input.value && newProps[endFieldName].input.value !== this.props[endFieldName].input.value) {
      const realDateEnd = moment(newProps[endFieldName].input.value);
      this.setState({ endDate: realDateEnd });
    }
  }

  render () {

    const { focusedInput = null } = this.state;

    return (
      <InlineError {...this.props[this.props.names[0]]} wrapper={this.props.wrapper}>
        <Label {...this.props} />
        <label className='DateRangePickerInput_label'>From</label> 
        <DateRangePicker
          customArrowIcon={<label className='DateRangePickerInput_label to'>To</label>}
          endDateId='endDate'
          endDate={this.state.endDate}
          endDatePlaceholderText='End Date'
          displayFormat="DD/MM/YYYY"
          focusedInput={focusedInput}
          hideKeyboardShortcutsPanel
          keepOpenOnDateSelect
          onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
          onFocusChange={this.handleFocusChange}
          startDateId='startDate'
          startDate={this.state.startDate}
          startDatePlaceholderText='Start Date'
          disabled={this.props.disabled}
          readOnly={this.props.readOnly}
          renderCalendarInfo={() => (
            <div className="DateRangePickerInput_info">
              <button onClick={this.handleDatesChange} className="DateRangePickerInput_apply wfp-btn">Apply</button>
            </div>)}
        />
      </InlineError>
    )
  }
}

export default DateRangePickerEl;

