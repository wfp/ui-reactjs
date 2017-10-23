import React from 'react';
import PropTypes from 'prop-types';


const UniversalHeaderTitle = props => {
  return (
      <h1 className="header__title">
        {props.children}
      </h1>
  );
};

UniversalHeaderTitle.propTypes = {
  title: PropTypes.node
};

export default UniversalHeaderTitle;
