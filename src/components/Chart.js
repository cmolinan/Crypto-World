import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Chartjs from 'chart.js';
import './chart.css';
import { getChartData } from '../redux/cryptos/charts';

const Chart = (props) => {
  const { id } = props;
  const chartRef = useRef();
  const idRef = useRef();

  if (idRef.current === '' || idRef.current === undefined) idRef.current = id;

  // parameters for Chart.js
  const chartOptions = {
    lineHeightAnnotation: {
      always: true,
      hover: true,
      lineWeight: 1,
    },
    title: {
      display: true,
      text: ' PRICE VARIATION (last 12 months) - US$ ',
      fontColor: 'white',
      fontSize: 16,
    },
    legend: {
      labels: {
        fontColor: 'white',
      },
    },
    animation: {
      duration: 100,
    },
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      xAxes: [
        {
          type: 'time',
          distribution: 'linear',
          ticks: {
            fontColor: 'white',
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            fontColor: 'white',
          },
        },
      ],
    },
  };

  const getPrices = (arr) => {
    const price = [];
    arr[0].prices.forEach((row) => {
      price.push({ t: row[0], y: row[1] });
    });
    return price;
  };

  const chartArray = useSelector((state) => state.stChart);

  const dispatch = useDispatch();

  if (idRef.current && chartRef && chartRef.current && (chartArray.length > 0)) {
    /* eslint-disable no-new */
    new Chartjs(chartRef.current, {
      type: 'line',
      data: {
        datasets: [
          {
            label: `${id} price`,
            data: getPrices(chartArray),
            fill: false,
            borderColor: 'blue',
            pointRadius: 0,
            borderWidth: 1,
          },
        ],
      },
      options: {
        ...chartOptions,
      },
    });
  }

  useEffect(() => {
    if (idRef.current !== '' && idRef.current !== undefined) {
      dispatch(getChartData(idRef.current));
    }
    return () => {
      idRef.current = '';
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idRef.current]);

  return (
    <div className="chart">
      <canvas ref={chartRef} id="myChart" />
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
