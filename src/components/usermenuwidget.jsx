import React from 'react';
import PropTypes from 'prop-types';


const UserMenuWidget = props => {
  return (
    <li className="menu--item dropdown-trigger closed">
      <a className="menu--link no-underline">
        <img src={props.imageSrc} className="img img-round" />
        <span className="fill-data" data-content="user.name"></span>
        <i className="fa fa-fw fa-chevron-down"></i>
      </a>
      <div className="dropdown">
        <ul className="menu--group">
          <li className="menu--item"><a className="">Sign Out</a></li>
        </ul>
      </div>
    </li>
  );
};

UserMenuWidget.PropTypes = {

};

export default UserMenuWidget;
