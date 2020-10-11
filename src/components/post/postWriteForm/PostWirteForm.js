import React, { useState, useCallback, useRef } from 'react';
import css from 'styled-jsx/css';
import PostBtn from './PostBtn';
import PostTextArea from './PostTextArea';

const PostWriteForm = ({ onInsertPost }) => {
  const [contents, setContents] = useState();

  const onContentsChange = useCallback((e) => {
    setContents(e.target.value);
  }, []);

  const onContentsSubmit = useCallback(
    (e) => {
      e.preventDefault();
      onInsertPost(contents);
      setContents('');
    },
    [onInsertPost, contents]
  );

  return (
    <>
      <form className="write-form" onSubmit={onContentsSubmit}>
        <PostTextArea onInsertPost={onInsertPost} contents={contents} onContentsChange={onContentsChange} />
        <PostBtn />
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
