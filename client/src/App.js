import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  useParams,
} from "react-router-dom";
import { Invite } from './features/invite/Invite';
import { Going } from './features/going/Going';
import { Notgoing } from './features/notgoing/Notgoing';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Invite />
        </Route>
        <Route path="/going">
          <Going />
        </Route>
        <Route path="/notgoing">
          <Notgoing />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;



