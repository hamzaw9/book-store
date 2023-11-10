// Change 1
import { createSlice } from '@reduxjs/toolkit';

const booksSlice = createSlice({
  name: 'books',
  initialState: { list: [] },
  reducers: {
    addBook: (state, action) => {
      state.list = [
        ...state.list,
        {
          id: Math.floor(Math.random() * 100),
          title: action.payload.title,
          author: action.payload.author,
        },
      ];
    },
    removeBook: (state, action) => {
      state.list = state.list.filter((book) => book.id !== action.payload.id);
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
