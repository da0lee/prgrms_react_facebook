import React, { Component } from 'react';

const ThumbCount = ({ post }) => {
  const { likes } = post;
  return (
    <button type="button" className="thumb-count">
      <i className="far fa-thumbs-up">{`${likes} 개`}</i>
    </button>
  );
};

export default ThumbCount;
