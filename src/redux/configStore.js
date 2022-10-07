import { configureStore } from '@reduxjs/toolkit';
import reducerCryptos from './cryptos/cryptos';
import reducerFilterCryptos from './cryptos/filtercryptos';

const store = configureStore({
  reducer: {
    stCryptos: reducerCryptos,
    stFilterCryptos: reducerFilterCryptos,
  },
});

export default store;
