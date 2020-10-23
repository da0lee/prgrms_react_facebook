import React from 'react';
import { STEPS } from '../../utils/helper';
import { valEmail, valPw, valPwCheck } from '../../utils/helper';

const EmailPasswordForm = ({ setStep }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(STEPS.PROFILE);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="input-and-err">
        <input className="form-control" placeholder="이메일" required />
        <span className="err on">유효한 이메일이 아닙니다.</span>
      </div>
      <div className="input-and-err">
        <input type="password" className="form-control" placeholder="비밀번호: 영문, 숫자 포함 8자리 이상" required />
        <span className="err on">영문, 숫자를 포함해 8자리 이상 입력하세요.</span>
      </div>
      <div className="input-and-err">
        <input type="password" className="form-control" placeholder="비밀번호 확인" required />
        <span className="err on">비밀번호가 일치하지 않습니다.</span>
      </div>

      <button className="btn btn-lg btn-primary btn-block" type="submit">
        다음
      </button>
    </form>
  );
};

export default EmailPasswordForm;
