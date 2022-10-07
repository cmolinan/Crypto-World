import { createSlice } from '@reduxjs/toolkit';
import ApiGetAllCryptos from '../apiCalls';

const initialState = [];

const reducerCryptos = createSlice({
  name: 'cryptos',
  initialState,
  reducers: {
    getCryptosAPI: (state = initialState, action) => {
      const tmpArray = Object.entries(action.payload).map((value) => (
        { ...value[1] }
      ));
      // eslint-disable-next-line no-param-reassign
      [...state] = [...tmpArray];
      return state;
    },
  },
});

export const { getCryptosAPI } = reducerCryptos.actions;

const asyncCryptosFromAPI = () => async (dispatch) => {
  const response = await ApiGetAllCryptos();
  dispatch(getCryptosAPI(response));
};

export { asyncCryptosFromAPI };
export default reducerCryptos.reducer;
