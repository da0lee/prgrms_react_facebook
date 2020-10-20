import React, { useState, useCallback, useRef } from 'react';
import css from 'styled-jsx/css';
import { useAutoFormHeight } from '../../../hooks/useAutoFormHeight';

const CommentForm = ({ seq, onAddComment }) => {
  const [comment, setComment] = useState();
  const RefCommentTextArea = useRef(null);
  const { handleResetSubmit } = useAutoFormHeight(RefCommentTextArea);

  const handleCommentsChange = useCallback((e) => {
    setComment(e.target.value);
  }, []);

  const handleCommentSubmit = useCallback(
    (e) => {
      e.preventDefault();
      onAddComment(seq, comment);
      handleResetSubmit(e);
      setComment('');
    },
    [onAddComment, comment, handleResetSubmit]
  );

  return (
    <>
      <form className="comment-form" onSubmit={handleCommentSubmit}>
        <textarea
          ref={RefCommentTextArea}
          className="form-control input-lg"
          placeholder="댓글을 입력하세요..."
          spellCheck="false"
          value={comment}
          onChange={handleCommentsChange}
        />
        <button type="submit" className="btn btn-primary">
          댓글달기
        </button>
      </form>
      <style jsx>{StyledCommentForm}</style>
    </>
  );
};

const StyledCommentForm = css`
  .comment-form {
    margin: 20px;
  }

  .write-form > textarea:focus {
    box-shadow: #999999 0 0 50px;
  }

  .comment-form > textarea.form-control {
    min-height: 20px;
    line-height: 20px;
    border-radius: 0.5rem;
    resize: none;
    overflow-y: hidden;
  }
  button.btn {
    float: right;
    margin-bottom: 0;
    margin-top: 16px;
    background-color: #3b5999;
    color: #fffffe;
    border: none;
    font-weight: 800;
  }
`;

export default CommentForm;
