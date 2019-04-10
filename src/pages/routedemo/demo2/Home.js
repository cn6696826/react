import React from "react";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <ul>
            <li>
              <Link to="/">Main1</Link>
            </li>
            <li>
              <Link to="/about">About1</Link>
            </li>
            <li>
              <Link to="/topics">Topics1</Link>
            </li>
          </ul>
        </Router>

        <hr />
        {this.props.children}
      </div>
    );
  }
}
