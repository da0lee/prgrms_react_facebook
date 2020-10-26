import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { get, set } from '../service/postService';
import Header from '../components/header/Header';

const DefaultLayout = ({ component: Component, user, onLogOut }) => {
  const [posts, setPosts] = useState(get());

  useEffect(() => {
    set(posts);
  }, [posts]);

  return (
    <Route
      render={(matchProps) => (
        <>
          <Header user={user} onLogOut={onLogOut} />
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
