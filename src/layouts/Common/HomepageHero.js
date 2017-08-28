import React from 'react';

const HomepageHero = props =>
  <div
    style={{
      backgroundImage: "url(http://mrmrs.github.io/photos/u/011.jpg)",
      height: "75vh"
    }}
    className="cover bg-left bg-center-l"
  >
    <div className="tc-l ph3 bg-black-80 w-100 h-100 flex justify-center items-center">
      <div className="tc-l ph3 w-100">
        <h1 className="f2 f1-l fw2 white-90 mb0 lh-title">
          This is your super impressive headline
        </h1>
        <h2 className="fw1 f3 white-80 mt3 mb4">
          Now a subheadline where explain your wonderful new startup even more
        </h2>
        <a
          className="f6 no-underline grow dib v-mid bg-blue white ba b--blue ph3 pv2 mb3 pointer"
          href="/"
        >
          Call to Action
        </a>
        <span className="dib v-mid ph3 white-70 mb3">or</span>
        <a
          className="f6 no-underline grow dib v-mid white ba b--white ph3 pv2 mb3 pointer"
          href=""
        >
          Secondary call to action
        </a>
      </div>
    </div>
  </div>;

export default HomepageHero;