import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import { ContextProvider } from './Components/registerContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>  
  <BrowserRouter>
    <ContextProvider>
    <App />
  </ContextProvider>
  </BrowserRouter>
  </React.StrictMode>

);

