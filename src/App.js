import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { Main, Personal } from './screens'
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/personal">
            <Personal />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
