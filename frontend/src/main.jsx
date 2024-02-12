import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
// import fontawesome js file

import 'core-js/stable';
import 'regenerator-runtime/runtime';
//import { AuthContPro as AuthContProSalon  } from './context/AuthContextSalon.jsx';

import { AuthContPro  } from './context/AuthContext';

// const isUserLoggedIn = true;
// const AuthContPro = isUserLoggedIn?  AuthContProUser : AuthContProSalon;

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
