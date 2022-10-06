import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './details.css';
// import SearchImg from '../assets/images/searchIcon.png';

const Details = () => {
  const { id } = useParams();
  const cryptosArray = useSelector((state) => state.stCryptos);

  const navigate = useNavigate();

  let data = cryptosArray.filter((obj) => obj.id === id);
  data = data ? data[0] : null; // or undefined

  const data2 = new Intl.NumberFormat();

  console.log(cryptosArray, id, data);

  /* eslint-disable consistent-return */
  const renderData = () => {
    if (data) {
      return (
        <div className="detail_div11">
          <div className="header_lo1111go">
            <button type="button" onClick={() => navigate(-1)}>Go back</button>
          </div>
          <div className="det_head">
            <div className="det_headName">
              <p>
                Name:
                {' '}
                {data.name}
              </p>
              <p>
                Symbol:
                {' '}
                {data.symbol}
              </p>
              <p>
                Ranking: #
                {data.market_cap_rank}
              </p>
              <p>
                Icon:
              </p>
            </div>
            <div className="det_headImgDiv">
              <img
                className="det_headImg"
                src={data.image}
                alt={data.name}
              />
            </div>
            <hr />
          </div>

          <div className="det_price">
            <h2>** PRICE **</h2>
            <p>
              Current:
              { ' USD ' }
              {data2.format(data.current_price)}
            </p>
            <p>
              High (last 24h):
              { ' USD ' }
              {data2.format(data.high_24h)}
            </p>
            <p>
              Low (last 24h):
              { ' USD ' }
              {data2.format(data.low_24h)}
            </p>
          </div>

          <div className="det_market">
            <h2>** Market Capitalization **</h2>
            <p>
              { ' USD ' }
              {data2.format(data.market_cap)}
            </p>
            <p>
              Ranking: #
              {data.market_cap_rank}
            </p>
          </div>

          <div className="det_trading">
            <h2>** Trading Volume (last 24h) **</h2>
            <p>
              { ' USD ' }
              {data2.format(data.total_volume)}
            </p>
          </div>

          <div className="det_total">
            <h2>** Maximum  Supply **</h2>
            <p>{data2.format(data.total_supply)}</p>
          </div>

          <div className="det_circulation">
            <h2>** Circulation Supply **</h2>
            <p>{data2.format(data.circulating_supply)}</p>
          </div>

          <hr />
        </div>
      );
    }
  };

  return <div>{renderData()}</div>;
};
export default Details;
