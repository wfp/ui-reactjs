import React from 'react';
import classNames from 'classnames';
import InlineError from './inlineError';
import Label from './label';
import Select from 'react-select';
import PropTypes from 'prop-types';

const StaffSelectValue = (props) => {

    const StaffSelectValueClass = classNames({
        'Select-value': true,
        'userselect__value': true,
        'readonly--inline': props.readOnly === 'inline',
        'readonly': props.readOnly
    }); 

    const errorImage = (ev) => {
        console.log("User image not existing");
        //ev.target.src = 'some default image url'
    }

    return (
        <div className={StaffSelectValueClass}>
         {props.value &&
                <div className="Select-value-label">
                    <div className="userselect__value__text">{props.value.last_name}, {props.value.first_name}</div>
                    <div className="userselect__value__extended">

                        <img onError={errorImage} src={`http://gtd.wfp.org/media/pictures/auto/${props.value.email}.jpg`} />
                        Index: {props.value.indexno}
                        <span>{props.value.email}</span>
                    </div>
                </div>
            }
        </div>
    );
};

StaffSelectValue.propTypes = {
    children: PropTypes.node,
    value: PropTypes.object
};

const StaffSelect = (props) => {

    const { input, value, label, type, disabled, readOnly, loadOptions} = props;

    const handleChange = (value) => {
        if (value) {
            input.onChange(value);
        }
    }

    if (!readOnly) {
        return (
            <InlineError {...props}>
                <Label>{label}</Label>
                <div className="userselect__wrapper">
                    <Select.Async
                        autoFocus
                        className="userselect__select"
                        id="state-select"
                        labelKey="text"
                        loadOptions={loadOptions}  
                        name="selected-state" 
                        onChange={handleChange} 
                        placeholder="Select staff by last name"
                        searchable={true}
                        value={input.value}
                        valueComponent={StaffSelectValue}       
                        valueKey="indexno"
                    />
                    <input
                        {...input}
                        placeholder={label}
                        type="hidden"
                    />
                </div>
            </InlineError>
        )
    }
    else {
        return (
            <InlineError {...props}>
                <Label>{label}</Label>
                <StaffSelectValue readOnly={readOnly} value={value ? value : input.value} />
            </InlineError>
        )
    }
};

StaffSelect.propTypes = {
    input: PropTypes.object,
    label: PropTypes.string,
    type: PropTypes.string,
    loadOptions: PropTypes.func,
    meta: PropTypes.object
};

export default StaffSelect;
