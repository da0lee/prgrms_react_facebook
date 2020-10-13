import React from 'react';
import { Route } from 'react-router-dom';
import Header from '../components/header/Header';

const DefaultLayout = ({ component: Component, user, onLogOut, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <>
          <Header user={user} onLogOut={onLogOut} />
          <div className="posts container">
            <Component {...matchProps} {...rest} />
          </div>

          <style jsx global>
            {`
              .container {
                max-width: 600px;
              }
            `}
          </style>
        </>
      )}
    />
  );
};

export default DefaultLayout;
