import React from 'react';

const CommentCount = ({ post }) => {
  const { comments } = post;

  return (
    <span className="comment-count">
      <i className="far fa-comment-alt">{comments} 개</i>
    </span>
  );
};

export default CommentCount;
