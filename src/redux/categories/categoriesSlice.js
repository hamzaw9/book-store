import { createSlice } from '@reduxjs/toolkit';

const initialState = { categories: [], status: '' };

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    categoriesStatus: (state) => {
      state.status = 'Under Construction';
    },
  },
});

export const { categoriesStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
