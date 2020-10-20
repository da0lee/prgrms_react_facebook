import React from 'react';

const ThumbCount = ({ postSeq, likes, onLikePost }) => {
  const handleLikeClick = (e) => {
    e.preventDefault();
    onLikePost(postSeq);
  };

  return (
    <button type="button" className="thumb-count" onClick={handleLikeClick}>
      <i className={likes ? 'far fa-thumbs-up on' : 'far fa-thumbs-up'}>{`${likes} 개`}</i>
    </button>
  );
};

export default React.memo(ThumbCount);
