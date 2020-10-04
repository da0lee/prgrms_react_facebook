import React, { useState, useCallback } from 'react';
import css from 'styled-jsx/css';
import PostBtn from '../form/PostBtn';
import PostTextArea from '../form/PostTextArea';

const PostWriteForm = ({ user, placeholder, btnText, onInsertPost }) => {
  const [contents, setContents] = useState();

  const onContentsChange = useCallback((e) => {
    setContents(e.target.value);
  }, []);

  const onContentsSubmit = useCallback(
    (e) => {
      e.preventDefault();
      localStorage.setItem('contents', contents);
      onInsertPost(contents);
      setContents('');
    },
    [onInsertPost, contents]
  );

  return (
    <>
      <form className="write-form" onSubmit={onContentsSubmit}>
        <PostTextArea
          placeholder={placeholder}
          onInsertPost={onInsertPost}
          contents={contents}
          onContentsChange={onContentsChange}
        />
        <PostBtn btnText={btnText} />
      </form>
      <style jsx>{StyledPostWriteForm}</style>
    </>
  );
};

const StyledPostWriteForm = css`
  .write-form {
    margin-bottom: 100px;
  }
`;

export default PostWriteForm;
