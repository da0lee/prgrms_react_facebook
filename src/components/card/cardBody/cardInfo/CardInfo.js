import React, { Component } from 'react';
import css from 'styled-jsx/css';
import ThumbCount from './thumbCount';
import CommentCount from './CommentCount';

class CardInfo extends Component {
  render() {
    return (
      <>
        <div className="card-info">
          <ThumbCount />
          <CommentCount />
        </div>
        <style jsx>{StyledCardInfo}</style>
      </>
    );
  }
}

const StyledCardInfo = css`
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

export default CardInfo;
