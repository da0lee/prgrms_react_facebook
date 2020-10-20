import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import Header from '../components/header/Header';
import { get } from '../service/postService';

const DefaultLayout = ({ component: Component }) => {
  const [user, setUser] = useState({
    seq: 0,
    name: 'harry',
    profileImageUrl:
      'https://s3.ap-northeast-2.amazonaws.com/grepp-cloudfront/programmers_imgs/learn/course9872/instructor_harry.png',
    isLogin: true,
  });

  const [posts, setPosts] = useState(get());

  return (
    <Route
      render={(matchProps) => (
        <>
          <Header user={user} setUser={setUser} />
          <div className="posts container">
            <Component {...matchProps} user={user} posts={posts} setPosts={setPosts} />
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
