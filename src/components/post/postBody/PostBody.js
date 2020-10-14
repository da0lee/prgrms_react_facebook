import React, { Component } from 'react';
import css from 'styled-jsx/css';
import PostInfo from './postInfo/PostInfo';
import { DateCreated } from '../../../utils/Helper';

const PostBody = ({ post, onLikePost }) => {
  const { writer, createAt, contents } = post;
  const { name } = writer;

  return (
    <>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <h6 className="card-subtitle text-muted">{DateCreated(createAt)}</h6>
        <p className="card-text">{contents}</p>
        <hr />
        <PostInfo post={post} onLikePost={onLikePost} />
      </div>
      <style jsx>{StyledPostBody}</style>
    </>
  );
};

const StyledPostBody = css`
  :global(.card .card-body) {
    padding: 40px;
  }
  :global(.card .card-text) {
    padding-top: 20px;
    white-space: pre-wrap;
  }
`;

export default PostBody;
