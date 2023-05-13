import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { BrowserRouter as Router } from 'react-router-dom';
import { MailProvider, MailContext } from './context/MailContext';
export { MailContext };



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Router>
    <MailProvider>
      <App />
    </MailProvider>
  </Router>


);

