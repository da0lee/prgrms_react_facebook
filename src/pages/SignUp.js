import React from 'react';
import SignTitle from '../components/sign/SignTitle';
import SignForm from '../components/sign/SignForm';
import SignHelp from '../components/sign/SignHelp';
import { signup_input as signupInput } from '../api/SignupInput.json';

const SignUp = () => {
  return (
    <>
      <SignTitle title="계정 만들기" />
      <SignForm inputDatas={signupInput} btnText="가입하기" />
      <SignHelp helpText="이미 계정이 있으신가요?" linkText="로그인 하기" linkTo="/login" />
    </>
  );
};

export default SignUp;
