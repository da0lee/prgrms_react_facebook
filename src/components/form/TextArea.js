import React from 'react';
import css from 'styled-jsx/css';

const TextArea = ({ placeholder }) => {
  return (
    <>
      <textarea className="form-control input-lg" placeholder={placeholder} spellCheck="false"></textarea>
      <style jsx>{StyledTextArea}</style>
    </>
  );
};

const StyledTextArea = css`
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
export default TextArea;
