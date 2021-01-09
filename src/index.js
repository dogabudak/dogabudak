import React from 'react';
import ReactDOM from 'react-dom';
import Main from './pages/main/Main';
import * as serviceWorker from './serviceWorker';
import 'semantic-ui-css/semantic.min.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
      <Router>
      <Switch>
          <Route path="/blog">
            Coming Soon....
          </Route>
          <Route path="/">
              <Main />
          </Route>
      </Switch>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
