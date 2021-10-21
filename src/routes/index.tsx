import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/home';
import TodoList from '../pages/todoList';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/todolist" component={TodoList} />
  </Switch>
);

export default Routes;
