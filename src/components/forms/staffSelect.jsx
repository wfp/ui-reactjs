import React from 'react';
import classNames from 'classnames';
import InlineError from './inlineError';
import Label from './label';
import Select from 'react-select';
import PropTypes from 'prop-types';

const StaffSelectValue = (props) => {
  console.log("dssss");
  return (
    <div
      className="Select-value userselect__value"
    >
      <div className="Select-value-label">
        <div className="userselect__value__text">{props.children}</div>
        <div className="userselect__value__extended">

          <img src={`http://gtd.wfp.org/media/pictures/auto/${props.value.email}.jpg`} />
          Index: {props.value.indexno}
          <span>{props.value.email}</span>
        </div>
      </div>
    </div>
  );
};

StaffSelectValue.propTypes = {
  children: PropTypes.node,
  value: PropTypes.object
};

class StaffSelect extends React.Component {

  constructor(props) {
    super(props);
     this.state = {
      value: this.props.defaultValue ? this.props.defaultValue : null
    }
  }

  handleChange = (value) => {
    this.setState({ value });
    console.log(value);
    console.log('Selected:', value);
    if (value.indexno) {
      this.props.input.onChange(value.indexno);
    }
  }

  render () {
    const { input, label, type, loadOptions, meta: { touched, error } } = this.props;
    return (
      <InlineError {...this.props}>
        <Label>{label}</Label>
        <div className="userselect__wrapper">
          <Select.Async
            autoFocus
            className="userselect__select"
            id="state-select"
            labelKey="text"
            loadOptions={loadOptions}  
            name="selected-state" 
            onChange={this.handleChange} 
            placeholder="Select staff by last name"
            ref="stateSelect"
            searchable={true}
            value={this.state.value}
            valueComponent={StaffSelectValue}       
            valueKey="indexno"
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
