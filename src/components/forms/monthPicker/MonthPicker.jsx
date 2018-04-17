import React, {Component} from "react";
import PropTypes from "prop-types";
import Picker from "react-month-picker";
import InlineError from '../inlineError';
import moment from 'moment';
import Label from '../label';

class MonthPicker extends Component {
  handleAMonthChange = (year, month) => {
    const {
      input: {onChange}
    } = this.props;
    const momentValue = moment.utc().set({year, month: month - 1}).startOf('month');
    onChange(momentValue)
  };

  handleClickMonthBox = () => {
    this.container.show();
  };

  prepareValues = (value, displayFormat) => {
    let displayValue, mvalue;
    if (value) {
      const momentValue = moment(value);
      displayValue = momentValue.format(displayFormat);
      mvalue = {
        month: momentValue.month() + 1,
        year: momentValue.year(),
      }
    } else {
      displayValue = "";
      mvalue = {
        month: null,
        year: moment().year(),
      }
    }
    return {displayValue, mvalue}
  }

  render() {
    const {
      id, disabled, readOnly, displayFormat, minYear, maxYear, isOutsideRange,
      input: {
        value = null
      }
    } = this.props;

    const {displayValue, mvalue} = this.prepareValues(value, displayFormat);

    return (
      <InlineError {...this.props}>
        <Label {...this.props} />
        <div className="wfp-form--month-picker">
          {readOnly === true ? (
            <div className="">{displayValue}</div>
          ) : (
            <Picker
              ref={ref => this.container = ref}
              years={{min: minYear, max: maxYear}}
              value={mvalue}
              onChange={this.handleAMonthChange}
              isOutsideRange={isOutsideRange}
            >
              <input
                onClick={this.handleClickMonthBox}
                value={displayValue}
                disabled={disabled}
                type="text"
                id={id}
                placeholder="Select month"
              />
            </Picker>
          )}
        </div>
      </InlineError>
    );
  }
}

MonthPicker.propTypes = {

};

MonthPicker.defaultProps = {
  displayFormat: 'MMM. YYYY',
  id: 'month',
  maxYear: 2100,
  minYear: 1971
};

export default MonthPicker;
