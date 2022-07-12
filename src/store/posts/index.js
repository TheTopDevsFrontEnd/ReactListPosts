import { createSlice } from '@reduxjs/toolkit';

import { status } from 'utils/const';
import { thunks } from './thunks';
import { selectors } from './selectors';

const initialState = {
  list: [],
  fetchingStatus: status.IDLE,
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(thunks.getPosts.pending, (state) => {
        state.fetchingStatus = status.PENDING;
      })
      .addCase(thunks.getPosts.fulfilled, (state, { payload }) => {
        state.fetchingStatus = status.SUCCESS;
        state.list = payload;
      })
      .addCase(thunks.getPosts.rejected, (state) => {
        state.fetchingStatus = status.FAIL;
      });
  },
});

const posts = {
  actions: postsSlice.actions,
  thunks,
  selectors,
};

export { posts };
export default postsSlice.reducer;
