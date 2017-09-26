import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
/**
 * HeaderMenuGroup Element Function
 * render the nav element and its children
 *
 * @param  PropsObject props inherited from parent
 * @return void
 */
const HeaderMenuGroup = props => {
    let open = props.openTrigger;
    let menuClass = classNames('header--menu', {
        'opened': !!open,
        'closed': !open
    });
    return (<nav className={menuClass} id="js-menu-int">
      <ul className="menu--group">
        {props.children}
      </ul>
    </nav>);
};
HeaderMenuGroup.propTypes = {};
HeaderMenuGroup.defaultProps = {};
export default HeaderMenuGroup;