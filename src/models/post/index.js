export const postModel = (id = Date.now(), title = 'Title', body = 'Body') => ({
  id,
  title,
  body,
});
