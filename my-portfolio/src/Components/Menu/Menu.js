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
      <a className="navbar-brand" href="#headerwrap">Mirza Sisic</a>
    </div>
    <div className="navbar-collapse collapse">
      <ul className="nav navbar-nav navbar-right">
        <li className="active"><a href="#headerwrap">Home</a></li>
        <li><a href="#aboutwrap">About</a></li>
        <li><a href="#workwrap">Projects</a></li>
        <li><a href="#Recommendations">Recommendations</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="https://juniorlearnstocode.blogspot.ba" target="_blank" rel="noopener noreferrer">Blog</a></li>
      </ul>
    </div>
  </div>
</div>
);

export default Menu;

