import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import Header from '../components/header/Header';

const DefaultLayout = ({ component: Component }) => {
  // 나중에 userService로 관리
  const [user, setUser] = useState({
    seq: 0,
    name: 'harry',
    profileImageUrl:
      'https://s3.ap-northeast-2.amazonaws.com/grepp-cloudfront/programmers_imgs/learn/course9872/instructor_harry.png',
    isLogin: true,
  });

  // 로그아웃
  const handleLogOut = () => {
    setUser(undefined);
  };

  return (
    <Route
      render={(matchProps) => (
        <>
          <Header user={user} onLogOut={handleLogOut} />
          <div className="posts container">
            <Component {...matchProps} user={user} />
          </div>

          <style jsx global>
            {`
              .container {
                max-width: 600px;
              }
            `}
          </style>
        </>
      )}
    />
  );
};

export default DefaultLayout;
