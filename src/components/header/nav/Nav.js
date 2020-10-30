import React from 'react';
import NavItem from './NavItem';
import Profile from './Profile';

const Nav = ({ user, onLogOut }) => {
  return (
    <>
      <ul className="nav">
        <NavItem to="/login" text="로그인" show={!user} />
        <NavItem to="/signup" text="회원가입" show={!user} />
        <Profile user={user} show={user} />
        <NavItem to="/login" text="로그아웃" show={user} onLogOut={onLogOut} />
      </ul>
    </>
  );
};

export default React.memo(Nav);
