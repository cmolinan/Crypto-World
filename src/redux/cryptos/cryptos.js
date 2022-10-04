import { createSlice } from '@reduxjs/toolkit';
import ApiGetAllCryptos from '../apiCalls';

const initialState = [];

const reducerCryptos = createSlice({
  name: 'cryptos',
  initialState,
  reducers: {
    // addNewBook: (state, action) => [...state, action.payload],
    // removeBook: (state, action) => state.filter((book) => book.id !== action.payload),
    getCryptosAPI: (state, action) => {
      const tmpArray = Object.keys(action.payload).map((id) => ({
        id: action.payload[id].id,
        name: action.payload[id].name,
        image: action.payload[id].image,
        price: action.payload[id].current_price,
      }));
      // eslint-disable-next-line no-param-reassign
      [...state] = [...tmpArray];
      return state;
    },
  },
});
// export const { addNewBook, removeBook, getCryptosAPI } = reducerBook.actions;
export const { getCryptosAPI } = reducerCryptos.actions;

const asyncCryptosFromAPI = () => async (dispatch) => {
  const response = await ApiGetAllCryptos();
  dispatch(getCryptosAPI(response));
};

// let tmpArray = [];
// [...tmpArray] = [...action.payload];
// return tmpArray; // [...state, action.payload]
// },

// const asyncAddNewBook = (newBook) => async (dispatch) => {
//   await ApiAddBook(newBook);
//   dispatch(addNewBook({ ...newBook, id: newBook.item_id }));
// };

// const asyncRemoveBook = (id) => async (dispatch) => {
//   await ApiRemoveBook(id);
//   dispatch(removeBook(id));
// };

export { asyncCryptosFromAPI };
// export { asyncCryptosFromAPI, asyncAddNewBook, asyncRemoveBook };
export default reducerCryptos.reducer;
