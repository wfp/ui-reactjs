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
        this.toggleMenu = this.toggleMenu.bind(this);
    }
    componentDidMount() {
        this.setState({
            openValue: false
        });
    }
    toggleMenu() {
        this.setState({
            openValue: !this.state.openValue
        });
    }
    render() {
        return (<header className="wfp-header-int">
      <div className="wfp-grid wfp-wrapper">

        <LogoItem title={this.props.title} />

        <div className="wfp-u-1-2 wfp-u-sm-4-8 wfp-u-lg-7-8 header--nav">
            <button onClick={this.toggleMenu} className="header--toggle" id="js-menu-int-trigger">Menu</button>
            <HeaderMenuGroup openTrigger={this.state.openValue}>{this.props.children}</HeaderMenuGroup>
        </div>
      </div>
    </header>);
    }
}
/*
const Header = props => {
  return (
    <header className="wfp-header-int">
      <div className="wfp-grid wfp-wrapper">

        <LogoItem title={props.title} />

        <div className="wfp-u-1-2 wfp-u-sm-4-8 wfp-u-lg-7-8 header--nav">
            <button className="header--toggle" id="js-menu-int-trigger">Menu</button>
            <HeaderMenuGroup>{props.children}</HeaderMenuGroup>
        </div>
      </div>
    </header>
  );
};
*/
Header.propTypes = {
    title: PropTypes.string
};
export default Header;