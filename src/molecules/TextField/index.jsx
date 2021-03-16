/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import MaterialTextField from '@material-ui/core/TextField';
import NumberFormat from 'react-number-format';

const TextField = (props) => {
  const {
    onValidStateChange,
    required,
    requiredMessage,
    invalidMessage,
    errorMessage,
    transform,
    validation,
    ...componentProps
  } = props;

  const getError = (value) => {
    if (required && !value) {
      return requiredMessage || true;
    }
    if (props.format && value && value.includes(props.mask)) {
      return invalidMessage || true;
    }
    if (props.pattern && value && !value.match(props.pattern)) {
      return invalidMessage || true;
    }
    if (validation && value && !validation(value)) {
      return invalidMessage || true;
    }
    return null;
  };

  const [value, setValue] = useState('');
  const [error, setError] = useState(getError());
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    if (onValidStateChange) {
      onValidStateChange(!error);
    }
  }, [error]);

  useEffect(() => {
    if (props.value) {
      setValue(props.value);
      setError(getError(props.value));
      if (!error) {
        setShowError(false);
      }
    }
  }, [props.value]);

  const handleChange = (event, showError) => {
    const newValue = transform ? transform(event.target.value) : event.target.value;
    setShowError(showError || false);
    setError(getError(newValue) || '');
    setValue(newValue);

    if (props.onChange) {
      const newTarget = { ...event.target, value: newValue };
      const newEvent = { ...event, target: newTarget };
      props.onChange(newEvent);
    }
  };

  const handleBlur = (event) => {
    handleChange(event, true);
    if (props.onBlur) {
      props.onBlur(event);
    }
  };

  let Component;
  if (props.format) {
    Component = NumberFormat;
    componentProps.customInput = MaterialTextField;
  } else {
    Component = MaterialTextField;
  }

  return (
    <Component
      {...componentProps}
      variant='outlined'
      error={showError ? Boolean(error) : false}
      helperText={showError ? (error && String(error)) || '' : ''}
      onChange={handleChange}
      onBlur={handleBlur}
      value={value}
    />
);
};

TextField.defaultProps = {
  mask: '_',
  requiredMessage: ' ',
  invalidMessage: ' '
};

TextField.propTypes = {
  mask: PropTypes.string,
  requiredMessage: PropTypes.string,
  invalidMessage: PropTypes.string,
  value: PropTypes.string,
  required: PropTypes.bool,
  format: PropTypes.string,
  pattern: PropTypes.instanceOf(RegExp),
  validation: PropTypes.func,
  onChange: PropTypes.func,
  onValidStateChange: PropTypes.func,
  errorMessage: PropTypes.string,
  transform: PropTypes.func
};

export default TextField;
