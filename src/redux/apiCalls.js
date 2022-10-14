const ApiURL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false';

const ApiGetAllCryptos = async () => {
  const response = await fetch(ApiURL, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  });
  const cryptosData = await response.json();
  return cryptosData;
};

// const csvToSeries = (text) => {
//   const lifeExp = 'average_life_expectancy';
//   const dataAsJson = JSC.csv2Json(text);
//   const white = [];
//   const black = [];
//   dataAsJson.forEach((row) => {
//     // add either to Black, White arrays, or discard.
//     if (row.sex === 'Both Sexes') {
//       if (row.race === 'Black') {
//         black.push({ x: row.year, y: row[lifeExp] });
//       } else if (row.race === 'White') {
//         white.push({ x: row.year, y: row[lifeExp] });
//       }
//     }
//   });
// };

export const readCsvData = async () => {
  const url = 'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=7&interval=daily';
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  });
  const chartData = await response.json();
  // const series = csvToSeries(chartData);
  return chartData;
};

// export const readCsvData = () => {
//   fetch('https://data.cdc.gov/resource/w9j2-ggv5.csv')
//     .then((response) => response.text())
//     .then((text) => {
//       const series = csvToSeries(text);
//       return series;
//     })
//     .catch((error) => {
//       // Something went wrong
//       console.log(error);
//     });
// };

export default ApiGetAllCryptos;
