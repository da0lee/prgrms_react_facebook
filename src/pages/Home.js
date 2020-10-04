import React from 'react';
import PostWirteForm from '../components/post/PostWirteForm';
import Post from '../components/post/Post';

const Home = ({ user, posts, onInsertPost }) => {
  return (
    <>
      <PostWirteForm placeholder="무슨 생각을 하고 계신가요?" btnText="공유하기" onInsertPost={onInsertPost} />
      {posts.map((post) => (
        <Post key={post.seq} user={user} placeholder="댓글을 입력하세요..." btnText="댓글달기" post={post} />
      ))}
    </>
  );
};

export default Home;
