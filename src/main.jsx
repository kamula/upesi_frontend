import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AuthProvider from 'react-auth-kit';
import { store } from './utils/AuthStore.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider store={store} >
      <App />
    </AuthProvider>
  </React.StrictMode>,
)
