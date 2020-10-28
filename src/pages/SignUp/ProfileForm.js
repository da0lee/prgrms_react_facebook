import React from 'react';
import { Link } from 'react-router-dom';
import { STEPS } from '../../utils/helper';

const ProfileForm = ({ setStep, users, onChangeUsers, onSubmitUsers }) => {
  const { name } = users;

  const handleClickPrev = () => setStep(STEPS.EMAIL_PASSWORD);

  return (
    <>
      <form onSubmit={onSubmitUsers}>
        <input
          type="text"
          className="form-control"
          name="name"
          value={name}
          placeholder="이름"
          required
          onChange={onChangeUsers}
        />
        <input
          type="file"
          className="form-control"
          name="profileImage"
          placeholder="Profile"
          onChange={onChangeUsers}
        />
        <button className="btn btn-lg btn-primary btn-block" type="submit">
          가입하기
        </button>
        <button className="btn btn-lg btn-secondary btn-block" type="button" onClick={handleClickPrev}>
          이전 단계
        </button>
      </form>
      <p className="text-help text-center">
        이미 계정이 있으신가요?{' '}
        <Link className="text-center login-here" to="/login">
          로그인 하기
        </Link>
      </p>
    </>
  );
};

export default ProfileForm;
