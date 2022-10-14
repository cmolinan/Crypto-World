import { createSlice } from '@reduxjs/toolkit';
import { readCsvData } from '../apiCalls';

const initialState = [];

const reducerChart = createSlice({
  name: 'chart',
  initialState,
  reducers: {
    getChartFromCsv: (state = initialState, action) => [...state, action.payload],
  },
});

export const { getChartFromCsv } = reducerChart.actions;

const chartFromCSV = () => async (dispatch) => {
  const response = await readCsvData();
  dispatch(getChartFromCsv(response));
};

export { chartFromCSV };
export default reducerChart.reducer;

// {
//   const tmpArray = Object.entries(action.payload).map((value) => (
//     { ...value[1] }
//   ));
//   // eslint-disable-next-line no-param-reassign
//   [...state] = [...tmpArray];
//   return state;
// }
