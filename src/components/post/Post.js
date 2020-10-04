import React from 'react';
import css from 'styled-jsx/css';
import CommentList from '../comment/ComentList';
import PostBody from './postBody/PostBody';
import CommentForm from '../comment/CommentForm';

const Post = ({ user, placeholder, btnText, post }) => {
  return (
    <>
      <div className="card">
        <PostBody post={post} />
        <CommentList post={post} />
        <CommentForm user={user} placeholder={placeholder} btnText={btnText} />
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
