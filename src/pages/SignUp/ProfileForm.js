import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { STEPS } from '../../utils/helper';
import apis from '../../service/apis/index';

const defaultProfileImage = 'https://slcp.lk/wp-content/uploads/2020/02/no-profile-photo.png';
const fileReader = new FileReader();

const ProfileForm = ({ setStep, history }) => {
  const [name, setName] = useState('');
  const [profileImage, setProfileImage] = useState(defaultProfileImage);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleFileChange = useCallback(
    (e) => {
      const file = e.target.files[0];
      console.log(file);
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

    async (signUp) => {
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
  };

  const handleClickPrev = () => setStep(STEPS.EMAIL_PASSWORD);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control"
          placeholder="이름"
          name={name}
          value={name}
          onChange={handleChange}
          required
        />
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
