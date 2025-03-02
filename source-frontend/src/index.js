import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import Messenger from './screens/Messenger';
import App from './screens/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/app' element={<Messenger/>}/>
        <Route path='/' element={<App/>}/>
      </Routes>
    </Router>
  </React.StrictMode>
);