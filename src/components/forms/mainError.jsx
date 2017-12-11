import React from 'react';
import PropTypes from 'prop-types';

const MainError = ({ error, submitFailed }) => {

	if (error && submitFailed === true) {
		return (
			<div className='main-error'>
				<h4 className='main-error__title'>An error occured.</h4>
				{error.generic && (
					<ul className="main-error__list">
						{ error.generic.map((field, i) => <li key={i}><label>{field}</label></li>) }
					</ul>
				)}
				{error.fields && (
					<ul className="main-error__list">
						{ Object.keys(error.fields).map((field, i) => <li key={i}><label htmlFor={field}>{error.fields[field]}</label></li>) }
					</ul>
				)}
			</div>);
	}
	else {
		return (null);
	}
};

MainError.propTypes = {
	error: PropTypes.object,
	submitFailed: PropTypes.bool
};

export default MainError;
