import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./Index.css";
import { BrowserRouter, Route, Routes } from 'react-router';
import App from './App.jsx';
import OperatingSystems from './OperatingSystems.jsx';
import Programs from './Programs.jsx';
import Request from './Request.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/os' element={<OperatingSystems />} />
        <Route path='/applications' element={<Programs />} />
        <Route path='/request' element={<Request />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
