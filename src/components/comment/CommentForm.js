import React from 'react';
import css from 'styled-jsx/css';
import Btn from '../form/Btn';
import TextArea from '../form/TextArea';

const CommentForm = ({ placeholder, btnText }) => {
  return (
    <>
      <form className="comment-form">
        <TextArea placeholder={placeholder} />
        <Btn btnText={btnText} />
      </form>
      <style jsx>{StyledWriteForm}</style>
    </>
  );
};

const StyledWriteForm = css`
  .comment-form {
    margin: 20px;
  }
`;

export default CommentForm;
