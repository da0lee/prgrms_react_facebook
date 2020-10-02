import React, { useState } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { DefaultLayout, PublicLayout } from './layouts';
import { Home, Login, SignUp } from './pages';
import { user as userInfo } from './api/User.json';
import { posts as postList } from './api/Posts.json';

const App = () => {
  const [user, setUSer] = useState(userInfo);
  const [posts, setPosts] = useState(postList);

  const HomePage = () => <Home user={user} posts={posts} />;
  return (
    <BrowserRouter>
      <Switch>
        <PublicLayout path="/login" component={Login} className="login" />
        <PublicLayout path="/signup" component={SignUp} className="signup" />
        <DefaultLayout path="/" component={HomePage} className="posts" />
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
