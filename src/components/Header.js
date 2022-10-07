import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { updateFilterCryptos } from '../redux/cryptos/filtercryptos';
import { asyncCryptosFromAPI } from '../redux/cryptos/cryptos';
import './header.css';
import LogoImg from '../assets/images/cryptoWorld.png';

let firstTime = true;
let firstTimeFilter = true;

const Header = () => {
  const cryptosArray = useSelector((state) => state.stCryptos);
  const dispatch = useDispatch();

  if (firstTimeFilter && !firstTime) {
    firstTimeFilter = false;
    dispatch(updateFilterCryptos(cryptosArray));
  }

  useEffect(() => {
    if (!firstTime) return;
    firstTime = false;
    dispatch((asyncCryptosFromAPI()));
  }, [dispatch]);

  return (
    <header className="header_container">
      <div className="header_logo">
        <Link to="/">
          <img src={LogoImg} alt="logo" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
