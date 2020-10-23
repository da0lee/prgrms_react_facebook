import React, { useState, useRef } from 'react';
import { valEmail, valPw, valPwCheck, STEPS } from '../../utils/helper';

const EmailPasswordForm = ({ setStep }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');

  const [errEmail, setErrEmail] = useState(true);
  const [errPassword, setErrPassword] = useState(true);
  const [errpasswordCheck, setErrPasswordCheck] = useState(true);

  const refPassword = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'email':
        return [setEmail(value), setErrEmail(valEmail(value))];

      case 'password':
        return [setPassword(value), setErrPassword(valPw(value))];

      case 'password-check':
        return [setPasswordCheck(value), setErrPasswordCheck(valPwCheck(refPassword.current.value, value))];

      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (errEmail && errPassword && errpasswordCheck) {
      console.log('가입');
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
          onChange={handleChange}
          required
        />
        <span className={errEmail ? 'err' : 'err on'}>유효한 이메일이 아닙니다.</span>
      </div>
      <div className="input-and-err">
        <input
          type="password"
          className="form-control"
          placeholder="비밀번호: 영문, 숫자 포함 8자리 이상"
          name="password"
          value={password}
          onChange={handleChange}
          ref={refPassword}
          required
        />
        <span className={errPassword ? 'err' : 'err on'}>영문, 숫자를 포함해 8자리 이상 입력하세요.</span>
      </div>
      <div className="input-and-err">
        <input
          type="password"
          className="form-control"
          placeholder="비밀번호 확인"
          name="password-check"
          value={passwordCheck}
          onChange={handleChange}
          required
        />
        <span className={errpasswordCheck ? 'err' : 'err on'}>비밀번호가 일치하지 않습니다.</span>
      </div>

      <button className="btn btn-lg btn-primary btn-block" type="submit">
        다음
      </button>
    </form>
  );
};

export default EmailPasswordForm;
