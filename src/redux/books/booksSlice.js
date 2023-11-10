// src/redux/books/booksSlice.js
import { createSlice } from '@reduxjs/toolkit';

const booksSlice = createSlice({
  name: 'books',
  initialState: { list: [] },
  reducers: {
    addBook: (state, action) => {
      state.list.push(action.payload);
    },
    removeBook: (state, action) => {
      state.list = state.list.filter((book) => book.id !== action.payload);
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
