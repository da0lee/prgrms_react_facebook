import React, { useState, useCallback } from 'react';
import css from 'styled-jsx/css';
import Btn from '../form/Btn';
import TextArea from '../form/TextArea';

const WriteForm = ({ user, placeholder, btnText, onInsertPost }) => {
  const [contents, setContents] = useState();

  const onContentsChange = useCallback((e) => {
    setContents(e.target.value);
  }, []);

  const onContentsSubmit = useCallback(
    (e) => {
      e.preventDefault();
      onInsertPost(contents);
      setContents('전송!');
    },
    [onInsertPost, contents]
  );

  return (
    <>
      <form className="write-form" onSubmit={onContentsSubmit}>
        <TextArea
          placeholder={placeholder}
          onInsertPost={onInsertPost}
          contents={contents}
          onContentsChange={onContentsChange}
        />
        <Btn btnText={btnText} />
      </form>
      <style jsx>{StyledWriteForm}</style>
    </>
  );
};

const StyledWriteForm = css`
  .write-form {
    margin-bottom: 100px;
  }
`;

export default WriteForm;
