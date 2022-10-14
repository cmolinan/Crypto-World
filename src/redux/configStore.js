import { configureStore } from '@reduxjs/toolkit';
import reducerCryptos from './cryptos/cryptos';
import reducerChart from './cryptos/charts';
import reducerFilterCryptos from './cryptos/filtercryptos';

const store = configureStore({
  reducer: {
    stCryptos: reducerCryptos,
    stFilterCryptos: reducerFilterCryptos,
    stChart: reducerChart,
  },
});

export default store;
