import React from 'react';
import NavItem from './NavItem';

const Nav = ({ user }) => {
  return (
    <>
      <ul className="nav">
        <NavItem to="/login" text="로그인" show={!user} />
        <NavItem to="/signup" text="회원가입" show={!user} />
        <NavItem to="/logout" text="로그아웃" show={user} />
      </ul>
    </>
  );
};

export default Nav;
