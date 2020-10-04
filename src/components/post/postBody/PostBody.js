import React, { Component } from 'react';
import css from 'styled-jsx/css';
import PostInfo from './postInfo/PostInfo';

const PostBody = ({ post }) => {
  const { writer, createAt, contents } = post;
  const { name } = writer;

  const ElapsedTime = () => {
    const now = new Date();
    const timeValue = new Date(createAt);

    const betweenTime = Math.floor((now.getTime() - timeValue.getTime()) / 1000 / 60);
    if (betweenTime < 1) return '방금 전';
    if (betweenTime < 60) {
      return `${betweenTime}분 전`;
    }

    const betweenTimeHour = Math.floor(betweenTime / 60);
    if (betweenTimeHour < 24) {
      return `${betweenTimeHour}시간 전`;
    }

    const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
    if (betweenTimeDay < 365) {
      return `${betweenTimeDay}일 전`;
    }

    return `${Math.floor(betweenTimeDay / 365)}년 전`;
  };

  return (
    <>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <h6 className="card-subtitle text-muted">{ElapsedTime()}</h6>
        <p className="card-text">{contents}</p>
        <hr />
        <PostInfo post={post} />
      </div>
      <style jsx>{StyledPostBody}</style>
    </>
  );
};

const StyledPostBody = css`
  :global(.card .card-body) {
    padding: 40px;
  }
  :global(.card .card-text) {
    padding-top: 20px;
    white-space: pre-wrap;
  }
`;

export default PostBody;
