import PropTypes from 'prop-types';

import { Post, PostBody, PostTitle } from './styled';

PostItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  body: PropTypes.string,
  as: PropTypes.string,
  noHover: PropTypes.bool,
};

export function PostItem({ id, title, body, as, noHover }) {
  return (
    <Post
      as={as}
      to={`/post/${id}`}
      nohover={noHover}
    >
      <PostTitle>{title}</PostTitle>
      <PostBody>{body}</PostBody>
    </Post>
  );
}
