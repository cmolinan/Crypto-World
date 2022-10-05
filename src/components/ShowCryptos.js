import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
// import Details from './Details';
import { asyncCryptosFromAPI } from '../redux/cryptos/cryptos';
import './showCryptos.css';

let firstTime = true;

const ShowCryptos = () => {
  const cryptosArray = useSelector((state) => state.stCryptos);
  console.log('ARRAY:', cryptosArray);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!firstTime) return;
    firstTime = false;
    dispatch((asyncCryptosFromAPI()));
  }, [dispatch]);

  const cryptoDiv = cryptosArray.map((crypto) => (
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
    <div className="mainCryptos">
      {cryptoDiv}
    </div>
  );
};

export default ShowCryptos;
