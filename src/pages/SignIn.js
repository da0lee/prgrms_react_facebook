import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import apis from '../service/apis/index';

const SignIn = ({ user, setUser, users, errors, onChangeUsers, history }) => {
  const handleSubmitSignin = async (e) => {
    e.preventDefault();
    try {
      const res = await apis.authApi.signIn({
        principal: users.email,
        credentials: String(users.password),
      });
      localStorage.setItem('apiKey', 'Bearer ' + res.apiToken);
      getUser(user);
      history.push('/');
    } catch (error) {
      alert(error.message);
    }
  };

  const getUser = async () => {
    try {
      const result = await apis.usersApi.getMyInfo();
      setUser(result);
      return result;
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="sign container">
      <h1 className="text-center">로그인</h1>
      <form onSubmit={handleSubmitSignin}>
        <div className="input-and-err">
          <input
            className="form-control"
            placeholder="이메일"
            name="email"
            value={users.email}
            onChange={onChangeUsers}
            required
          />
          <span className={errors.email ? 'err' : 'err on'}>이메일 형식으로 입력해주세요.</span>
        </div>
        <div className="input-and-err">
          <input
            type="password"
            className="form-control"
            placeholder="비밀번호"
            name="password"
            value={users.password}
            onChange={onChangeUsers}
            required
          />
          <span className={errors.password ? 'err' : 'err on'}>영문, 숫자를 포함해 8자리 이상 입력하세요.</span>
        </div>
        <button className="btn btn-lg btn-primary btn-block" type="submit">
          로그인
        </button>
      </form>
      <p className="text-help text-center">
        계정이 필요하신가요?{' '}
        <Link className="text-center new-account" to="/signup">
          계정 만들기
        </Link>
      </p>
    </div>
  );
};

export default SignIn;