import PropTypes from 'prop-types';

import { Popup, Header, Title, Close } from './styled';

RPopup.propTypes = {
  width: PropTypes.number,
  fullHeight: PropTypes.bool,
  maxHeight: PropTypes.number,
  onClose: PropTypes.func,
  title: PropTypes.string,
  children: PropTypes.node,
};

function RPopup({
  width = 420,
  fullHeight,
  maxHeight,
  onClose = () => {},
  title,
  children,
}) {
  return (
    <Popup {...{ width, fullHeight, maxHeight, title }}>
      <Header>
        <Title>{title}</Title>
        <Close>
          <div
            color="#000000"
            onClick={onClose}
          >
            X
          </div>
        </Close>
      </Header>
      {children}
    </Popup>
  );
}

export { RPopup };
