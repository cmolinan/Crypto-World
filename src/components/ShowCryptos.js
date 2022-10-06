import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './showCryptos.css';

const ShowCryptos = () => {
  const cryptosFilterArray = useSelector((state) => state.stFilterCryptos);
  console.log('FILTER ARRAY:', cryptosFilterArray);

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
    <div className="mainCryptos">
      {cryptoDiv}
    </div>
  );
};

export default ShowCryptos;
