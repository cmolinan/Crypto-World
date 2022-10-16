import { createSlice } from '@reduxjs/toolkit';
import { readChartsData } from '../apiCalls';

const initialState = [];

const reducerChart = createSlice({
  name: 'chart',
  initialState,
  reducers: {
    putChartDataToStore: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      [...state] = [action.payload];
      return state;
    },
  },
});

export const { putChartDataToStore } = reducerChart.actions;

const getChartData = (id) => async (dispatch) => {
  const response = await readChartsData(id);
  dispatch(putChartDataToStore(response));
};

export { getChartData };
export default reducerChart.reducer;
