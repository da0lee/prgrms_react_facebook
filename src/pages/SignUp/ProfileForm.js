import React from 'react';
import { Link } from 'react-router-dom';
import { STEPS } from './helper';

const ProfileForm = ({ setStep, userValues, onChangeUserValues, onSubmitUserValues }) => {
  const { name } = userValues;

  const handleClickPrev = () => setStep(STEPS.EMAIL_PASSWORD);

  return (
    <>
      <form onSubmit={onSubmitUserValues}>
        <input
          type="text"
          className="form-control"
          name="name"
          value={name}
          placeholder="이름"
          required
          onChange={onChangeUserValues}
        />
        <input
          type="file"
          className="form-control"
          name="profileImage"
          placeholder="Profile"
          onChange={onChangeUserValues}
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
