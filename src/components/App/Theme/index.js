import { useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

const theme = {
  LIGHT: {
    primary: '#A5A5A5',
    secondary: '#6157eb',
  },
  DARK: {},
};

Theme.propTypes = {
  children: PropTypes.node,
};

function Theme({ children }) {
  const [mode] = useState('LIGHT');
  return <ThemeProvider theme={theme[mode]}>{children}</ThemeProvider>;
}

export default Theme;
