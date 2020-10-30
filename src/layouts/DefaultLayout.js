import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { getPostList, setPostList } from '../service/postService';
import Header from '../components/header/Header';

const DefaultLayout = ({ component: Component, user, setUser }) => {
  const [posts, setPosts] = useState(getPostList());

  useEffect(() => {
    setPostList(posts);
  }, [posts]);

  // 로그아웃
  const handleLogOut = () => {
    setUser(null);
    localStorage.removeItem('apiKey');
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
