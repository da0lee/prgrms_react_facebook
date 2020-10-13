import React from 'react';
import css from 'styled-jsx/css';

const PostBtn = ({ type }) => {
  return (
    <>
      <button type="submit" className="btn btn-primary">
        {type === 'post' ? '공유하기' : '댓글달기'}
      </button>
      <style jsx>{StyledPostBtn}</style>
    </>
  );
};

const StyledPostBtn = css`
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

export default PostBtn;
