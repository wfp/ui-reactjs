import React from 'react';
import classNames from 'classnames';
import InlineError from './inlineError';
import Label from './label';
import { Unit } from './../../utils/units';
import Dropzone from 'react-dropzone';
import Select from 'react-select';
import PropTypes from 'prop-types';

export const Input = (props) => {
    const { className, input, id, label, disabled, meta: { touched, error }, type, placeholder} = props;

    const inputClasses = classNames({
      'invalid' : touched && error
    }); 

    return (
        <input
        {...input}
        className={className} 
        disabled={disabled}
        id={id ? id : input.name}
        type={type}
        className={inputClasses}
        placeholder={placeholder}/>
    )
}

export const RenderInput = (props) => {
    const { input, id, label, disabled, wrapper, type, meta: { touched, error } } = props;

    return (
        <InlineError {...props}>
            <Label {...props} />
            <Input {...props} />
        </InlineError>
    )
};

export const RenderCurrencyInput = (props) => {

    const { input, disableEmpty, label, disabled, type, loadOptions, meta: { touched, error } } = props;

    const handleChange = (value) => {
        if (value || disableEmpty !== true) {
            input.onChange(value);
        }
    }

    return (
        <InlineError {...props}>
                <Label {...props} />
                <div className="currencyinput__wrapper">
                    <Select.Async
                        id="state-select"
                        autoFocus
                        className="currencyinput__select"
                        disabled={disabled}
                        name="selected-state"
                        valueKey="id"
                        placeholder="Select currency"
                        labelKey="text"
                        clearable={false}
                        value={input.value}
                        onChange={handleChange}        
                        loadOptions={loadOptions}     
                        searchable={true}
                    />
                </div>
        </InlineError>
    )
};

export const RenderCheckbox = (props) => {
  const { id, input, label, wrapper, className, type, meta: { touched, error } } = props;

  const wrapperClass = classNames({
    'checkbox__wrapper': true,
    [`${className}`]: className
  }); 

  return (
    <InlineError {...props} className={wrapperClass}>
        <Input {...props} />
        <Label {...props} />
    </InlineError>
  )
};


export const RenderRadio = (props) => {
  const { id, input, label, wrapper, type, meta: { touched, error } } = props;
  return (
    <InlineError {...props} className="wfp-radio">
        <Input {...props} />
        <Label {...props} />
    </InlineError>
  )
};

export const RenderTextarea = (props) => {
  const {id, input, label, placeholder, wrapper, type, meta: { touched, error } } = props;
  const inputClasses = classNames({
    'invalid' : touched && error
  }); 

  return (
    <InlineError {...props}>
      <Label {...props} />
      <textarea
        {...props.input}
        id={id ? id : input.name} 
        placeholder={placeholder}
        type={type}
        className={inputClasses}
      />
    </InlineError>
  );
};



export const RenderStatic = (props) => {
    const {className, data, label, hideLabel, unit, unitFrom} = props;

    const wrapperClass = classNames({
      [`${className}`]: className
    }); 

    const inputClass = classNames({
      'wfp-staticinput': true,
      'empty': !data
    });

    return (
        <InlineError {...props} className={wrapperClass}>
          {hideLabel !== true &&
              <Label {...props} />
          }
          <span className={inputClass}>
            {unit ? (
              <Unit type={unit} from={unitFrom}>{data}</Unit>
            ) : (
              <span>{data ? data : "—"}</span>
            )}
          </span>
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

export const FormHint = ({children, innerHtml}) => {
  function showInnerHtml(content) {
    return {__html: content}
  }

  return (
    <div className='wfp-form--group__hint'>
        {children}
        {innerHtml && (
          <div dangerouslySetInnerHTML={showInnerHtml(innerHtml)} ></div>
        )}
    </div>
)}

export const RequiredInfo = () => (
    <div className="wfp-form__required-description">
        <span className="mandatory_field">*</span> Indicates required field
    </div>
);
