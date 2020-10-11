import React from 'react';
import { Link } from 'react-router-dom';
import css from 'styled-jsx/css';

const NavItem = ({ to, text, action }) => {
  return (
    <>
      <li className="nav-item">
        <Link className="nav-link" to={to}>
          {text}
        </Link>
      </li>
      <style jsx>{StyledNavItem}</style>
    </>
  );
};

const StyledNavItem = css`
  :global(.nav .nav-item .nav-link) {
    color: white;
    font-weight: 800;
    font-size: 12px;
    cursor: pointer;
    line-height: 26px;
  }

  :global(.nav .nav-item .nav-link:hover) {
    color: rgba(255, 255, 255, 0.75);
  }

  :global(.nav-link > img) {
    width: 25px;
    height: 25px;
    border-radius: 100%;
    overflow: hidden;
    margin-right: 5px;
    font-size: 0;
  }
`;

export default NavItem;
