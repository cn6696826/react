import React from "react";
import { Row, Col } from "antd";
// import "antd/dist/antd.css";
import Footer from "./pages/components/Footer";
import Header from "./pages/components/Header";
import NavLeft from "./pages/components/NavLeft";
import Home from "./pages/Home/index";
import { Route } from "react-router-dom";
import "./pages/style/admin.less";

import Buttons from "./pages/ui/Button/index";
export default class Admin extends React.Component {
  render() {
    return (
      <Row className="container">
        <Col span={3} className="nav-left">
          <NavLeft />
        </Col>
        <Col span={21} className="main">
          <Header />
          <Row className="content">{this.props.children}</Row>
          <Footer />
        </Col>
      </Row>
    );
  }
}
