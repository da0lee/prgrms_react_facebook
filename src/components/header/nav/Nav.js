import React from 'react';
import { navInfo } from '../../../api/NavInfo.json';
import NavItem from './NavItem';

const Nav = () => {
  return (
    <>
      <ul className="nav">
        {navInfo.map((data) => (
          <NavItem key={data.id} {...data} />
        ))}
      </ul>
    </>
  );
};

export default Nav;
