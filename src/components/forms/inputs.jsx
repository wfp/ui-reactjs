import React from 'react';
import classNames from 'classnames';
import InlineError from './inlineError';
import Label from './label';
import Dropzone from 'react-dropzone';
import Select from 'react-select';
import PropTypes from 'prop-types';



export const RenderInput = (props) => {
    const { input, label, wrapper, type, meta: { touched, error } } = props;

    const inputClasses = classNames({
      'invalid' : touched && error
    }); 

    return (
        <InlineError {...props}>
                <Label>{label}</Label>
                <input {...input} type={type} className={inputClasses} />
        </InlineError>
    )
};


export class RenderCurrencyInput extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            value: this.props.defaultValue ? this.props.defaultValue : null
        }
    }

    handleChange = (value) => {
        this.setState({ value });
        this.props.input.onChange(value.id);
    }

    componentDidMount () {
        if (this.props.defaultValue) {
            this.handleChange(this.props.defaultValue);
        }
    }

    render () {
        const { input, label, type, loadOptions, meta: { touched, error } } = this.props;
        return (
            <InlineError {...this.props}>
                    <Label>{label}</Label>
                    <div className="currencyinput__wrapper">
                        <Select.Async
                            id="state-select"
                            ref="stateSelect"
                            autoFocus
                            className="currencyinput__select"
                            name="selected-state"
                            valueKey="id"
                            placeholder="Select currency"
                            labelKey="text"
                            clearable={false}
                            value={this.state.value}
                            onChange={this.handleChange}        
                            loadOptions={loadOptions}     
                            searchable={true}
                        />
                        <input {...input} placeholder={label} type="hidden" />
                    </div>
            </InlineError>
        )
    }
};

export const RenderCheckbox = (props) => {
  const { input, label, wrapper, type, meta: { touched, error } } = props;
  return (
    <InlineError {...props}>
      <input {...input} id={input.name} type={type}/>
      <Label htmlFor={input.name}>{label}</Label>
    </InlineError>
  )
};


export const RenderTextarea = (props) => {
  const { input, label, placeholder, wrapper, type, meta: { touched, error } } = props;
  const inputClasses = classNames({
    'invalid' : touched && error
  }); 

  return (
    <InlineError {...props}>
      <Label>{props.label}</Label>
      <textarea
        {...props.input}
        placeholder={placeholder}
        type={type}
        className={inputClasses}
      />
    </InlineError>
  );
};


export const RenderSelect = (props) => {
  const { input, selectEmptyText, isRequired, selectList, label, meta: { touched, error } } = props;

  const inputClasses = classNames({
    'invalid' : touched && error
  });

  return (
    <InlineError {...props} className="select-simple">
      <Label isRequired={isRequired}>{label}</Label>
      <select className={inputClasses} {...input} >
        <option value="">{selectEmptyText}</option>
        {selectList.map(val => <option value={val} key={val}>{val}</option>)}
      </select>
    </InlineError>
  )
}

export const RenderStatic = (props) => {
    const {data, label, hideLabel} = props;
    const inputClass = classNames({
        'wfp-staticinput': true,
        'empty': !data
    }); 
    return (
        <InlineError {...props}>
            <div className="wfp-form--group--horizontal">
                {hideLabel !== true &&
                    <Label>{label}</Label>
                }
                <span className={inputClass}>{data ? data : "—"}</span>
            </div>
        </InlineError>
    )
}

export const FormGroup = (props) => {
    const {children, type, className} = props;
	const formGroupClass = classNames({
      'wfp-form--group': true,
      'wfp-form--group--seperate': (type === 'seperate'),
      'wfp-form--group--seperatesmall': (type === 'seperatesmall'),
      [`${className}`]: className,
    }); 
	return (
		<div className={ formGroupClass }>
			{children}
		</div>
	)
}

export const FormGroupTitle = ({children}) => (
    <h4 className='wfp-form--group__title'>
        {children}
    </h4>
)

export const FormGroupInputField = ({children}) => (
    <div className='wfp-form--group__inputfield'>
        {children}
    </div>
)

export const Button = (props) => {

    const {buttonType, ...other} = props;

    const btnClass = classNames({
        'wfp-btn': !props.buttonType,
        [`wfp-btn--${props.buttonType}`]: props.buttonType,
    });

    return (
        <button className={btnClass} {...other} type={props.type ? props.type : 'button'}>
            {props.children}
        </button>
    )
}

export const FormHint = ({children}) => (
    <div className='wfp-form--group__hint'>
        {children}
    </div>
)

export const RequiredInfo = () => (
    <div className="wfp-form__required-description">
        <span className="mandatory_field">*</span> Indicates required field
    </div>
);
