import React from 'react';
import PropTypes from 'prop-types';


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
    console.log("TOGGLE!!!");
    this.setState(prevState => ({
      listIsVisible: !prevState.listIsVisible
    }));
  }

  performAction() {
    console.log("Perform Action!!!");
    this.setState({
      listIsVisible: false
    });
  }

  render() {
    console.log("Render Actions !!!");
    let available_actions = this.props.actions.map(el => {
      return (
        <li className="menu--item">
          <a onClick={this.performAction}>
            <span>{el}</span>
          </a>
        </li>
      );
    });
    return (
      <td>
        <div className="inline-actions">
          <span>
            <span className="template">
              <button className="wfp-btn btn-small xsmall modal-trigger wfp-btn--primary">
                <span>{this.props.defaultAction}</span>
              </button>
            </span>
          </span>
          <span>
            <button onClick={this.toggleListVisibility} className="wfp-btn xsmall">
              <i className={"fa fa-fw" + (this.state.listIsVisible?" fa-chevron-up":" fa-chevron-down")} />
            </button>
            <div className="dropdown" style={{display: this.state.listIsVisible?"block":"none"}}>
              <ul className="menu--group">
                {available_actions}
              </ul>
            </div>
          </span>
        </div>
      </td>
    );
  }
}

RequestAvailableActions.propTypes = {

};

