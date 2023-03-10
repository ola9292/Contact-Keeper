import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { ContextProvider } from './Context';
import { AuthContextProvider } from './AuthContext';
import { AlertContextProvider } from './AlertContext';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AlertContextProvider>
  <AuthContextProvider>
    <ContextProvider>
  
        <BrowserRouter>
            <App />
        </BrowserRouter>
   
    </ContextProvider>
  </AuthContextProvider>
  </AlertContextProvider>
);



