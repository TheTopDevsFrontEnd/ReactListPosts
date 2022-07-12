const selectors = {
  list: (state) => state.posts.list,
  fetchingStatus: (state) => state.posts.fetchingStatus,
};

export { selectors };
