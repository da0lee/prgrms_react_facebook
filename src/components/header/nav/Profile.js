import React from 'react';
import { Link } from 'react-router-dom';
import css from 'styled-jsx/css';
import toggle from '../../../hocs/toggle';

const Profile = (props) => {
  const { seq, profileImageUrl, name } = props.user;

  return (
    <li className="nav-item">
      <Link to={`/u/ ${seq}`} className="nav-link">
        {profileImageUrl ? <img src={profileImageUrl} alt="" /> : false} {name}
      </Link>
      <style jsx>{StyledProfile}</style>
    </li>
  );
};

const StyledProfile = css`
  :global(.nav-item img) {
    width: 25px;
    height: 25px;
    border-radius: 100%;
    overflow: hidden;
    margin-right: 5px;
  }
`;

export default React.memo(toggle(Profile));
