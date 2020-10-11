import React, { useState, useCallback } from 'react';
import css from 'styled-jsx/css';
import CommentBtn from './CommentBtn';
import CommentTextArea from './CommentTextArea';

const CommentWriteForm = ({ onInsertPost }) => {
  const [comments, setComments] = useState();

  const onCommentChange = useCallback((e) => {
    setComments(e.target.value);
    console.log(e.target.value);
  }, []);

  const onCommentSubmt = useCallback(
    (e) => {
      e.preventDefault();
      console.log('코멘트 : ' + e.target.value);
      onInsertPost(comments);
      setComments('');
    },
    [onInsertPost, comments]
  );

  return (
    <>
      <form className="comment-form" onSubmit={onCommentSubmt}>
        <CommentTextArea onInsertPost={onInsertPost} value={comments} onChange={onCommentChange} />
        <CommentBtn />
      </form>
      <style jsx>{StyledCommentWriteForm}</style>
    </>
  );
};

const StyledCommentWriteForm = css`
  .comment-form {
    margin: 20px;
  }
`;

export default CommentWriteForm;
