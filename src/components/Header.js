import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { updateFilterCryptos } from '../redux/cryptos/filtercryptos';
import { asyncCryptosFromAPI } from '../redux/cryptos/cryptos';
import './header.css';
import LogoImg from '../assets/images/cryptoWorld.png';
import SearchImg from '../assets/images/searchIcon.png';

let firstTime = true;
let firstTimeFilter = true;

const Header = () => {
  const [txtToSearch, setTxtToSearch] = useState('');
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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!txtToSearch) return;
    const filteredCryptos = cryptosArray
      .filter((crypto) => crypto.name.toLowerCase().includes(txtToSearch.toLowerCase()));
    console.log(filteredCryptos);
    dispatch(updateFilterCryptos(filteredCryptos));
  };

  return (
    <header className="header.css">
      <div className="header_logo">
        <Link to="/">
          <img src={LogoImg} alt="logo" />
        </Link>
      </div>
      <form id="submit">
        <div className="form1">
          <span className="span-btn">
            <button
              type="submit"
              className="btn"
            >
              <img alt="search" className="search" src={SearchImg} />
            </button>
          </span>
          <input
            type="search"
            id="search"
            className="input"
            placeholder="Find a CryptoCurrency"
            autoComplete="off"
            value={txtToSearch}
            onChange={(e) => setTxtToSearch(e.target.value)}
            onKeyUp={handleSubmit}
          />
        </div>
      </form>

    </header>
  );
};

export default Header;
