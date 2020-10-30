import React, { useState } from 'react';
import { STEPS } from './helper';
import apis from '../../service/apis/index';
import EmailPwForm from './EmailPwForm';
import ProfileForm from './ProfileForm';

const SignUp = ({ userValues, errors, onChangeUserValues, history }) => {
  const handleSubmitUserValues = async (e) => {
    e.preventDefault();

    try {
      await apis.usersApi.signUp({
        principal: userValues.email,
        credentials: userValues.password,
        name: userValues.name,
        profileImage: userValues.profileImage,
      });
      alert('가입 되었습니다.');
      history.push('/');
    } catch (error) {
      alert(error.message);
    }
  };

  const renderForm = () => {
    switch (step) {
      case STEPS.EMAIL_PASSWORD:
        return (
          <EmailPwForm
            setStep={setStep}
            userValues={userValues}
            errors={errors}
            onChangeUserValues={onChangeUserValues}
          />
        );
      case STEPS.PROFILE:
        return (
          <ProfileForm
            setStep={setStep}
            userValues={userValues}
            errors={errors}
            onChangeUserValues={onChangeUserValues}
            onSubmitUserValues={handleSubmitUserValues}
            history={history}
          />
        );
    }
  };

  const [step, setStep] = useState(STEPS.EMAIL_PASSWORD);

  return (
    <>
      <div className="sign container">
        <h1 className="text-center">계정 만들기</h1>
        {renderForm()}
      </div>
    </>
  );
};

export default SignUp;
