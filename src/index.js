import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

import Main from './components/App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);

