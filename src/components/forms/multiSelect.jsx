import React from 'react';
import classNames from 'classnames';
import InlineError from './inlineError';
import Label from './label';
import Select from 'react-select';
import PropTypes from 'prop-types';

class MultiSelect extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: null
    };
  }

  handleChange = (value) => {
    this.setState({ value });
    console.log('Selected:', value);
    if (value) {
      this.props.input.onChange(value);
    }
  }

  render () {
    const { input, label, multi, placeholder, simpleValue, type, valueKey, labelKey, options, meta: { touched, error } } = this.props;
    return (
      <InlineError {...this.props}>
        <Label>{label}</Label>
        <div className="userselect__wrapper">
          <Select
            autoFocus
            className="userselect__select"
            id="state-select"
            valueKey={valueKey ? valueKey : 'role_desc'}
            labelKey={labelKey ? labelKey : 'role_desc'}
            options={options}
            multi={multi ? multi : true}
            name="selected-state" 
            onChange={this.handleChange} 
            onBlur={() => {
              input.onBlur(input.value)
            }}
            placeholder={placeholder ? placeholder : 'Select Values'}
            ref="stateSelect"
            searchable={true}
            simpleValue={simpleValue ? simpleValue : true}
            value={this.state.value}
          />
          <input
            {...input}
            placeholder={label}
            type="hidden"
          />
        </div>
      </InlineError>
    );
  }
};

MultiSelect.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  meta: PropTypes.object,
  options: PropTypes.array,
  placeholder: PropTypes.string,
  simpleValue: PropTypes.bool,
  type: PropTypes.string
};

export default MultiSelect;
