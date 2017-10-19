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
    this.setState({ value: e.target.value });

  };
  render() {

    var isRequired = '';
    if (this.props.required) {
      isRequired = <span className="required-symbol">*</span>;
    }
    return (
      <div className={this.props.customGridClass + " wfp-box--flat"}>
        <label>
          <span htmlFor={this.state.name}>{this.state.label}</span>
          {isRequired}</label>
        <input
          name={this.state.name}
          onChange={this.onDateChange}
          type="date"
          value={this.props.value}
        />
      </div>
    );
  }
};

DateWidget.propTypes = {
  customGridClass: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  name: PropTypes.string,
  required: PropTypes.bool
};

DateWidget.defaultProps = {
  customGridClass: "wfp-u-1-3",
  label: "",
  required: false
};
