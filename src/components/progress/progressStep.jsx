import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ProgressItem from './progressItem';

const ProgressStep = props => {

	const stepClasses = classNames({
		'progress__step' : true,
	  	'active' : props.active
	}); 
    return (
        <div className={stepClasses}>
        	<h3 className="progress__step__title">{props.title}</h3>
        	   {props.items.map(function(item, index){
                	return <ProgressItem {...item} />;
            	})}
        </div>
  );
};

ProgressStep.propTypes = {
  className: ProgressStep.string
};

export default ProgressStep;