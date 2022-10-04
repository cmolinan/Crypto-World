import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import Details from './Details';
// import { Link } from 'react-router-dom';
import { asyncCryptosFromAPI } from '../redux/cryptos/cryptos';
import './showCryptos.css';

let firstTime = true;

const ShowCryptos = () => {
  const cryptosArray = useSelector((state) => state.stCryptos);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!firstTime) return;
    firstTime = false;
    dispatch((asyncCryptosFromAPI()));
  }, [dispatch]);

  const cryptoDiv = cryptosArray.map((crypto) => (
    <div key={crypto.id} className="oneCryptoDiv">
      <h1>{crypto.name}</h1>
      <a href={`/Details/${crypto.id}`}>
        <img
          className="image"
          src={crypto.image}
          alt={crypto.name}
        />
      </a>
      <p>
        Curr. Price: $
        {crypto.price}
      </p>
    </div>
  ));

  return (
    <div className="mainCryptos">
      {cryptoDiv}
    </div>
  );
};

export default ShowCryptos;

/* {cryptosArray.map((crypt) => (
  <Details
    key={crypt.id}
    crbook={book}
  />
))} */

// <Details
// key={book.id}
// book={book}
// />
