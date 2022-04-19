import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

const data = {
  chatsName: ['job', 'home', 'entertainment'], 

  chats: {
    'job': [
      {name: 'Mary', message: 'Lalala'},
      {name: 'Max', message: 'Lololo'},
    ],
    'home': [
      {name: 'Alex', message: 'blablabla'},
      {name: 'Sofi', message: 'fafafa'}
    ],
    'entertainment': [
      {name: 'Bob', message: 'lalala'},
      {name: 'Sten', message: 'nanana'}
    ]
  }
}

ReactDOM.render(
  <BrowserRouter>
      <React.StrictMode> 
      <Provider store={store}>
      <App data={data}/>
      </Provider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

