import classnames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

export default class WfpActionButton extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      type: this.props.type
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onActionClick(this.props.action);
    if (typeof this.props.closeModal === "function")
      this.props.closeModal();
  }

  render() {
    let classes = classnames('wfp-btn modal-trigger', {
      'wfp-btn--primary': this.props.type === 'primary',
      'wfp-btn--secondary': this.props.type === 'secondary',
      'wfp-btn--tertiary': this.props.type === 'tertiary'
    });
    return (
      <button className={classes} onClick={this.props.onClick ? this.props.onClick :  this.handleClick}>
        <span>{this.props.label}</span>
      </button>
    );
  }
}

WfpActionButton.propTypes = {
  label: PropTypes.string.isRequired,
  action: PropTypes.string.isRequired,
  type: PropTypes.string
};

WfpActionButton.defaultProps = {
  type: 'primary'
};
