import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SignTitle from '../components/sign/SignTitle';
import SignForm from '../components/sign/SignForm';
import SignHelp from '../components/sign/SignHelp';
import { loginInput } from '../api/LoginInput.json';

const Login = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [incorrectId, setIncorrectId] = useState(false);
  const [incorrectPw, setIncorrectPw] = useState(false);
  const [loginErr, setLoginErr] = useState(false);

  const handleIdChange = (e) => {
    setId(e.target.value);
    setIncorrectId(e.target.value.includes('@') ? false : true);
  };

  return (
    <div className="login container">
      <h1 className="text-center">로그인</h1>
      <form>
        <input
          type="email"
          className="form-control"
          placeholder="Email"
          value={id}
          onChange={handleIdChange}
          required
        />
        <input type="password" className="form-control" placeholder="Password" required />
        <Link className="btn btn-lg btn-primary btn-block" to={'/'}>
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
