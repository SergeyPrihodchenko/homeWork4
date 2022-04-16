import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const data = {
  chatsName: ['job', 'home', 'entertainment'], 
  'job': [
    {name: 'Mary', message: 'Lalala'},
    {name: 'Max', message: 'Lololo'},
    {name: 'Max', message: 'Lololo'},
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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <React.StrictMode>
      <App data={data}/>
    </React.StrictMode>
  </BrowserRouter>
);

