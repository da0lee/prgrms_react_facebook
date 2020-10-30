import React from 'react';
import { STEPS } from './helper';

const EmailPasswordForm = ({ setStep, userValues, errors, onChangeUserValues }) => {
  const { email, password, passwordCheck } = userValues;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (errors.email && errors.password && errors.passwordCheck) {
      setStep(STEPS.PROFILE);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-and-err">
        <input
          className="form-control"
          placeholder="이메일"
          name="email"
          value={email}
          onChange={onChangeUserValues}
          required
        />
        <span className={errors.email ? 'err' : 'err on'}>유효한 이메일이 아닙니다.</span>
      </div>
      <div className="input-and-err">
        <input
          type="password"
          className="form-control"
          placeholder="비밀번호: 영문, 숫자 포함 8자리 이상"
          name="password"
          value={password}
          onChange={onChangeUserValues}
          required
        />
        <span className={errors.password ? 'err' : 'err on'}>영문, 숫자를 포함해 8자리 이상 입력하세요.</span>
      </div>
      <div className="input-and-err">
        <input
          type="password"
          className="form-control"
          placeholder="비밀번호 확인"
          name="passwordCheck"
          value={passwordCheck}
          onChange={onChangeUserValues}
          required
        />
        <span className={errors.passwordCheck ? 'err' : 'err on'}>비밀번호가 일치하지 않습니다.</span>
      </div>

      <button className="btn btn-lg btn-primary btn-block" type="submit">
        다음
      </button>
    </form>
  );
};

export default EmailPasswordForm;
