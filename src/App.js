import React, { useState, useCallback, useRef } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { DefaultLayout, PublicLayout } from './layouts';
import { Home, Login, SignUp } from './pages';
import { user as userInfo } from './api/User.json';
import { posts as postList } from './api/Posts.json';

const App = () => {
  const [user, setUser] = useState(userInfo);

  // Post 작성
  const [posts, setPosts] = useState([]);
  const nextSeq = useRef(posts.length + 1);
  const createAt = new Date().toString();

  const onInsertPost = useCallback(
    (contents) => {
      const post = {
        seq: nextSeq.current,
        writer: {
          seq: 1,
          name,
        },
        contents,
        createAt: createAt,
        likes: 0,
        comments: 0,
        likesOfMe: false,
        commentList: [],
      };
      const getcontents = localStorage.getItem('contents');
      setPosts(posts.concat(post));
      nextSeq.current += 1;
    },
    [posts]
  );

  const HomePage = () => <Home user={user} posts={posts} onInsertPost={onInsertPost} />;
  return (
    <BrowserRouter>
      <Switch>
        <PublicLayout path="/login" component={Login} />
        <PublicLayout path="/signup" component={SignUp} />
        <DefaultLayout path="/" component={HomePage} />
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
