import React from 'react';
import css from 'styled-jsx/css';
import ThumbCount from './ThumbCount';
import CommentCount from './CommentCount';

const PostInfo = ({ post, onLikePost }) => {
  return (
    <>
      <div className="card-info">
        <ThumbCount post={post} onLikePost={onLikePost} />
        <CommentCount post={post} />
      </div>
      <style jsx>{StyledPostInfo}</style>
    </>
  );
};

const StyledPostInfo = css`
  :global(.card .card-info) {
    height: 20px;
  }
  :global(.card .card-info .thumb-count, .card .card-info .comment-count) {
    display: inline-block;
    margin-right: 24px;
    vertical-align: middle;
    font-size: 12px;
    cursor: pointer;
    padding: 0;
    border: none;
    background-color: transparent;
    transition: color ease-in-out 0.3s;
    transition: margin-top ease-in-out 0.2s;
  }
  :global(.card .card-info .thumb-count:hover, .card .card-info .comment-count:hover) {
    color: #007bff;
    margin-top: -3px;
  }
  :global(.card .card-info .thumb-count .on) {
    color: #007bff;
  }
`;

export default PostInfo;
