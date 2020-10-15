import React from 'react';
import PostForm from '../components/post/postForm/PostForm';
import Post from '../components/post/Post';

const Home = ({ posts, onAddPost, onAddComment, onLikePost }) => {
  return (
    <>
      <PostForm posts={posts} onAddPost={onAddPost} />
      {posts.map((post) => (
        <Post key={post.seq} post={post} onAddComment={onAddComment} onLikePost={onLikePost} />
      ))}
    </>
  );
};

export default Home;
