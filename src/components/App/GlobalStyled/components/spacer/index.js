import styled from 'styled-components';

const Spacer = styled.div`
  display: ${({ d = 'inline-block' }) => d};
  width: ${({ w = 0 }) => w};
  height: ${({ h = 0 }) => h};
  margin: ${({ m = 0 }) => m};
  padding: ${({ p = 0 }) => p};
`;

export { Spacer };
