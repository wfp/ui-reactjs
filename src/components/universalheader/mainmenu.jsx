import React from 'react'
import PropTypes from 'prop-types'
import Menu, {SubMenu, MenuItem} from 'rc-menu'
//import MenuList from './MenuList'
//import { ExtLink } from '../../helpers/ExtLink'

const MenuLink = (props) => {
  return (
    <span>
     <a className="menu--link menu--link--desktop" to={props.to} exact activeClassName="active">{props.name}</a>
      <span className="menu--link menu--link--mobile">{props.name}</span>
    </span>)
}

class Mainmenu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeKey: [],
      timeOut: 350,
      data: {}
    };
  }

  setSubmenu(openKeys) {
    this.setState({ 
      activeKey: openKeys
    });
    if (openKeys.length >= 1)
      document.body.classList.add('menu__sub--open')
    else
      document.body.classList.remove('menu__sub--open')
  }

  componentWillReceiveProps(nextProps) {
    this.setSubmenu([]);
    return false;
  }

  /* Save active Menu state */
  onOpenChange = (openKeys) => {
    this.setSubmenu(openKeys)
  }

  /* Handle the close Button functionality */
  handleCloseButton = (event, openKeys) => {
     this.setSubmenu([]);
  }

  /* Manually open onClick */
  onClick = (openKeys) => {
    if (this.state.activeKey[0] !== openKeys.key) {
      this.setState({ 
        activeKey: [openKeys.key]
      });
      document.body.classList.toggle('menu__sub--open');
    }
  }

  render() {

  const {data} = this.props;

  return (
    <Menu
      className="header__content"
      onOpenChange={this.onOpenChange}
      openKeys={this.state.activeKey}
      closeSubMenuOnMouseLeave={true}
      onTitleClick={this.onClick}>
          {this.props.children}

    </Menu>)}
};

Mainmenu.propTypes = {
  data: PropTypes.object
};

export default Mainmenu
export { MenuLink }