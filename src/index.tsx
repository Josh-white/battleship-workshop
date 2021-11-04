import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BattleShip} from './BattleShip';
import {Routes} from "./Routes";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import {Game} from "./Game";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path={Routes.Home}>
          <BattleShip/>
        </Route>
        <Route path={Routes.Game}>
          <Game/>
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
