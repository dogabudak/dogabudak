import React from 'react';
import ReactDOM from 'react-dom';
import Main from './pages/main/Main';
import * as serviceWorker from './serviceWorker';
import 'semantic-ui-css/semantic.min.css'
import './components/SideBox.css';

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
