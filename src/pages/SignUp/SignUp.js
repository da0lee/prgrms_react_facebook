import React, { useState, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { valEmail, valPw, valPwCheck } from '../../utils/helper';
import apis from '../../service/apis/index';

const defaultProfileImage = 'https://slcp.lk/wp-content/uploads/2020/02/no-profile-photo.png';
const fileReader = new FileReader();

const SignUp = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [userName, setUserName] = useState('');
  const [profileImage, setProfileImage] = useState(defaultProfileImage);

  const [errEmail, setErrEmail] = useState(true);
  const [errPassword, setErrPassword] = useState(true);
  const [errpasswordCheck, setErrPasswordCheck] = useState(true);

  const refPassword = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'user-name':
        return [setUserName(value)];
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

  const handleFileChange = useCallback(
    (e) => {
      const file = e.target.files[0];
      if (!file.type.includes('image')) {
        e.preventDefault();
        e.target.value = '';
        throw new Error('이미지 파일만 업로드해주세요');
      }
      fileReader.onload = ({ target }) => {
        setProfileImage(target.result); // 이미지 url 변경
      };
      fileReader.readAsDataURL(file);
    },
    [fileReader, setProfileImage, profileImage]
  );

  const handleSubmit = (e, email, password, profileImage, name) => {
    e.preventDefault();
    alert('가입 되었습니다.');
    history.push('/');

    if (errEmail && errPassword && errpasswordCheck) {
      async (signUp) => {
        console.log('가입 성공!');
        try {
          await apis.usersApi.signUp({
            principal: email,
            credentials: password,
            name,
            profileImage,
          });
        } catch (error) {
          alert(error.message);
        }
      };
    }
  };

  return (
    <>
      <h1 className="text-center">계정 만들기</h1>
      <form className="signup container" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control"
          placeholder="이름"
          name="user-name"
          value={userName}
          onChange={handleChange}
          required
        />
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
        <input
          type="file"
          className="form-control"
          placeholder="Profile"
          accept="image/*"
          onChange={handleFileChange}
        />
        <button className="btn btn-lg btn-primary btn-block" type="submit">
          가입하기
        </button>
      </form>
      <p className="text-help text-center">
        이미 계정이 있으신가요?{' '}
        <Link className="text-center login-here" to="/login">
          로그인 하기
        </Link>
      </p>

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
    </>
  );
};

export default SignUp;
