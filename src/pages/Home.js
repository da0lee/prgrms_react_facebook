import React from 'react';
import PostWirteForm from '../components/post/postWriteForm/PostWirteForm';
import Post from '../components/post/Post';

const Home = ({ user, posts, onInsertPost }) => {
  return (
    <>
      <PostWirteForm user={user} posts={posts} onInsertPost={onInsertPost} />
      {posts.map((post) => (
        <Post key={post.seq} user={user} post={post} onInsertPost={onInsertPost} />
      ))}
    </>
  );
};

export default Home;
