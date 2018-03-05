import React from 'react';
import classNames from 'classnames';
import InlineError from './inlineError';
import Label from './label';
import Select from 'react-select';
import PropTypes from 'prop-types';
import { Input } from './inputs';

const DutyStationSelectValue = (props) => {

    const {readOnly} = props;

    const DutyStationSelectValueClass = classNames({
        'Select-value': true,
        'dutystation__value': true,
        'readonly--inline': props.readOnly === 'inline',
        'readonly': props.readOnly
    });

    return (
        <div className={DutyStationSelectValueClass}>
         {props.value &&
                <div className="Select-value-label">
                    {!readOnly &&
                        <div className="dutystation__value__text">{props.value.last_name}, {props.value.first_name}</div>
                    }
                    <div className="dutystation__value__extended">
                        {readOnly ? (
                            <div className="dutystation__description">
                                <div className="dutystation__value__text">
                                    {props.value.last_name}, {props.value.first_name}
                                </div>  
                                <span>{props.value.position_title}</span>
                                <span>{props.value.division}</span>
                            </div>
                        ):(
                            <div className="dutystation__description">
                                <span>Index: {props.value.indexno}</span>
                                <span>{props.value.email}</span>
                            </div>
                        )}
                    </div>
                </div>
            }
        </div>
    );
};

DutyStationSelectValue.propTypes = {
    children: PropTypes.node,
    value: PropTypes.object
};

const DutyStationSelect = (props) => {

    const { input, value, label, type, disabled, readOnly, loadOptions, disableEmpty} = props;

    const handleChange = (value) => {
        if (value || disableEmpty !== true) {
            input.onChange(value);
        }
    }

    if (!readOnly) {
        return (
            <InlineError {...props}>
                <Label>{label}</Label>
                <div className="dutystation__wrapper">
                    <Select.Async
                        autoFocus
                        className="dutystation__select"
                        id="state-select"
                        labelKey="text"
                        loadOptions={loadOptions}
                        name="selected-state"
                        onChange={handleChange}
                        placeholder="Enter the Duty Station"
                        searchable={true}
                        value={input.value}
                        valueComponent={DutyStationSelectValue}
                        valueKey="indexno"
                    />
                </div>
            </InlineError>
        )
    }
    else {
        return (
            <InlineError {...props}>
                <Label>{label}</Label>
                <DutyStationSelectValue readOnly={readOnly} value={value ? value : input ? input.value : undefined} />
            </InlineError>
        )
    }
};

DutyStationSelect.propTypes = {
    input: PropTypes.object,
    label: PropTypes.string,
    type: PropTypes.string,
    loadOptions: PropTypes.func,
    meta: PropTypes.object
};

export default DutyStationSelect;
