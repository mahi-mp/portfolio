import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AllRoutes from './router';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <AllRoutes />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
