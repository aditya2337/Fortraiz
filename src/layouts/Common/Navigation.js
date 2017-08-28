import React from "react";
import images from "../../config/images";

const Navigation = props =>
  <nav className='w-100 center absolute'>
    <div className='dt mw9 center w-100'>
      <div className="dtc w2 v-mid pa3">
        <a
          href="/"
          style={{ height: "2.5rem" }}
          className="dib pa1 ba b--white-90 w4 white-70 pointer link grow-large"
        >
          <img src={images.logo} alt="logo" className="h-100 w-100" />
        </a>
      </div>
      <div className="dtc v-mid tr pa3">
        <a
          className="f6 fw4 hover-white no-underline white-70 pointer dn dib-ns pv2 ph3"
          href="/"
        >
          How it Works
        </a>
        <a
          className="f6 fw4 hover-white no-underline white-70 pointer dn dib-ns pv2 ph3"
          href="/"
        >
          Pricing
        </a>
        <a
          className="f6 fw4 hover-white no-underline white-70 pointer dn dib-l pv2 ph3"
          href="/"
        >
          About
        </a>
        <a
          className="f6 fw4 hover-white no-underline white-70 pointer dn dib-l pv2 ph3"
          href="/"
        >
          Careers
        </a>
        <a
          className="f6 fw4 hover-white no-underline white-70 pointer dib ml2 pv2 ph3 ba grow-large"
          href="/"
        >
          Contact Us
        </a>
      </div>
    </div>
  </nav>;

export default Navigation;
