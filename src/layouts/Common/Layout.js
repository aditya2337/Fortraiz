import React from 'react';
import { Route } from 'react-router-dom';
import Navigation from './Navigation';

const Layout = ({ component: Component, ...rest }) =>
  <Route
    {...rest}
    render={matchProps =>
      <div>
        <Navigation />
        <div style={{ width: "85%" }} className="ml3">
          <Component {...matchProps} />
        </div>
      </div>}
  />;

export default Layout;
