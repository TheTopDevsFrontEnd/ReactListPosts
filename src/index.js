import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Router } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { createBrowserHistory } from 'history';
import store from './store';
import App from './App';
import Theme from './components/App/Theme';
import { GlobalStyles } from './components/App/GlobalStyled';
import reportWebVitals from './reportWebVitals';

const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyles />
      <Theme>
        <Router history={history}>
          <App />
        </Router>
      </Theme>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        newestOnTop={false}
        closeOnClick
        limit={1}
        draggable
        pauseOnHover
        theme="colored"
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById(`root`)
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
