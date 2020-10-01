import React, { Component } from 'react';

class CommentCount extends Component {
  render() {
    return (
      <span className="comment-count">
        <i className="far fa-comment-alt">3 개</i>
      </span>
    );
  }
}

export default CommentCount;
