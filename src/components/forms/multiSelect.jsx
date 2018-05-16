import React from 'react';
import InlineError from './inlineError';
import Label from './label';
import Select from 'react-select';
import PropTypes from 'prop-types';

const MultiSelect = (props) => {

	const { disableEmpty, input, label, multi, placeholder, simpleValue,
		type, valueKey, labelKey, options, delimiter, meta: { touched, error } } = props;

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
			simpleValue={simpleValue}
			value={input.value}
			delimiter={delimiter}
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
    type: PropTypes.string,
		delimiter: PropTypes.string
};

MultiSelect.defaultProps = {
    simpleValue: true,
		delimiter: ","
};

export default MultiSelect;
