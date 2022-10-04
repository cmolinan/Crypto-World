import { configureStore } from '@reduxjs/toolkit';
import reducerCryptos from './cryptos/cryptos';

const store = configureStore({
  reducer: {
    stCryptos: reducerCryptos,
  },
});

export default store;
