import styled from 'styled-components';

const Mask = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  padding: 16px;
  background-color: ${({ color = 'rgba(0, 0, 0, .4)' }) => color};
  z-index: 500;
`;

export { Mask };
