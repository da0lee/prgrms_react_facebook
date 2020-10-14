import React, { useState, useCallback } from 'react';
import css from 'styled-jsx/css';

const CommentForm = ({ seq, onAddComment }) => {
  const [comment, setComment] = useState();

  const handleCommentsChange = useCallback((e) => {
    setComment(e.target.value);
  }, []);

  const handleCommentSubmit = useCallback(
    (e) => {
      e.preventDefault();
      onAddComment(seq, comment);
      setComment('');
    },
    [onAddComment, comment]
  );

  return (
    <>
      <form className="comment-form" onSubmit={handleCommentSubmit}>
        <textarea
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
  .write-form > textarea.form-control {
    min-height: 100px;
    line-height: 20px;
    padding: 20px;
    font-size: 18px;
    resize: none;
    border: none;
    border-radius: 0.5rem;
    transition: box-shadow ease-in-out 1s;
  }
  .write-form > textarea:focus {
    box-shadow: #999999 0 0 50px;
  }

  .comment-form > textarea.form-control {
    min-height: 20px;
    line-height: 20px;
    border-radius: 0.5rem;
    resize: none;
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
