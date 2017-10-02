import Banner from './betabanner';
import React from 'react';
import PropTypes from 'prop-types';
import LogoItem from './logoitem';
import HeaderMenuGroup from './headermenugroup';
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openValue: false
    };
    this.handleToggleMenu = this.handleToggleMenu.bind(this);
  }

  handleToggleMenu() {
    this.setState({
      openValue: !this.state.openValue
    });
  }
  render() {
    return (
      <header className="wfp-header-int">
        <Banner
          findOutMoreUrl="/more"
          oldSiteUrl="/"
        />
        <div className="wfp-grid wfp-wrapper">

          <LogoItem title={this.props.title} />

          <div className="wfp-u-1-2 wfp-u-sm-4-8 wfp-u-lg-7-8 header--nav">
            <button
              className="header--toggle"
              onClick={this.handleToggleMenu}
            >Menu</button>
            <HeaderMenuGroup openTrigger={this.state.openValue}>{this.props.children}</HeaderMenuGroup>
          </div>
        </div>
      </header>
    );
  }
}
Header.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string
};
export default Header;
