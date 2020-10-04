import React from 'react';

const CommentCount = ({ post }) => {
  const { commentList } = post;

  return (
    <span className="comment-count">
      <i className="far fa-comment-alt">{`${commentList.length} 개`}</i>
    </span>
  );
};

export default CommentCount;
