const BaseURL = 'https://api.coingecko.com/api/v3/coins/';
const GetAll = 'markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false';
const ChartsData = 'market_chart?vs_currency=usd&days=365&interval=weekly';

const ApiGetAllCryptos = async () => {
  const response = await fetch(BaseURL + GetAll, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  });
  const cryptosData = await response.json();
  return cryptosData;
};

export const readChartsData = async (id) => {
  const url = `${BaseURL}${id}/${ChartsData}`;
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  });
  const chartData = await response.json();
  return chartData;
};

export default ApiGetAllCryptos;
