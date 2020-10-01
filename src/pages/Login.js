import React from 'react';
import SignTitle from '../components/sign/SignTitle';
import SignForm from '../components/sign/SignForm';
import SignHelp from '../components/sign/SignHelp';
import { loginInput } from '../api/LoginInput.json';

const Login = () => {
  return (
    <>
      <SignTitle title="로그인" />
      <SignForm inputDatas={loginInput} btnText="로그인" />
      <SignHelp helpText="계정이 필요하신가요?" linkText="계정 만들기" linkTo="/signup" />
    </>
  );
};

export default Login;
