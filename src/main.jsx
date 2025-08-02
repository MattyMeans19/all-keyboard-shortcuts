import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./Index.css";
import { BrowserRouter, Route, Routes } from 'react-router';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
