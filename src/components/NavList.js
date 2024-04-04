// NavList.js
import React from 'react';
import { Link } from 'gatsby';

const NavList = () => {
  return (
    <div className="nav-list">
      <ul>
        <li>
          <Link to="/stills">south africa</Link>
        </li>
        <li>
          <Link to="/au">aruba</Link>
        </li>
        {/* Add more list items as needed */}
      </ul>
    </div>
  );
};

export default NavList;
