import React from 'react';
import './App.css';
import Test from './Test';
import AddTask from './AddTaskComponent/AddTask';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="Todo">
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
