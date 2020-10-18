import React from 'react';

const CommentCount = ({ comments }) => {
  return (
    <span className="comment-count">
      <i className="far fa-comment-alt">{comments} 개</i>
    </span>
  );
};

export default React.memo(CommentCount);
