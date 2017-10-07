import classnames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

export default class TableActionButton extends React.Component {

  constructor(props) {

    super(props);
    this.state = {
      type: this.props.type
    };
  }

  render() {
    let classes = classnames('wfp-btn btn-small xsmall modal-trigger', {
      'wfp-btn--primary': this.props.type === 'primary',
      'wfp-btn--secondary': this.props.type === 'secondary',
      'wfp-btn--tertiary': this.props.type === 'tertiary',
    });
    return (
      <button className={classes}>
        <span>{this.props.action}</span>
      </button>
    );
  }
}

TableActionButton.propTypes = {
  action: PropTypes.string.isRequired,
  type: PropTypes.string
};
TableActionButton.defaultProps = {
  action: 'Approve',
  type: 'primary'
};
