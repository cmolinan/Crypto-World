import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies
import { JSCharting } from 'jscharting-react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { chartFromCSV } from '../redux/cryptos/charts';
import './chart.css';
// import SimpleChart from './JsChart';
// let reafirstTime = true;

const Chart = (props) => {
  // eslint-disable-next-line no-unused-vars
  const { id } = props;
  // eslint-disable-next-line no-unused-vars
  const [config1, setConfig] = useState('');

  const getPrices = (arr) => {
    console.log(arr);
    const price = [];
    arr.prices.forEach((row) => {
      price.push({ x: row[0], y: row[1] });
    });
    return [{ name: 'Price', points: price }];
  };

  const chartArray = useSelector((state) => state.stChart);

  // eslint-disable-next-line consistent-return, no-unused-vars
  const renderData = () => {
    if (chartArray.length > 0) {
      const series = getPrices(chartArray[0]);
      console.log('Series:', series);

      const config = {
        type: 'line',
        series: [
          {
            points: [
              { x: 'A', y: 50 },
              { x: 'B', y: 30 },
              { x: 'C', y: 50 },
            ],
          },
        ],
      };
      setConfig(config);

      // const config = {
      //   title_label_text: 'Life Expectancy in the United States',
      //   annotations: [{
      //     label_text: 'Source: National Center for Health Statistics',
      //     position: 'bottom left',
      //   }],
      //   legend_visible: false,
      //   xAxis_crosshair_enabled: true,
      //   defaultSeries_lastPoint_label_text: '<b>%seriesName</b>',
      //   defaultPoint_tooltip: '%seriesName <b>%yValue</b> years',
      //   // eslint-disable-next-line object-shorthand
      //   series: series,
      // };

      return (
        <div id="chartDiv">
          <JSCharting options={config} />
        </div>
      );
    }
  };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(chartFromCSV());
  }, [dispatch]);

  return (
    <div className="chart">
      TEST
      { renderData() }
    </div>
  );
};

export default Chart;

Chart.defaultProps = {
  id: '',
};

Chart.propTypes = {
  id: PropTypes.string,
};
