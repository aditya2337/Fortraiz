import React from 'react';
import { Route } from 'react-router-dom';
import Navigation from "./Navigation";
import HomepageHero from './HomepageHero';
import Footer from './Footer';

const Layout = ({ component: Component, ...rest }) =>
  <Route
    {...rest}
    render={matchProps =>
      <div>
        <Navigation />
        {(matchProps.location.pathname === '/') ? <HomepageHero /> : ''}
        <div className="mw9 pl3 pr3 center">
          <Component {...matchProps} />
        </div>
        <Footer />
      </div>}
  />;

export default Layout;
