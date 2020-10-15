import React, { useState, useCallback, useRef, useEffect } from 'react';
import css from 'styled-jsx/css';

const PostForm = (props) => {
  const { onAddPost } = props;

  const [contents, setContents] = useState('');
  const [textAreaHeight, setTextAreaHeight] = useState(minHeight);

  const RefTextArea = useRef(null);

  const { minHeight = 100, lineHeight = 20, placeholder = '무슨 생각을 하고 계신가요?' } = props;

  const handlePostChange = useCallback((e) => {
    setContents(e.target.value);
  }, []);

  const handlePostSubmit = useCallback(
    (e) => {
      e.preventDefault();
      onAddPost(contents);
      setContents('');
      setTextAreaHeight(minHeight);
    },
    [onAddPost, contents]
  );

  useEffect(() => {
    setTextAreaHeight(RefTextArea.current.scrollHeight);
  }, [contents]);

  return (
    <>
      <form className="write-form" onSubmit={handlePostSubmit}>
        <textarea
          ref={RefTextArea}
          className="form-control input-lg"
          placeholder={placeholder}
          spellCheck="false"
          value={contents}
          onChange={handlePostChange}
        />
        <button type="submit" className="btn btn-primary">
          공유하기
        </button>
      </form>

      <style jsx global>{`
        .write-form {
          margin-bottom: 100px;
        }
        .write-form > textarea.form-control {
          min-height: ${textAreaHeight < 100 ? 100 : textAreaHeight}px;
          line-height: ${lineHeight}px;
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
        .write-form > button.btn {
          float: right;
          margin-bottom: 0;
          margin-top: 16px;
          background-color: #3b5999;
          color: #fffffe;
          border: none;
          font-weight: 800;
        }
      `}</style>
    </>
  );
};

export default PostForm;
