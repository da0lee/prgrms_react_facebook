import React from 'react';
import PostForm from '../components/post/postForm/PostForm';
import Post from '../components/post/Post';

const Home = ({ posts, setPosts, user }) => {
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
    <>
      <PostForm posts={posts} onAddPost={handleAddPost} />
      {posts.map((post) => (
        <Post key={post.seq} post={post} onAddComment={handleAddComment} onLikePost={handleLikePost} />
      ))}
    </>
  );
};

export default Home;
