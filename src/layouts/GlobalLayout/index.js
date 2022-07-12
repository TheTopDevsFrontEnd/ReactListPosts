import { Switch, Route } from 'react-router-dom';

import Posts from 'pages/PostsPage';
import Post from 'pages/PostPage';
import NotFoundPage from 'pages/NotFoundPage';
import { ProtectedRoute } from 'middleware/ProtectedRoute';
import { Content } from './styled';

function UserLayout() {
  return (
    <ProtectedRoute>
      <Content>
        <Switch>
          <Route
            exact
            path="/"
            component={Posts}
          />
          <Route
            exact
            path="/post/:id"
            component={Post}
          />
          <Route component={NotFoundPage} />
        </Switch>
      </Content>
    </ProtectedRoute>
  );
}

export default UserLayout;
