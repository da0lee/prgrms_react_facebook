import React from 'react';
import PostWirteForm from '../components/post/postWriteForm/PostWirteForm';
import Post from '../components/post/Post';

const Home = ({ posts, onAddPost, onAddComment, onLikePost }) => {
  return (
    <>
      <PostWirteForm posts={posts} onAddPost={onAddPost} />
      {posts.map((post) => (
        <Post key={post.seq} post={post} onAddComment={onAddComment} onLikePost={onLikePost} />
      ))}
    </>
  );
};

export default Home;
