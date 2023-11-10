import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url =
  'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/WA5eot1mOTs5Y1g1bAoc/books';

const initialState = {
  books: [],
  message: '',
  status: null,
  error: null,
};

export const getBookItems = createAsyncThunk(
  'books/getBookItems',
  async (thunkAPI) => {
    try {
      const resp = await axios.get(url);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  }
);

export const addBook = createAsyncThunk(
  'book/addBooksData',
  async (bookData, thunkAPI) => {
    try {
      const resp = await axios.post(url, {
        item_id: bookData.item_id,
        title: bookData.title,
        author: bookData.author,
        category: bookData.category,
      });
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('try again');
    }
  }
);

export const removeBook = createAsyncThunk(
  'book/removeBooks',
  async (bookId, thunkAPI) => {
    try {
      const resp = await axios.delete(`${url}/${bookId.item_id}`);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('The book has been deleted');
    }
  }
);

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBookItems.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(getBookItems.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        const booksData = Object.values(action.payload);
        const bookIds = Object.keys(action.payload);
        const bookState = [];
        for (let i = 0; i < booksData.length; i += 1) {
          for (let j = 0; j < booksData[i].length; j += 1) {
            const bookObj = { ...booksData[i][j], item_id: bookIds[i] };
            bookState.push(bookObj);
          }
        }

        state.books = bookState;
      })
      .addCase(getBookItems.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
      })
      .addCase(addBook.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(addBook.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.message = action.payload;
      })
      .addCase(addBook.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
      })
      .addCase(removeBook.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(removeBook.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.message = action.payload;
      })
      .addCase(removeBook.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
      });
  },
});

export default booksSlice.reducer;
