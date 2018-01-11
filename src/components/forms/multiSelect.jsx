import React from 'react';
import classNames from 'classnames';
import InlineError from './inlineError';
import Label from './label';
import Select from 'react-select';
import PropTypes from 'prop-types';

const MultiSelect = (props) => {

	const { disableEmpty, input, label, multi, placeholder, simpleValue, type, valueKey, labelKey, options, meta: { touched, error } } = props;
		
	const handleChange = (value) => {
        if (value || disableEmpty !== true) {
            input.onChange(value);
        }
	}
	
	return (
	<InlineError {...props}>
		<Label>{label}</Label>
		<div className="userselect__wrapper">
		<Select
			autoFocus
			className=""
			id="state-select"
			valueKey={valueKey ? valueKey : 'role_desc'}
			labelKey={labelKey ? labelKey : 'role_desc'}
			options={options}
			multi={multi ? multi : true}
			name="selected-state" 
			onChange={handleChange} 
			onBlur={() => {
			     input.onBlur(input.value)
			}}
			placeholder={placeholder ? placeholder : 'Select Values'}
			searchable={true}
			simpleValue={simpleValue ? simpleValue : true}
			value={input.value}
		/>
		<input
			{...input}
			placeholder={label}
			type="hidden"
		/>
		</div>
	</InlineError>
	);
};

MultiSelect.propTypes = {
	input: PropTypes.object,
	label: PropTypes.string,
	meta: PropTypes.object,
	options: PropTypes.array,
	placeholder: PropTypes.string,
	simpleValue: PropTypes.bool,
	type: PropTypes.string
};

export default MultiSelect;
