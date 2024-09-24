import React from 'react';
import { Link } from 'react-router-dom';


const HamburgerMenu = () => {

  const appPages = [
    { name: "Home", path: "/" },
    { name: "My Watchlist", path: "/mylist"},
    { name: "Search", path: "/search"},
  ];
  

  return (
    <div className="hamburger-menu">
      <input className="checkbox-hm" type="checkbox" name="hm-menu" id="hm-menu" />
      <div className="hamburger-lines">
        <span className="hamburger-lines__line hamburger-lines--line1"></span>
        <span className="hamburger-lines__line hamburger-lines--line2"></span>
        <span className="hamburger-lines__line hamburger-lines--line3"></span>
      </div>
      <ul className="hamburger__menu-items">
        {appPages.map((page) => (
          <Link to={page.path} key={page.name} className='menu-items__link'>
            <li key={page.name}>{page.name}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default HamburgerMenu;
