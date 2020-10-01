import React from 'react';
import { Route } from 'react-router-dom';
import Header from '../components/header/Header';

const DefaultLayout = ({ component: Component, className, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <>
          <Header />
          <div className={className ? 'container ' + className : 'container'}>
            <Component {...props} />
          </div>
        </>
      )}
    />
  );
};

export default DefaultLayout;
