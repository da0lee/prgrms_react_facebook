import React, { Component } from 'react';
import { navInfo } from '../../../api/NavInfo.json';
import NavItem from './NavItem';

class Nav extends Component {
  render() {
    return (
      <>
        <ul className="nav">
          {navInfo.map((data) => (
            <NavItem key={data.id} {...data} />
          ))}
        </ul>
      </>
    );
  }
}

export default Nav;
