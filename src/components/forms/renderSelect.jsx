import React from "react";
import classNames from "classnames";
import InlineError from "./inlineError";
import Label from "./label";
import PropTypes from "prop-types";
import { Input } from "./inputs";

export const RenderSelect = props => {
  const {
    disabled,
    id,
    input,
    isRequired,
    label,
    selectEmptyText,
    selectList,
    meta: { touched, error }
  } = props;

  const inputClasses = classNames({
    invalid: touched && error
  });

  const selectListEl = selectList.map((val, i) => {
    const value = typeof val === "object" ? (val.id ? val.id : val.value) : val;
    return (
      <option value={value} key={i}>
        {typeof val === "object" ? val.text : val}
      </option>
    );
  });

  return (
    <InlineError className="select-simple" {...props}>
      <Label {...props} />
      <select
        {...input}
        className={inputClasses}
        disabled={disabled}
        id={id ? id : input.name}
      >
        <option value="">{selectEmptyText}</option>
        {selectListEl}
      </select>
    </InlineError>
  );
};
