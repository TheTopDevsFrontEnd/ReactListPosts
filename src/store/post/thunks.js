import { createAsyncThunk } from '@reduxjs/toolkit';

import { api } from 'api';
import { handleServerErrors } from 'utils/serverErrors';

const getPostById = createAsyncThunk('post/getPostById', async (postId) => {
  try {
    const { data } = await api.posts.getPost(postId);
    return data;
  } catch (err) {
    handleServerErrors(err);
    throw err;
  }
});

const thunks = {
  getPostById,
};

export { thunks };
