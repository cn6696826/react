import React from "react";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import About from "./../demo1/About";
import Topics from "./../demo1/Topics";
import Main from "./../demo1/Main";
import Home from "./Home";
export default class Home1 extends React.Component {
  render() {
    return (
      <Router>
        <Home>
          <Switch>
            <Route
              path="/"
              render={() => (
                <Main>
                  这是一个子节点
                  <Route path="/a" component={About} />
                  <Route path="/t" component={Topics} />
                </Main>
              )}
            />
          </Switch>
        </Home>
      </Router>
    );
  }
}
