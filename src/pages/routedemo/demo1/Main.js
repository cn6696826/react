import React from "react";
import { HashRuter as Router, Route, Link } from "react-router-dom";
export default class Mian extends React.Component {
  render() {
    return (
      <div>
        嵌套路由
        <Link to="/a">走进嵌套</Link>
        <Link to="/t">走进嵌套2</Link>
        <hr />
        {this.props.children}
      </div>
    );
  }
}
