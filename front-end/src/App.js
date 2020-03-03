import React from 'react';
import './App.css';
import Test from './Test';
import AddTask from './AddTaskComponent/AddTask';
import Main from './MainComponent/Main';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Task from './TaskComponent/Task';

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
            <Route path="/task">
              <Task></Task>
            </Route>
            <Route path="/">
              <Main></Main>
            </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
