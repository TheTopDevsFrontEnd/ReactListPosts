import styled from 'styled-components';

import { Block, Flex } from 'components/App/GlobalStyled';

const Loader = styled.div`
  ${Flex};
  ${Block};
  text-align: center;
  font-size: 20px;
  font-style: italic;
`;

export { Loader };
