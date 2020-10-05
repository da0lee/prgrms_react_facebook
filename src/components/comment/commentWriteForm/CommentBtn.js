import React from 'react';
import css from 'styled-jsx/css';

const CommentBtn = () => {
  return (
    <>
      <button type="submit" className="btn btn-primary">
        댓글달기
      </button>
      <style jsx>{StyledCommentBtn}</style>
    </>
  );
};

const StyledCommentBtn = css`
  :global(button.btn) {
    float: right;
    margin-bottom: 0;
    margin-top: 16px;
    background-color: #3b5999;
    color: #fffffe;
    border: none;
    font-weight: 800;
  }
`;

export default CommentBtn;
