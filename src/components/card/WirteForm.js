import React from 'react';
import css from 'styled-jsx/css';
import Btn from '../form/Btn';
import TextArea from '../form/TextArea';

const WriteForm = ({ user, placeholder, btnText }) => {
  return (
    <>
      <form className="write-form">
        <TextArea placeholder={placeholder} />
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
