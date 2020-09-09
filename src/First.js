import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";
import  {People, Person } from './App'

function First () {
    return (
      <Switch>
          <Route path="/" exact>
            <People />
          </Route>
          <Route path="/:personId">
            <Person />
          </Route>
     </Switch>
    )
}

export default First 