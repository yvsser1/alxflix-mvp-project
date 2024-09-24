import React from 'react';
import { Link } from 'react-router-dom';


const NavBarM = () => {

  const appPages = [
    { name: "Home", path: "/" },
    { name: "My Watchlist", path: "/mylist"},
    { name: "Search", path: "/search"},
  ];
  

  return (
    <div className="navbar-menu">
      <input className="checkbox-hm" type="checkbox" name="nb-menu" id="nb-menu" />
      <div className="navbar-lines">
        <span className="navbar-lines__line navbar-lines--line1"></span>
        <span className="navbar-lines__line navbar-lines--line2"></span>
        <span className="navbar-lines__line navbar-lines--line3"></span>
      </div>
      <ul className="navbar__menu-items">
        {appPages.map((page) => (
          <Link to={page.path} key={page.name} className='menu-items__link'>
            <li key={page.name}>{page.name}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default NavBarM;
