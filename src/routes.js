import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Linktree from './pages/Linktree'

export default function Routes() {
  return (
    <Router>
        <Switch>
          <Route path="/links">
            <Linktree />
          </Route>
        </Switch>
    </Router>
  );
}
