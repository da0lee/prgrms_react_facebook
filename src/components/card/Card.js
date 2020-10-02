import React from 'react';
import css from 'styled-jsx/css';
import CommentList from '../comment/ComentList';
import CardBody from './cardBody/CardBody';
import CommentForm from '../comment/CommentForm';

const Card = ({ user, placeholder, btnText, post }) => {
  return (
    <>
      <div className="card">
        <CardBody post={post} />
        <CommentList post={post} />
        <CommentForm user={user} placeholder={placeholder} btnText={btnText} />
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
