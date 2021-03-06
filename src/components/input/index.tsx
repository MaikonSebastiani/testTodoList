import React, { InputHTMLAttributes, useEffect, useRef } from 'react';

import { useField } from '@unform/core';

import { Container, Error } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
  }

const Input: React.FC<InputProps> = ({ name, type, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const {
    fieldName, defaultValue, error, registerField,
  } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <input
        type={type}
        ref={inputRef}
        defaultValue={defaultValue}
        {...rest}
      />
      {error
      && (
        <Error>{error}</Error>
      )}
    </Container>
  );
};

export default Input;
