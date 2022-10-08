import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const reducerFilterCryptos = createSlice({
  name: 'filtercryptos',
  initialState,
  reducers: {
    updateFilterCryptos: (state = initialState, action) => {
      const tmpArray = Object.entries(action.payload).map((value) => (
        { ...value[1] }
      ));
      // eslint-disable-next-line no-param-reassign
      [...state] = [...tmpArray];
      return state;
    },
  },
});

export const { updateFilterCryptos } = reducerFilterCryptos.actions;
export default reducerFilterCryptos.reducer;
