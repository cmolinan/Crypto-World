import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import './showCryptos.css';
import { updateFilterCryptos } from '../redux/cryptos/filtercryptos';
import SearchImg from '../assets/images/searchIcon.png';

const ShowCryptos = () => {
  const [txtToSearch, setTxtToSearch] = useState('');
  const cryptosFilterArray = useSelector((state) => state.stFilterCryptos);

  const cryptosArray = useSelector((state) => state.stCryptos);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (!txtToSearch) return;
    const filteredCryptos = cryptosArray
      .filter((crypto) => crypto.name.toLowerCase().includes(txtToSearch.toLowerCase()));
    dispatch(updateFilterCryptos(filteredCryptos));
  };

  const cryptoDiv = cryptosFilterArray.map((crypto) => (
    <div key={crypto.id} className="oneCryptoDiv">
      <h1>{crypto.name}</h1>
      <Link to={`/Details/${crypto.id}`}>
        <img
          className="image"
          src={crypto.image}
          alt={crypto.name}
        />
      </Link>
      <p>
        Curr. Price: $
        {crypto.current_price}
      </p>
    </div>
  ));

  return (
    <div className="mainDivDetails">
      <form id="submit">
        <img alt="search" className="search" src={SearchImg} />
        <input
          type="search"
          id="search"
          className="input"
          placeholder="Find a CryptoCurrency"
          autoComplete="off"
          value={txtToSearch}
          onChange={(e) => setTxtToSearch(e.target.value)}
          onKeyUp={handleSubmit}
          onClick={handleSubmit}
        />
      </form>
      <div className="mainCryptos">
        {cryptoDiv}
      </div>
    </div>
  );
};

export default ShowCryptos;
