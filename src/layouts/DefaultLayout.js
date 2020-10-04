import React from 'react';
import { Route } from 'react-router-dom';
import Header from '../components/header/Header';

const DefaultLayout = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <>
          <Header />
          <div className="posts container">
            <Component {...props} />
          </div>
        </>
      )}
    />
  );
};

export default DefaultLayout;
