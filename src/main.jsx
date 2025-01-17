import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './routes'

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.css'

import { Provider } from 'react-redux';
import { store } from './store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Router />
  </Provider>
)
