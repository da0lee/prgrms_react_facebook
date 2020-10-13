import React, { Component } from 'react';

const ThumbCount = ({ post, onLikePost }) => {
  const { likes } = post;
  console.log(post);
  const handleLikeClick = (e) => {
    console.log(post.seq);
    e.preventDefault();
    onLikePost(post.seq);
  };

  return (
    <button type="button" className="thumb-count" onClick={handleLikeClick}>
      <i className="far fa-thumbs-up">{`${likes} 개`}</i>
    </button>
  );
};

export default ThumbCount;
