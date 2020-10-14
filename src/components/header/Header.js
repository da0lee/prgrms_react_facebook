import React from 'react';
import css from 'styled-jsx/css';
import Logo from './Logo';
import Nav from './nav/Nav';

const Header = ({ user, onLogOut }) => {
  return (
    <>
      <nav className="navbar fixed-top bg-blue">
        <Logo />
        <Nav user={user} onLogOut={onLogOut} />
      </nav>
      <style jsx>{SteledNavbar}</style>
    </>
  );
};

const SteledNavbar = css`
  nav.fixed-top {
    height: 50px;
  }
  nav.navbar.bg-blue {
    background-color: #3b5999;
  }
`;

export default React.memo(Header);
