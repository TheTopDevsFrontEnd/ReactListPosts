import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const Post = styled(Link)`
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 16px;
  transition: 0.25s ease;

  ${({ nohover }) =>
    !nohover &&
    css`
      &:hover {
        text-decoration: none;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        transform: scale(1.01);
      }
    `}
`;

const PostTitle = styled.div`
  padding: 8px 16px;
  background-color: #ededed;
`;

const PostBody = styled.div`
  padding: 8px 16px;
`;

export { Post, PostTitle, PostBody };
