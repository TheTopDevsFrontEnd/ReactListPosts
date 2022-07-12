import styled from 'styled-components';

import { Flex } from 'components/App/GlobalStyled';

const Heading = styled.h2`
  text-align: center;
  margin-bottom: 16px;
`;

const List = styled.div`
  ${Flex};
  flex-direction: column;
  max-width: 1000px;
  margin: 0 auto;
`;

export { Heading, List };
