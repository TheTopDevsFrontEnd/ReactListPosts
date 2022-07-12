import { createAsyncThunk } from '@reduxjs/toolkit';

import { api } from 'api';
import { handleServerErrors } from 'utils/serverErrors';

const getPosts = createAsyncThunk('posts/getPosts', async () => {
  try {
    const { data } = await api.posts.getPosts();
    return data;
  } catch (err) {
    handleServerErrors(err);
    throw err;
  }
});

const thunks = {
  getPosts,
};

export { thunks };
