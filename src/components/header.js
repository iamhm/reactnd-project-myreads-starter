import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="app-header">
      <div className="app-header-highlight">
        <h1 className="app-header-title">MyReads</h1>

        <div className="app-header-nav">
          <span className="glyphicon glyphicon-home" aria-hidden="true"></span>
          &nbsp;
          <Link to="/">Home</Link>
          &nbsp; || &nbsp;
          <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
          &nbsp;
          <Link to="/search">Search</Link>
        </div>
      </div>
    </div>
  );
}

export default Header;