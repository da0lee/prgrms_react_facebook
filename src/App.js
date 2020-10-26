import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { DefaultLayout, PublicLayout } from './layouts';
import { Home, SignIn, SignUp, UserPostList } from './pages';
import apis from './service/apis';

const App = () => {
  const [user, setUser] = useState({
    seq: 0,
    name: 'harry',
    profileImageUrl:
      'https://s3.ap-northeast-2.amazonaws.com/grepp-cloudfront/programmers_imgs/learn/course9872/instructor_harry.png',
    isLogin: true,
  });

  const getUser = async () => {
    try {
      const result = await apis.usersApi.getMyInfo();
      setUser(result);
      return result;
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    getUser(user);
  }, []);
  console.log('user : ', user);

  // 로그아웃
  const handleLogOut = () => {
    setUser(null);
  };

  return (
    <BrowserRouter>
      <Switch>
        <PublicLayout path="/login" component={SignIn} />
        <PublicLayout path="/signup" component={SignUp} />
        <DefaultLayout path="/u/:name" component={UserPostList} />
        <DefaultLayout path="/" user={user} component={Home} onLogOut={handleLogOut} />
      </Switch>
      <style jsx global>{`
        * {
          box-sizing: border-box;
        }
        html,
        body {
          font-family: Dotum, '맑은 고딕', 'roboto', 'Helvetica Neue', Helvetica, Arial, '맑은 고딕', malgun gothic,
            '돋움', Dotum, sans-serif;
          color: #202b3d;
          background-color: #e9eaed;
          font-size: 12px;
          font-weight: 400;
          line-height: 1.5;
        }
        body {
          padding: 100px 0;
        }
        .container {
          max-width: 600px;
        }
      `}</style>
    </BrowserRouter>
  );
};

export default App;
