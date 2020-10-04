import React from 'react';
import css from 'styled-jsx/css';

const WriteBtn = ({ btnText }) => {
  return (
    <>
      <button type="submit" className="btn btn-primary">
        {btnText}
      </button>
      <style jsx>{StyledBtn}</style>
    </>
  );
};

const StyledBtn = css`
  :global(button.btn) {
    float: right;
    margin-bottom: 0;
    margin-top: 16px;
    background-color: #3b5999;
    color: #fffffe;
    border: none;
    font-weight: 800;
  }
`;

export default WriteBtn;
