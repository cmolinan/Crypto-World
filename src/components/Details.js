import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './details.css';
import returnImg from '../assets/images/return.png';

const Details = () => {
  const { id } = useParams();
  const cryptosArray = useSelector((state) => state.stCryptos);

  const navigate = useNavigate();

  let data = cryptosArray.filter((obj) => obj.id === id);
  data = data ? data[0] : null;

  const data2 = new Intl.NumberFormat();

  /* eslint-disable consistent-return */
  const renderData = () => {
    if (data) {
      return (
        <div className="detail_div">
          <div className="det_header d1">
            <div className="detail_return">
              <button type="button" className="btn" onClick={() => navigate(-1)}>
                <img src={returnImg} alt="Return" />
              </button>
            </div>
            <div className="det_headImgDiv">
              <img
                className="det_headImg"
                src={data.image}
                alt={data.name}
              />
            </div>
            <div className="det_dataIni">
              <div className="det_headName">
                <div className="det_h">
                  <p className="det_hN">Name:</p>
                  <p className="det_hT">
                    {data.name}
                  </p>
                </div>
                <div className="det_h">
                  <p className="det_hN">Symbol:</p>
                  <p className="det_hT">
                    {data.symbol}
                  </p>
                </div>
                <div className="det_h">
                  <p className="det_hN">Ranking:</p>
                  <p className="det_hT">
                    #
                    {data.market_cap_rank}
                  </p>
                </div>

              </div>
            </div>

          </div>

          <div className="det_others">
            <div className="det_othTitle">
              <p className="det_othN">Price</p>
            </div>
            <div className="det_othData">
              <p>
                <span className="det_span">Current:</span>
                { ' USD ' }
                {data2.format(data.current_price)}
              </p>
              <p>
                <span className="det_span">High (last 24h):</span>
                { ' USD ' }
                {data2.format(data.high_24h)}
              </p>
              <p>
                <span className="det_span">Low (last 24h):</span>
                { ' USD ' }
                {data2.format(data.low_24h)}
              </p>
            </div>
          </div>

          <div className="det_others d1">
            <div className="det_othTitle">
              <p className="det_othN">Market Capitalization</p>
            </div>
            <div className="det_othData">
              <p>
                { ' USD ' }
                {data2.format(data.market_cap)}
              </p>
              <p>
                <span className="det_span">Ranking:</span>
                {' #'}
                {data.market_cap_rank}
              </p>
            </div>
          </div>

          <div className="det_others">
            <div className="det_othTitle">
              <p className="det_othN">Trading Volume (last 24h)</p>
            </div>
            <div className="det_othData">
              <p>
                { ' USD ' }
                {data2.format(data.total_volume)}
              </p>
            </div>
          </div>

          <div className="det_others d1">
            <div className="det_othTitle">
              <p className="det_othN">Maximum  Supply</p>
            </div>
            <div className="det_othData">
              <p>{data2.format(data.total_supply)}</p>
            </div>
          </div>

          <div className="det_others">
            <div className="det_othTitle">
              <p className="det_othN">Circulation Supply</p>
            </div>
            <div className="det_othData">
              <p>{data2.format(data.circulating_supply)}</p>
            </div>
          </div>
        </div>
      );
    }
  };

  return <div>{renderData()}</div>;
};
export default Details;
