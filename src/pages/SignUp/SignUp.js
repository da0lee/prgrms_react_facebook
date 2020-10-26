import React, { useState } from 'react';
import { STEPS } from '../../utils/helper';
import apis from '../../service/apis/index';
import EmailPwForm from './EmailPwForm';
import ProfileForm from './ProfileForm';

const SignUp = ({ users, errors, onChangeUsers, history }) => {
  const handleSubmitUsers = async (e) => {
    e.preventDefault();

    try {
      await apis.usersApi.signUp({
        principal: users.email,
        credentials: users.password,
        name: users.name,
        profileImage: users.profileImage,
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
        return <EmailPwForm setStep={setStep} users={users} errors={errors} onChangeUsers={onChangeUsers} />;
      case STEPS.PROFILE:
        return (
          <ProfileForm
            setStep={setStep}
            users={users}
            errors={errors}
            onChangeUsers={onChangeUsers}
            onSubmitUsers={handleSubmitUsers}
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
