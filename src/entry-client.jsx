import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import '@/index.css';
import {App} from '@/App';

ReactDOM.render(
  <React.StrictMode>
    <Helmet
      defaultTitle='Vite React Tailwind Starter'
      titleTemplate='%s | Vite React Tailwind Starter'
    >
      <meta charSet='utf-8' />
      <html lang='id' amp />
    </Helmet>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
