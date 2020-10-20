import React from 'react';
import css from 'styled-jsx/css';
import Logo from './Logo';
import Nav from './nav/Nav';

const Header = ({ user, setUser }) => {
  // 로그아웃
  const handleLogOut = () => {
    setUser(undefined);
  };
  return (
    <>
      <nav className="navbar fixed-top bg-blue">
        <Logo />
        <Nav user={user} onLogOut={handleLogOut} />
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
