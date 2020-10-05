import React from 'react';
import css from 'styled-jsx/css';

const PostBtn = () => {
  return (
    <>
      <button type="submit" className="btn btn-primary">
        공유하기
      </button>
      <style jsx>{StyledPostBtn}</style>
    </>
  );
};

const StyledPostBtn = css`
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

export default PostBtn;
