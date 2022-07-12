import { http } from '../http';
import { WEB_API_ROUTES } from '../api-routes';

export const posts = {
  getPosts() {
    return http.get(WEB_API_ROUTES.posts);
  },
  getPost(postId) {
    return http.get(WEB_API_ROUTES.post.replace('{postId}', postId));
  },
};
