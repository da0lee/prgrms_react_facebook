import React from 'react';
import css from 'styled-jsx/css';

const PostTextArea = ({ contents, onContentsChange }) => {
  return (
    <>
      <textarea
        className="form-control input-lg"
        placeholder="무슨 생각을 하고 계신가요?"
        spellCheck="false"
        value={contents}
        onChange={onContentsChange}></textarea>
      <style jsx>{StyledPostTextArea}</style>
    </>
  );
};

const StyledPostTextArea = css`
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
export default PostTextArea;
