import React, { useState } from 'react';
import EmailPwForm from './EmailPwForm';
import ProfileForm from './ProfileForm';
import { STEPS } from '../../utils/helper';
import { valEmail, valPw, valPwCheck } from '../../utils/helper';

const SignUp = () => {
  const renderForm = (step, setStep) => {
    switch (step) {
      case STEPS.EMAIL_PASSWORD:
        return <EmailPwForm setStep={setStep} />;
      case STEPS.PROFILE:
        return <ProfileForm setStep={setStep} />;
    }
  };

  const [step, setStep] = useState(STEPS.EMAIL_PASSWORD);

  // const handleChange = (e) => {};
  return (
    <>
      <div className="signup container">
        <h1 className="text-center">계정 만들기</h1>
        {renderForm(step, setStep)}

        <style jsx global>{`
          .signup form {
            max-width: 320px;
            padding: 8px;
            margin: 0 auto;
          }
          .signup input.form-control {
            font-size: 16px;
            height: auto;
            padding: 10px;
            margin-bottom: 1rem;
          }
          .signup button.btn {
            background-color: #3b5999;
            color: #fffffe;
            font-weight: 800;
            border-color: unset;
            margin-top: 10px;
          }
          .signup button.btn-secondary {
            background-color: #566888;
          }
          .signup .text-help {
            margin-top: 10px;
          }
          .signup .login-here {
            font-weight: 900;
            color: #3a5999;
          }
        `}</style>
      </div>
    </>
  );
};

export default SignUp;
