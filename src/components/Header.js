import React from 'react';
import { NavLink } from 'react-router-dom';
// import style from './header.module.css';
import style from './header.css';

const Header = () => (
  <header className={style.header_container}>
    <h3>Metrics WebApp</h3>
    <nav className={style.navlist}>
      <li className={style.navlink}><NavLink to="/" exact="true">BOOKS</NavLink></li>
    </nav>
  </header>
);

// <li className={style.navlink_l}><NavLink to="/categories" exact="true">CATEGORIES</NavLink></li>

export default Header;
