import React from 'react';
import { Route } from 'react-router-dom';

const PublicLayout = ({ component: Component, className, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <div className={className ? 'container ' + className : 'container'}>
          <Component {...props} />
        </div>
      )}
    />
  );
};

export default PublicLayout;
