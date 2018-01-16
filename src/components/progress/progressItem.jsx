import React from 'react';
import PropTypes from 'prop-types';

const ProgressItem = props => {
    return (
        <div className="progress__item">
        	<div className="progress__item__title">
        		<img src="#" />
        		{props.user.username} {props.date}
        	</div>
        	{props.message}
        </div>
  );
};

ProgressItem.propTypes = {
  className: ProgressItem.string
};

export default ProgressItem;