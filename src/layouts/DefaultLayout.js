import React, { useState, useEffect } from 'react';
import { Route, useHistory } from 'react-router-dom';
import { get, set } from '../service/postService';
import apis from '../service/apis/index';
import Header from '../components/header/Header';

const DefaultLayout = ({ component: Component, user, setUser }) => {
  const [posts, setPosts] = useState(get());
  const history = useHistory();

  useEffect(() => {
    set(posts);
  }, [posts]);

  // 로그아웃
  // const handleLogOut = () => {
  //   setUser(undefined);
  // };
  const handleLogOut = async () => {
    setUser(null);
    try {
      const result = await apis.usersApi.getMyInfo();
      history.push('/login');
      return result;
    } catch (error) {
      alert(error.message);
    }
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
