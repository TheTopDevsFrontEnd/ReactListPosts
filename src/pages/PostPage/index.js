import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { RLoader } from 'components/RLoader';
import { PostItem } from 'components/PostsPage/PostItem';
import { status } from 'utils/const';
import { post } from 'store/post';
import { Heading } from './styled';

function Post() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const fetchingStatus = useSelector(post.selectors.fetchingStatus);
  const postData = useSelector(post.selectors.data);

  useEffect(() => {
    if (id) dispatch(post.thunks.getPostById(id));

    return () => dispatch(post.actions.CLEAR_POST());
  }, []);

  return (
    <>
      <Heading>Post - {id}</Heading>
      {fetchingStatus === status.PENDING ? (
        <RLoader
          align="center"
          justify="center"
          m="auto"
        />
      ) : (
        <PostItem
          as="div"
          id={postData.id}
          title={postData.title}
          body={postData.body}
          noHover
        />
      )}
    </>
  );
}

export default Post;
