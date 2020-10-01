import React, { Component } from 'react';

class ThumbCount extends Component {
  render() {
    return (
      <button type="button" className="thumb-count">
        <i className="far fa-thumbs-up">4 개</i>
      </button>
    );
  }
}

export default ThumbCount;
