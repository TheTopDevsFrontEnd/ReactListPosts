import PropTypes from 'prop-types';

import { Mask } from './styled';

RMask.propTypes = {
  color: PropTypes.string,
  children: PropTypes.node,
};

function RMask({ color = 'rgba(0, 0, 0, 0.5)', children }) {
  return <Mask color={color}>{children}</Mask>;
}

export { RMask };
