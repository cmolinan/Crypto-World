import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './header.css';
import Logo from '../assets/images/cryptoWorld.png';

const Header = () => (
  <header className="header.css">
    <div className="header_logo">
      <img src={Logo} alt="logo" />
    </div>
    <nav className={style.navlist}>
      <li className={style.navlink}><NavLink to="/" exact="true">CRYPTO WORLD</NavLink></li>
    </nav>
  </header>
);

export default Header;
