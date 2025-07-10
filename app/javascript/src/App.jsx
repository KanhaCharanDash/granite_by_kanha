import React from "react";

import Dashboard from "components/Dashboard";
import { CreateTask, ShowTask } from "components/Tasks";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const App = () => (
  <Router>
    <ToastContainer />
    <Switch>
      <Route exact component={CreateTask} path="/tasks/create" />
      <Route exact component={Dashboard} path="/dashboard" />
      <Route exact component={ShowTask} path="/tasks/:slug/show" />
    </Switch>
  </Router>
);

export default App;
