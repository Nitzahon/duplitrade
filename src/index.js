import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { Provider } from 'react-redux'
import store from './store'

import App from './App';
import reportWebVitals from './reportWebVitals';
console.log('Initial state: ', store.getState())

const unsubscribe = store.subscribe(() =>
  console.log('State after dispatch: ', store.getState())
)
store.dispatch({ type: 'graphframe/tabactive', payload: 1 });
store.dispatch({ type: 'graphframe/tabactive', payload: 0 });
unsubscribe()
store.dispatch({ type: 'graphframe/tabactive', payload: 1 });


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
