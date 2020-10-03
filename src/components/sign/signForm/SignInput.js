import React from 'react';
import css from 'styled-jsx/css';

const SignInput = ({ type, placeholder, required, minLength }) => {
  return (
    <>
      <input type={type} className="form-control" placeholder={placeholder} minLength={minLength} required={required} />
      <style jsx>{StyledSignInput}</style>
    </>
  );
};

const StyledSignInput = css`
  :global(.signup input.form-control) {
    font-size: 16px;
    height: auto;
    padding: 10px;
    margin-bottom: 1rem;
  }
`;

export default SignInput;
