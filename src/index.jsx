import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './pages/Router';
import './styles/index.scss';
import { Provider } from 'react-redux';
import store from './redux/store';
// import i18n (needs to be bundled ;))
import './utils/i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router />
    </React.StrictMode>
  </Provider>
);
