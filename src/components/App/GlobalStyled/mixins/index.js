import { css } from 'styled-components';

const Block = ({
  w = 'auto',
  h = 'auto',
  p = 0,
  m = 0,
  b = 'none',
  bg = 'transparent',
}) => css`
  width: ${w};
  height: ${h};
  padding: ${p};
  margin: ${m};
  border: ${b};
  background: ${bg};
`;

const Flex = ({ align = 'center', justify = 'flex-start' }) => css`
  display: flex;
  align-items: ${align};
  justify-content: ${justify};
`;

const TextEllipsis = ({ width = 'auto' }) => css`
  width: ${width};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export { Block, Flex, TextEllipsis };
