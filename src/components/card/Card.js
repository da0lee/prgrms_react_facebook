import React, { Component } from 'react';
import css from 'styled-jsx/css';
import CommentList from '../comment/ComentList';
import CardBody from './cardBody/CardBody';
import WirteForm from '../form/writeForm/WirteForm';

const Card = ({ className, placeholder, btnText, posts }) => {
  return (
    <>
      <div className="card">
        <CardBody posts={posts} />
        <CommentList posts={posts} />
        <WirteForm className={className} placeholder={placeholder} btnText={btnText} />
      </div>
      <style jsx>{StyledCard}</style>
    </>
  );
};

const StyledCard = css`
  .card {
    padding: 0;
    margin-top: 50px;
    border: none;
    border-radius: 0.5rem;
  }
`;

export default Card;
