import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Tooltip from '@mui/material/Tooltip';
import './details.css';
import returnImg from '../assets/images/return.png';
import Chart from './Chart';

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
              <Tooltip
                title="Cryptocurrencies are a tradable asset, much like stocks, commodities, securities and so on. Their price is determined by how much interest there is on the market in buying them – that's called demand – and how much is available to buy – that's supply. The relationship between the two determines the price"
                arrow
                placement="right"
              >
                <p className="det_othN">Price</p>
              </Tooltip>
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
              <Tooltip
                title="Is the total value of all the coins that have been mined. It's calculated by multiplying the number of coins in circulation by the current market price of a single coin"
                arrow
                placement="right"
              >
                <p className="det_othN">Market Capitalization</p>
              </Tooltip>
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
              <Tooltip
                title="Number of coins that have exchanged hands during a defined period of time, usually 24 hours. In other words, the 24-hour trading volume of a cryptocurrency is how much value of a coin has been bought and sold over the course of a day"
                placement="right"
                arrow
              >
                <p className="det_othN">Trading Volume (last 24h)</p>
              </Tooltip>
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
              <Tooltip
                title="Refers to the number of coins or tokens that currently exists and are either in circulation or locked somehow. It is the sum of coins that were already mined (or issued) minus the total of coins that were burned or destroyed."
                placement="right"
                arrow
              >
                <p className="det_othN">Maximum  Supply</p>
              </Tooltip>
            </div>
            <div className="det_othData">
              <p>{data2.format(data.total_supply)}</p>
            </div>
          </div>

          <div className="det_others">
            <div className="det_othTitle">
              <Tooltip
                title="Number of coins or tokens of a specific cryptocurrency that are publicly available to buy or sell. If you can trade them, they are considered circulating."
                placement="right"
                arrow
              >
                <p className="det_othN">Circulation Supply</p>
              </Tooltip>
            </div>
            <div className="det_othData">
              <p>{data2.format(data.circulating_supply)}</p>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <>
      {renderData()}
      <Chart id={id} />
    </>
  );
};
export default Details;
