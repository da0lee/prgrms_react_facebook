import React, { useRef } from 'react';
import css from 'styled-jsx/css';

const CommentsTextArea = ({ comments, onAddComment }) => {
  let CommentRef = useRef('');

  return (
    <>
      <textarea
        className="form-control input-lg"
        placeholder="댓글을 입력하세요..."
        spellCheck="false"
        value={comments}
        onChange={onCommentChange}
        ref={CommentRef}></textarea>
      <style jsx>{StyledCommentsTextArea}</style>
    </>
  );
};

const StyledCommentsTextArea = css`
  :global(.write-form > textarea.form-control) {
    min-height: 100px;
    line-height: 20px;
    padding: 20px;
    font-size: 18px;
    resize: none;
    border: none;
    border-radius: 0.5rem;
    transition: box-shadow ease-in-out 1s;
  }
  :global(.write-form > textarea:focus) {
    box-shadow: #999999 0 0 50px;
  }

  :global(.comment-form > textarea.form-control) {
    min-height: 20px;
    line-height: 20px;
    border-radius: 0.5rem;
    resize: none;
  }
`;
export default CommentsTextArea;
