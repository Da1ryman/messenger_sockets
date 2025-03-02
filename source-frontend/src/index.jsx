import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './screens/App.jsx';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App />}/>
      </Routes>
    </Router>
  </React.StrictMode>
);

