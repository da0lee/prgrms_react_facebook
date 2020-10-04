import React from 'react';
import css from 'styled-jsx/css';
import PostBtn from '../form/PostBtn';
import PostTextArea from '../form/PostTextArea';

const CommentForm = ({ placeholder, btnText }) => {
  return (
    <>
      <form className="comment-form">
        <PostTextArea placeholder={placeholder} />
        <PostBtn btnText={btnText} />
      </form>
      <style jsx>{StyledCommentForm}</style>
    </>
  );
};

const StyledCommentForm = css`
  .comment-form {
    margin: 20px;
  }
`;

export default CommentForm;
