import React from 'react';
import PropTypes from 'prop-types';

import { TableActionButton, TableDropdownMenu } from 'wfp-ui-reactjs';

export default class RequestAvailableActions extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      listIsVisible: false
    };
    this.toggleListVisibility = this.toggleListVisibility.bind(this);
    this.performAction = this.performAction.bind(this);
  }

  toggleListVisibility() {
    this.setState(prevState => ({
      listIsVisible: !prevState.listIsVisible
    }));
  }

  performAction() {
    this.setState({ listIsVisible: false });
  }

  render() {
    return (
      <div className="inline-actions action-cell">
        <span>
          <span className="template">
            <TableActionButton
              action={this.props.defaultAction || undefined}
              type={this.props.type || undefined}
              url={this.props.url || undefined}
            />
          </span>
        </span>
        {this.props.actions.length > 0 && (<TableDropdownMenu
          actions={this.props.actions}
          handleListVisibility={this.toggleListVisibility}
          listIsVisible={this.state.listIsVisible}
          title={this.props.title || undefined}
        />)}
      </div>
    );
  }
}

RequestAvailableActions.propTypes = {
  actions: PropTypes.array, // object array to iterate subcomponent
  defaultAction: PropTypes.string.isRequired, // this is the default label
  type: PropTypes.string,
  url: PropTypes.string
};
RequestAvailableActions.defaultProps = {};
