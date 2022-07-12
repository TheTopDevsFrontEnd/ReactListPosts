import { Switch, Route } from 'react-router-dom';

import GlobalLayout from 'layouts/GlobalLayout';
import NotFoundPage from 'pages/NotFoundPage';

function App() {
  return (
    <Switch>
      <Route
        path="/"
        component={GlobalLayout}
      />
      <Route component={NotFoundPage} />
    </Switch>
  );
}

export default App;
