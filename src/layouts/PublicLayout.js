import React from 'react';
import { Route } from 'react-router-dom';
import css from 'styled-jsx/css';

const PublicLayout = ({ component: Component, ...rest }) => {
  return (
    <>
      <Route
        {...rest}
        render={(matchProps) => (
          <div className="sign form container">
            <Component {...matchProps} />
          </div>
        )}
      />
      <style jsx>{StyledSignForm}</style>
    </>
  );
};

const StyledSignForm = css`
  :global(.sign form) {
    max-width: 320px;
    padding: 8px;
    margin: 0 auto;
  }
  :global(.form-control) {
    font-size: 16px;
    height: auto;
    padding: 10px;
    margin-bottom: 20px;
  }
  :global(button.btn) {
    background-color: #3b5999;
    color: #fffffe;
    font-weight: 800;
    border-color: unset;
    margin-top: 10px;
  }
  :global(.text-help) {
    margin-top: 10px;
  }
  :global(.login-here) {
    font-weight: 900;
    color: #3a5999;
  }
  :global(.login .new-account) {
    font-weight: 900;
    color: #3a5999;
  }
`;

export default PublicLayout;
