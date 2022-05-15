import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store,  persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import 'react-toastify/dist/ReactToastify.css';


ReactDOM.render(
  <BrowserRouter>
      <React.StrictMode>
      <Provider store={store} >
      <PersistGate persistor={persistor}>
      <App/>
      </PersistGate>
      </Provider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

