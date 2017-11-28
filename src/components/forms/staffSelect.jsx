import React from 'react';
import classNames from 'classnames';
import InlineError from './inlineError';
import {Label} from './inputs';
import Dropzone from 'react-dropzone';
import Select from 'react-select';
import PropTypes from 'prop-types';

const StaffSelectValue = (props) => {
    return (
        <div className="Select-value userselect__value" title={props.value.title}>
            <div className="Select-value-label">
                <div className="userselect__value__text">{props.children}</div>
                <div className="userselect__value__extended">

                <img src={`http://gtd.wfp.org/media/pictures/auto/${props.value.email}.jpg`} />
                Index: {props.value.indexno}
                <span>{props.value.email}</span>
                </div>
            </div>
        </div>
    );
};

StaffSelectValue.propTypes = {
    children: PropTypes.node,
    value: PropTypes.object
};

class StaffSelect extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            value: null
        }
    }

    handleChange = (value) => {
        this.setState({ value });
        console.log(value);
        console.log('Selected:', value);
        if (value.indexno)
            this.props.input.onChange(value.indexno);
    }

    render () {
        const { input, label, type, loadOptions, meta: { touched, error } } = this.props;
        return (
            <InlineError touched={touched} error={error}>
                <div className="wfp-form--group">
                    <Label>{label}</Label>
                    <div className="userselect__wrapper">
                        <Select.Async
                            id="state-select"
                            ref="stateSelect"
                            autoFocus
                            className="userselect__select"
                            name="selected-state"
                            placeholder="Select staff by last name"
                            valueKey="indexno"
                            labelKey="text"
                            value={this.state.value}
                            onChange={this.handleChange}        
                            loadOptions={loadOptions}     
                            searchable={true}
                            valueComponent={StaffSelectValue}       
                        />
                        <input {...input} placeholder={label} type="hidden" />
                    </div>
                </div>
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
