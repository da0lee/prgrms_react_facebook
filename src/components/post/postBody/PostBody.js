import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import css from 'styled-jsx/css';
import PostInfo from './postInfo/PostInfo';
import { DateCreated } from '../../../utils/helper';

const PostBody = ({ post, onLikePost }) => {
  const { writer, createAt, contents } = post;
  const { name, profileImageUrl } = writer;

  return (
    <>
      <div className="card-body">
        <h5 className="card-title ">
          <Link to={`/u/${name}`} className="user-profile">
            <img src={profileImageUrl} alt="사용자 프로필사진" />
            {name}
          </Link>
        </h5>
        <h6 className="card-subtitle text-muted">{DateCreated(createAt)}</h6>
        <p className="card-text">{contents}</p>
        <hr />
        <PostInfo post={post} onLikePost={onLikePost} />
      </div>
      <style jsx>{StyledPostBody}</style>
    </>
  );
};

const StyledPostBody = css`
  img {
    width: 3rem;
    height: 3rem;
    border-radius: 100%;
    overflow: hidden;
    margin-right: 5px;
  }
  :global(.user-profile) {
    color: rgb(59, 89, 153);
  }
  :global(.user-profile:hover) {
    text-decoration: underline;
    cursor: pointer;
  }
  :global(.card .card-body) {
    padding: 40px;
  }
  :global(.card .card-text) {
    padding-top: 20px;
    white-space: pre-wrap;
  }
`;

export default React.memo(PostBody);
