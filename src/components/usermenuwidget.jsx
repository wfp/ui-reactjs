import React from 'react';
import PropTypes from 'prop-types';


class UserMenuWidget extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false
    };
    this.onToggleMenuState = this.onToggleMenuState.bind(this);
  };

  onToggleMenuState() {
    this.setState({
      isMenuOpen: !this.state.isMenuOpen
    });
  };

  render() {
    let menuStateClass = "menu--item dropdown-trigger " + (this.state.isMenuOpen?"open":"closed");
    return (
      <li className={menuStateClass} onClick={this.onToggleMenuState}>
        <a className="menu--link no-underline">
          <img src={this.props.imagesrc} className="img img-round"/>
          <span>{this.props.username}</span>
        </a>
        <div className="dropdown">
          <ul className="menu--group">
            {this.props.children}
          </ul>
        </div>
      </li>
    );
  };
}

UserMenuWidget.PropTypes = {
  imagesrc: PropTypes.string,
  username: PropTypes.string
};

export default UserMenuWidget;
