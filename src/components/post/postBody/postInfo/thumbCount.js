import React from 'react';

const ThumbCount = ({ post, onLikePost }) => {
  const { likes } = post;
  const handleLikeClick = (e) => {
    e.preventDefault();
    onLikePost(post.seq);
  };

  return (
    <button type="button" className="thumb-count" onClick={handleLikeClick}>
      <i className={likes ? 'far fa-thumbs-up on' : 'far fa-thumbs-up'}>{`${likes} 개`}</i>
    </button>
  );
};

export default ThumbCount;
