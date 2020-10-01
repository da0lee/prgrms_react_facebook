import React from 'react';
import css from 'styled-jsx/css';

const CommentItem = ({ comment }) => {
  const { writer, createAt, contents } = comment;
  const { name } = writer;
  return (
    <>
      <li className="comment">
        <div className="comment-info">
          <h6 className="comment-writer">{name}</h6>
          <div className="comment-datetime">{createAt}</div>
        </div>
        <p className="comment-text">{contents}</p>
      </li>
      <style jsx>{StyledCommentItem}</style>
    </>
  );
};

const StyledCommentItem = css`
  li.comment {
    padding: 20px 40px 24px;
    border-bottom: 1px solid #e6ecf5;
    background-color: #fafbfd;
    position: relative;
  }
  li.comment:first-child {
    border-top: 1px solid #e6ecf5;
  }
  li.comment .comment-text {
    padding-top: 20px;
  }
`;
export default CommentItem;
