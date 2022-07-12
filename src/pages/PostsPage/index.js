import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RLoader } from 'components/RLoader';
import { PostItem } from 'components/PostsPage/PostItem';
import { status } from 'utils/const';
import { posts } from 'store/posts';
import { Heading, List } from './styled';

function Posts() {
  const dispatch = useDispatch();
  const fetchingStatus = useSelector(posts.selectors.fetchingStatus);
  const postsList = useSelector(posts.selectors.list);

  useEffect(() => {
    if (fetchingStatus !== status.SUCCESS) {
      dispatch(posts.thunks.getPosts());
    }
  }, []);

  const renderPosts = () => {
    return postsList.map((post) => (
      <PostItem
        key={post.id}
        id={post.id}
        title={post.title}
        body={post.body}
      />
    ));
  };

  if (fetchingStatus === status.PENDING) {
    return (
      <RLoader
        align="center"
        justify="center"
        m="auto"
      />
    );
  }

  return (
    <>
      <Heading>Posts list</Heading>
      <List>{renderPosts()}</List>
    </>
  );
}

export default Posts;
