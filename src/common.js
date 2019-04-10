import React from "react";
import { Row, Col } from "antd";
// import "antd/dist/antd.css";
import Footer from "./pages/components/Footer";
import Header from "./pages/components/Header";
import { Route } from "react-router-dom";
import "./pages/style/admin.less";

import Buttons from "./pages/ui/Button/index";
export default class Common extends React.Component {
  render() {
    return (
      <Row className="container">
        <Col span={24} className="main">
          <Header />
          <Row className="content">{this.props.children}</Row>
          <Footer />
        </Col>
      </Row>
    );
  }
}
