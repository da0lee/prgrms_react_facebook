import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import Header from '../components/header/Header';
import { set, get } from '../service/postService';

const DefaultLayout = ({ component: Component }) => {
  const [user, setUser] = useState({
    seq: 0,
    name: 'harry',
    profileImageUrl:
      'https://s3.ap-northeast-2.amazonaws.com/grepp-cloudfront/programmers_imgs/learn/course9872/instructor_harry.png',
    isLogin: true,
  });

  const [posts, setPosts] = useState(get());

  useEffect(() => {
    set(posts);
  }, [posts]);

  console.log(posts);
  // 로그아웃
  const handleLogOut = () => {
    setUser(undefined);
  };

  // Post 작성
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
    setPosts([newPost, ...posts]);
  };

  // Comment 작성
  const handleAddComment = (postSeq, contents) => {
    const newPosts = [...posts];
    const idx = newPosts.findIndex((v) => v.seq === postSeq);
    const post = newPosts[idx];

    post.commentList = [
      {
        seq: post.commentList.length,
        writer: user,
        contents,
        createAt: new Date(),
      },
      ...post.commentList,
    ];
    console.log(post);
    post.comments = post.commentList.length;
    setPosts(newPosts);
  };

  // 좋아요
  const handleLikePost = (postSeq) => {
    const newPosts = [...posts];
    const idx = newPosts.findIndex((v) => v.seq === postSeq);
    const post = newPosts[idx];
    !post.likesOfMe ? (post.likes += 1) : (post.likes -= 1);
    post.likesOfMe = !post.likesOfMe;
    setPosts(newPosts);
  };

  return (
    <Route
      render={(matchProps) => (
        <>
          <Header user={user} onLogOut={handleLogOut} />
          <div className="posts container">
            <Component
              {...matchProps}
              posts={posts}
              onLogOut={handleLogOut}
              onAddPost={handleAddPost}
              onAddComment={handleAddComment}
              onLikePost={handleLikePost}
            />
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
