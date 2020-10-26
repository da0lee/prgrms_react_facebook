import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { get, set } from '../service/postService';
import Header from '../components/header/Header';

const DefaultLayout = ({ component: Component }) => {
  const [posts, setPosts] = useState(get());

  // 나중에 userService로 관리
  const [user, setUser] = useState({
    seq: 0,
    name: 'harry',
    profileImageUrl:
      'https://s3.ap-northeast-2.amazonaws.com/grepp-cloudfront/programmers_imgs/learn/course9872/instructor_harry.png',
    isLogin: true,
  });

  useEffect(() => {
    set(posts);
  }, [posts]);

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
            <Component {...matchProps} posts={posts} setPosts={setPosts} user={user} />
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
