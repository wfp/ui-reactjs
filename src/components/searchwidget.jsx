import React from 'react';
import PropTypes from 'prop-types';


const SearchWidget = props => {
  return (
    <li className="menu--item">
      <div className="header--search">
        <input type="search" className="header--input mousetrap" id="search" placeholder="Find a form" />
      </div>
    </li>
  );
};

SearchWidget.propTypes = {

};

export default SearchWidget;
