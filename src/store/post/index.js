import { createSlice } from '@reduxjs/toolkit';

import { status } from 'utils/const';
import { thunks } from './thunks';
import { selectors } from './selectors';

const initialState = {
  data: {},
  fetchingStatus: status.IDLE,
};

const postsSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    CLEAR_POST: (state) => {
      state.data = {};
      state.fetchingStatus = status.IDLE;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(thunks.getPostById.pending, (state) => {
        state.fetchingStatus = status.PENDING;
      })
      .addCase(thunks.getPostById.fulfilled, (state, { payload }) => {
        state.fetchingStatus = status.SUCCESS;
        state.data = payload;
      })
      .addCase(thunks.getPostById.rejected, (state) => {
        state.fetchingStatus = status.FAIL;
      });
  },
});

const post = {
  actions: postsSlice.actions,
  thunks,
  selectors,
};

export { post };
export default postsSlice.reducer;
