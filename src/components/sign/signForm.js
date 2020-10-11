import React, { Component } from 'react';
import SignInput from './signForm/SignInput';
import SignBtn from './signForm/SignBtn';

const SignForm = ({ inputDatas, btnText }) => {
  return (
    <form>
      {inputDatas.map((data) => (
        <SignInput key={data.placeholder} {...data} />
      ))}
      <SignBtn btnText={btnText} />
    </form>
  );
};

export default SignForm;
