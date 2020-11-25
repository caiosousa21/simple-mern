import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import NewPage from './places/pages/NewPlace';
import Users from './user/pages/Users';

const App = () => {
  return <BrowserRouter>
  <Switch>
    <Route exact path='/' >
      <Users/>
    </Route>
    <Route path='/pages/new'>
      <NewPage/>
    </Route>
    <Redirect to='/'/>
  </Switch>
  </BrowserRouter>
}

export default App;
