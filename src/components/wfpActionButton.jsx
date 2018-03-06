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
    if (typeof this.props.closeModal === "function") {
      this.props.closeModal();
    }
  }

    render() {
        const {
            type, className, disabled,
            onClick, label, ...other
        } = props;
        let classes = classnames('wfp-btn modal-trigger', {
            'wfp-btn--primary': type === 'primary',
            'wfp-btn--secondary': type === 'secondary',
            'wfp-btn--tertiary': type === 'tertiary',
            'wfp-btn--negative': type === 'negative',
            [`${this.props.className}`]: className
        });
        return (
            <button
                disabled={disabled}
                className={classes}
                {...other}
                type="button"
                onClick={onClick ? onClick :  this.handleClick}
            >
                <span>{label}</span>
            </button>
        );
    }
}

WfpActionButton.propTypes = {
  action: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string
};

WfpActionButton.defaultProps = {
  type: 'primary'
};
