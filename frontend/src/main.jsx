import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import 'core-js/stable';
import 'regenerator-runtime/runtime';

import { AuthContPro  } from './context/AuthContext';

ReactDOM.createRoot(document.getElementById('root')).render(  
  <React.StrictMode>
    <BrowserRouter>
    <AuthContPro> 
      <ToastContainer theme='dark' position='top-right' autoClose={3000} closeOnClick pauseOnHover={false} />
     <App />
    </AuthContPro>
    </BrowserRouter>
  </React.StrictMode>
)
