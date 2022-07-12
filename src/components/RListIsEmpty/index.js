import PropTypes from 'prop-types';

import { Wrap } from './styled';

RListIsEmpty.propTypes = {
  children: PropTypes.node,
};

function RListIsEmpty({ children }) {
  return <Wrap>{children || 'List is empty'}</Wrap>;
}

export default RListIsEmpty;
