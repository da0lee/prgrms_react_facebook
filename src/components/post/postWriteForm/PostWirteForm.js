import React, { useState, useCallback } from 'react';
import css from 'styled-jsx/css';

const PostWriteForm = ({ onAddPost }) => {
  const [contents, setContents] = useState();

  const handlePostChange = useCallback((e) => {
    setContents(e.target.value);
  }, []);

  const handlePostSubmit = useCallback(
    (e) => {
      e.preventDefault();
      onAddPost(contents);
      setContents('');
    },
    [onAddPost, contents]
  );

  return (
    <>
      <form className="write-form" onSubmit={handlePostSubmit}>
        <textarea
          className="form-control input-lg"
          placeholder="무슨 생각을 하고 계신가요?"
          spellCheck="false"
          value={contents}
          onChange={handlePostChange}
        />
        <button type="submit" className="btn btn-primary">
          공유하기
        </button>
      </form>
      <style jsx>{StyledPostWriteForm}</style>
    </>
  );
};

const StyledPostWriteForm = css`
  .write-form {
    margin-bottom: 100px;
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

export default PostWriteForm;
