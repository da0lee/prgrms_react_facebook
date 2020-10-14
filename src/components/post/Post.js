import React from 'react';
import css from 'styled-jsx/css';
import CommentList from '../comment/commentList/CommentList';
import PostBody from './postBody/PostBody';
import CommentForm from '../comment/CommentForm/CommentForm';

const Post = ({ post, onAddComment, onLikePost }) => {
  return (
    <>
      <div className="card">
        <PostBody post={post} onLikePost={onLikePost} />
        <CommentList post={post} />
        <CommentForm seq={post.seq} onAddComment={onAddComment} />
      </div>
      <style jsx>{StyledPost}</style>
    </>
  );
};

const StyledPost = css`
  .card {
    padding: 0;
    margin-top: 50px;
    border: none;
    border-radius: 0.5rem;
  }
`;

export default Post;
