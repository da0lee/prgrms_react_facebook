import React from 'react';
import { Link } from 'react-router-dom';
import css from 'styled-jsx/css';

const Logo = () => {
  return (
    <>
      <Link to="/" className="navbar-brand">
        <i className="fab fa-facebook-square" aria-hidden="true"></i>
      </Link>
      <style jsx>{StyledLogo}</style>
    </>
  );
};

const StyledLogo = css`
  :global(.navbar-brand i.fa-facebook-square) {
    font-size: 27px;
    color: white;
  }
`;

export default React.memo(Logo);
