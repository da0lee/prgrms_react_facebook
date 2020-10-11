import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const SignHelp = ({ helpText, linkText, linkTo }) => {
  return (
    <p className="text-help text-center">
      {helpText}
      <Link className="text-center login-here" to={linkTo}>
        {linkText}
      </Link>
    </p>
  );
};

export default SignHelp;
