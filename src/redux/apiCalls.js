// const ApiURL = 'https://api.coingecko.com/api/v3';

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

export default ApiGetAllCryptos;
