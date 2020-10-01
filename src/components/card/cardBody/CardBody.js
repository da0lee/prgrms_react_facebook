import React, { Component } from 'react';
import css from 'styled-jsx/css';
import CardInfo from './cardInfo/CardInfo';

const CardBody = ({ post }) => {
  const { writer, createAt, contents } = post;
  const { name } = writer;

  return (
    <>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <h6 className="card-subtitle text-muted">{createAt}</h6>
        <p className="card-text">{contents}</p>
        <hr />
        <CardInfo post={post} />
      </div>
      <style jsx>{StyledCardBody}</style>
    </>
  );
};

const StyledCardBody = css`
  .card .card-body {
    padding: 40px;
  }
  .card .card-text {
    padding-top: 20px;
    white-space: pre-wrap;
  }
`;

export default CardBody;
