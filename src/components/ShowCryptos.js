import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import './showCryptos.css';
import { updateFilterCryptos } from '../redux/cryptos/filtercryptos';
import SearchImg from '../assets/images/searchIcon.png';
import ForwardImg from '../assets/images/forward.png';

let txtTo = '';
const ShowCryptos = () => {
  const [txtToSearch, setTxtToSearch] = useState('');
  const cryptosFilterArray = useSelector((state) => state.stFilterCryptos);

  const cryptosArray = useSelector((state) => state.stCryptos);
  const dispatch = useDispatch();

  useEffect(() => {
    if (txtToSearch === '') {
      setTxtToSearch(txtTo);
      document.getElementById('search').value = txtTo;
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [txtTo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const filteredCryptos = cryptosArray
      .filter((crypto) => crypto.name.toLowerCase().includes(txtToSearch.toLowerCase()));
    dispatch(updateFilterCryptos(filteredCryptos));
    txtTo = txtToSearch;
  };

  const cryptoDiv = cryptosFilterArray.map((crypto) => (
    <div key={crypto.id} className="oneCryptoDiv">
      <div className="oneCryptoUp">
        <div className="divImgFwd0">
          <img
            className="imgForward"
            src={ForwardImg}
            alt="details"
          />
        </div>
        <h1>{crypto.name}</h1>
        <div className="divImgFwd">
          <Link to={`/Details/${crypto.id}`}>
            <img
              className="imgForward"
              src={ForwardImg}
              alt="details"
            />
          </Link>
        </div>
      </div>
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
          type="text"
          id="search"
          className="input"
          placeholder="Find a CryptoCurrency"
          autoComplete="off"
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
