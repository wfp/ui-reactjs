import React, {
    Component
} from 'react';
import PropTypes from 'prop-types';
import LogoItem from './logoitem';
import HeaderMenuGroup from './headermenugroup';
/**
 * Header Component
 * display the nav menu and its children
 * handle the onclick event on responsive menu button
 * toggle the css classes to open/close the submenu
 */
class Header extends Component {
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

        <div className="wfp-u-3-5 wfp-u-md-3-4 header--nav">
            <button className="header--toggle" id="js-menu-int-trigger" onClick={this.toggleMenu}>Menu</button>
            <HeaderMenuGroup openTrigger={ this.state.openValue }>{this.props.children}</HeaderMenuGroup>
        </div>
      </div>
    </header>);
    }
}
Header.propTypes = {
    title: PropTypes.string
};
Header.defaultProps = {
    title: ""
};
export default Header;