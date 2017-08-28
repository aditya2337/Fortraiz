import React from "react";
import { Route } from "react-router-dom";

const Layout = ({ component: Component, ...rest }) =>
  <Route
    {...rest}
    render={matchProps =>
      <div style={{ width: "85%" }} className="ml3">
        <Component {...matchProps} />
      </div>}
  />;

export default Layout;
