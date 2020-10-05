import React from 'react';
import css from 'styled-jsx/css';
import CommentList from '../comment/commentList/ComentList';
import PostBody from './postBody/PostBody';
import CommentWriteForm from '../comment/commentWriteForm/CommentWriteForm';

const Post = ({ user, post, onInsertPost }) => {
  return (
    <>
      <div className="card">
        <PostBody post={post} />
        <CommentList post={post} />
        <CommentWriteForm user={user} onInsertPost={onInsertPost} />
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
