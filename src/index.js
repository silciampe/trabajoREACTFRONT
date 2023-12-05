import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import App from './App';
import { BrowserRouter, createBrowserRouter } from 'react-router-dom';



const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);


