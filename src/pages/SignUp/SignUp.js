import React, { useState } from 'react';
import { STEPS, validate } from '../../utils/helper';
import apis from '../../service/apis/index';
import EmailPwForm from './EmailPwForm';
import ProfileForm from './ProfileForm';

const SignUp = ({ history }) => {
  const [users, setUsers] = useState({
    email: '',
    password: '',
    passwordCheck: '',
    name: '',
    profileImage: 'https://slcp.lk/wp-content/uploads/2020/02/no-profile-photo.png',
  });
  const [errors, setErrors] = useState({
    email: true,
    password: true,
    passwordCheck: true,
  });

  const handleChangeUsers = (e) => {
    const { name, value } = e.target;
    console.log('네임벨류' + name, value);

    const isTrue = validate(name, value, users);
    console.log('isTrue : ', isTrue);
    setErrors((prevState) => ({
      ...prevState,
      [name]: isTrue,
    }));

    if (name === 'profileImage') {
      const fileReader = new FileReader();
      const file = e.target.files[0];
      if (!file.type.includes('image')) {
        e.preventDefault();
        e.target.value = '';
        throw new Error('이미지 파일만 업로드해주세요');
      }
      fileReader.onload = ({ target }) => {
        setUsers((prevState) => ({
          ...prevState,
          [name]: target.result,
        }));
      };
      // fileReader.readAsDataURL(file);
    } else {
      setUsers((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmitUsers = async (e) => {
    e.preventDefault();

    if (errors.email && errors.password && errors.passwordCheck) {
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
    }
  };

  const renderForm = () => {
    switch (step) {
      case STEPS.EMAIL_PASSWORD:
        return <EmailPwForm setStep={setStep} users={users} errors={errors} onChangeUsers={handleChangeUsers} />;
      case STEPS.PROFILE:
        return (
          <ProfileForm
            setStep={setStep}
            users={users}
            errors={errors}
            onChangeUsers={handleChangeUsers}
            onSubmitUsers={handleSubmitUsers}
            history={history}
          />
        );
    }
  };

  const [step, setStep] = useState(STEPS.EMAIL_PASSWORD);

  return (
    <>
      <div className="signup container">
        <h1 className="text-center">계정 만들기</h1>
        {renderForm()}

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
          }
          .signup button.btn {
            margin-top: 25px;
            background-color: #3b5999;
            color: #fffffe;
            font-weight: 800;
            border-color: unset;
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
          .input-and-err {
            position: relative;
          }
          .signup .err {
            display: none;
            position: absolute;
            bottom: -20px;
            right: 0;
            text-align: right;
            color: #3b5999;
          }
          .signup .err.on {
            display: block;
          }
        `}</style>
      </div>
    </>
  );
};

export default SignUp;
