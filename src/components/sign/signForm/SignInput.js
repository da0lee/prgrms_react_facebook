import React from 'react';

const SignInput = ({ type, placeholder, required, minLength }) => {
  return (
    <input type={type} className="form-control" placeholder={placeholder} minLength={minLength} required={required} />
  );
};

export default SignInput;
