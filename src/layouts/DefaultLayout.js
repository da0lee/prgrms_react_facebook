import React from 'react';
import { Route } from 'react-router-dom';
import Header from '../components/header/Header';

const DefaultLayout = ({ component: Component, user, onLogOut, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <>
          <Header user={user} onLogOut={onLogOut} />
          <div className="posts container">
            <Component {...props} {...rest} />
          </div>
        </>
      )}
    />
  );
};

export default DefaultLayout;
