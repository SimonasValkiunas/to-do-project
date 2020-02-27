import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Test from './Test';
import AddTask from './AddTask';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="Todo">
      <p>Todo app</p>
      {/* <AddTask></AddTask>
      <Test></Test> */}
      <Router>
        <Switch>
            <Route path="/add">
              <AddTask></AddTask>
            </Route>
            <Route path="/test">
              <Test></Test>
            </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
