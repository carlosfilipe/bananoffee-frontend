import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Linktree from './pages/Linktree'

export default function Routes() {
  return (
    <Router>
        <Switch>
          <Route path="/linktree">
            <Linktree />
          </Route>
        </Switch>
    </Router>
  );
}
