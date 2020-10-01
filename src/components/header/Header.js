import React, { Component } from 'react';
import css from 'styled-jsx/css';
import Logo from './Logo';
import Nav from './nav/Nav';

class Header extends Component {
  render() {
    return (
      <>
        <nav className="navbar fixed-top bg-blue">
          <Logo />
          <Nav />
        </nav>
        <style jsx>{SteledNavbar}</style>
      </>
    );
  }
}

const SteledNavbar = css`
  nav.fixed-top {
    height: 50px;
  }
  nav.navbar.bg-blue {
    background-color: #3b5999;
  }
`;

export default Header;
