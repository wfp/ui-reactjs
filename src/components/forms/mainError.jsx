import React, { Component } from 'react';
import PropTypes from 'prop-types';




class MainError extends Component {
	constructor(props) {
		super(props);
	}

	/*componentWillReceiveProps(newProps) {
		console.log(newProps);
		if (newProps.error && newProps.submitFailed === true &&
			(this.props.error && newProps.error.fields.length >= this.props.error.fields.length || 
			 this.props.error && newProps.error.generic.length >= this.props.error.generic.length )) {
				//window.scrollTo(0, 0);
		}
	}*/


	render () {
		const { error, submitFailed } = this.props;

		if (error && submitFailed === true) {
			return (
				<div className='main-error'>
					<h4 className='main-error__title'>Validation error occurred. Please check indicated fields below.</h4>
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
	}
};

MainError.propTypes = {
	error: PropTypes.object,
	submitFailed: PropTypes.bool
};

export default MainError;
