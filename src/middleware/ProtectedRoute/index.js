import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

ProtectedRoute.propTypes = {
  children: PropTypes.node,
};

export function ProtectedRoute({ children }) {
  const token = true;

  if (!token) return <Redirect to="/" />;
  return children;
}
