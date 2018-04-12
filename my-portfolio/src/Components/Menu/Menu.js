import React from 'react';

const Menu = () => (
  <div className="navbar navbar-default navbar-fixed-top" role="navigation">
  <div className="container">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <a className="navbar-brand" href="index.html">INSTANT</a>
    </div>
    <div className="navbar-collapse collapse">
      <ul className="nav navbar-nav navbar-right">
        <li className="active"><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="#works">Works</a></li>
      </ul>
    </div>
  </div>
</div>
);

export default Menu;

