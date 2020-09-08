import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";
import { Film, Films } from "./App";

function Second () {
    return (
      <Switch>
          <Route path="/films">
            <Films />
          </Route>
          <Route path="/:filmId">
            <Film />
          </Route>
        </Switch>
    )
}

export default Second