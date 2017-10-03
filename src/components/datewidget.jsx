import React from 'react';
import PropTypes from 'prop-types';

export default class DateWidget extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      name: props.name,
      label: props.label
    };
    this.onDateChange = this.onDateChange.bind(this);
  };

  onDateChange(e) {
    this.props.handleChange(e.target.value);
    this.setState({value: e.target.value});


  };
  render() {

    var isRequired = '';
    if (this.props.required) {
      isRequired = <span className="required-symbol">*</span>;
    }
    return (
      <div className="wfp-u-1-3 wfp-box--flat">
        <label><span htmlFor={this.state.name}>{this.state.label}</span>
          {isRequired}</label>
        <input type="date" name={this.state.name} value={this.props.value} onChange={this.onDateChange}/>
      </div>
    )
  }
};


DateWidget.propTypes = {
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string,
  label: PropTypes.string,
  required: PropTypes.bool
};

DateWidget.defaultProps = {
  label: "",
  required:false
};
