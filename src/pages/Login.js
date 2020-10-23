import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { loginAPI } from '../config';
import { valEmail, valPw, valPwCheck } from '../utils/helper';

const Login = (props) => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [incorrectId, setIncorrectId] = useState(false);
  const [incorrectPw, setIncorrectPw] = useState(false);
  const [loginErr, setLoginErr] = useState(false);

  const handleId = (e) => {
    setId(e.target.value);
    setIncorrectId(e.target.value.includes('@') ? false : true);
  };

  const handlePw = (e) => {
    console.log(pw);
    const numbers = /[0-9]/;
    const spellings = /[a-zA-Z]/;

    if (!numbers.test(pw) || !spellings.test(pw) || pw.length < 8) {
      setIncorrectPw(true);
    } else if (numbers.test(pw) && spellings.test(pw) && pw.length >= 8) {
      setIncorrectPw(false);
    }
    setPw(e.target.value);
  };

  const handleLogin = () => {
    if (!incorrectId && !incorrectPw) {
      console.log('로그인에 성공하였습니다.');
      fetch(loginAPI, {
        method: 'POST',
        body: JSON.stringify({
          email: id,
          password: pw,
        }),
      }).then((res) => {
        if (!res.ok) {
          throw new Error();
        }
        props.history.push('/');
        return res.json();
      });
    }
  };

  return (
    <div className="login container">
      <h1 className="text-center">로그인</h1>
      <form>
        <input type="email" className="form-control" placeholder="Email" value={id} onChange={handleId} required />
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          value={pw}
          onChange={handlePw}
          required
        />
        <Link className="btn btn-lg btn-primary btn-block" to={'/'} onClick={handleLogin}>
          로그인
        </Link>
      </form>
      <p className="text-help text-center">
        계정이 필요하신가요?{' '}
        <Link className="text-center new-account" to="/signup">
          계정 만들기
        </Link>
      </p>

      <style jsx global>{`
        .login form {
          max-width: 320px;
          padding: 8px;
          margin: 0 auto;
        }
        .login input.form-control {
          font-size: 16px;
          height: auto;
          padding: 10px;
        }
        .login button.btn {
          background-color: #3b5999;
          color: #fffffe;
          font-weight: 800;
          border-color: unset;
          margin-top: 10px;
        }
        .login .text-help {
          margin-top: 10px;
        }
        .login .new-account {
          font-weight: 900;
          color: #3a5999;
        }
      `}</style>
    </div>
  );
};

export default Login;
