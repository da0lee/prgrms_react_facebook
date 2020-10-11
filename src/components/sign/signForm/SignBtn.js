import React, { Component } from 'react';

const SignBtn = ({ btnText }) => {
  return (
    <button className="btn btn-lg btn-primary btn-block" type="submit">
      {btnText}
    </button>
  );
};

export default SignBtn;
