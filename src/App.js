import React, { useState, useCallback, useEffect } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { DefaultLayout, PublicLayout } from './layouts';
import { Home, Login, SignUp } from './pages';
import { setLocalStorageData } from './utils/util';
import { USER_POSTS_KEY } from './utils/userPostsKey';
import PostMockStore from './utils/postMockStore';

const postMockStore = new PostMockStore();
const App = () => {
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

  // Post 작성
  const [posts, setPosts] = useState(postMockStore.getPostFromLS());

  const handleAddPost = (contents) => {
    const newPost = {
      seq: posts.length,
      writer: {
        seq: user.seq,
        name: user.name,
        profileImageUrl: user.profileImageUrl,
      },
      likes: 0,
      likesOfMe: false,
      contents,
      createAt: new Date(),
      comments: 0,
      commentList: [],
    };
    // newPost, posts 원배열 복사
    setPosts([newPost, ...posts]);
  };

  // 코멘트 작성
  const handleAddComment = (postSeq, contents) => {
    setPosts(
      posts.map((post) => {
        if (post.seq === postSeq) {
          const comment = {
            seq: post.commentList.length,
            writer: {
              seq: user.seq,
              name: user.name,
            },
            contents,
            createAt: new Date(),
          };
          return {
            // 새 코멘트가 가장 위에 가도록 commentList를 [ 새 코멘트, 원 코맨트 배열 ] 순으로 정의
            // Q 왜 ...post를 commentList, comment 밑으로 내리면 작동이 안되지?
            ...post,
            commentList: [comment, ...post.commentList],
            comments: post.commentList.length + 1,
          };
        }
        return post;
      })
    );
  };

  // 좋아요
  const handleLikePost = (postSeq) => {
    const newPosts = posts.splice(0);
    const idx = newPosts.findIndex((v) => v.seq === postSeq);
    const post = newPosts[idx];
    if (!post.likesOfMe) {
      post.likes += 1;
    } else {
      post.likes -= 1;
    }
    post.likesOfMe = !post.likesOfMe;
    setPosts(newPosts);
  };

  useEffect(() => {
    setLocalStorageData(USER_POSTS_KEY, posts);
  }, [posts]);

  return (
    <BrowserRouter>
      <Switch>
        <PublicLayout path="/login" component={Login} />
        <PublicLayout path="/signup" component={SignUp} />
        <DefaultLayout
          path="/"
          posts={posts}
          user={user}
          onLogOut={handleLogOut}
          onAddPost={handleAddPost}
          onAddComment={handleAddComment}
          onLikePost={handleLikePost}
          component={Home}
        />
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
