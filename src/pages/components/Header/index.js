import React from "react";
import { Row, Col } from "antd";
import Axios from "./../../utils/axios/index";
import "./index.less";
export default class Header extends React.Component {
  componentWillMount() {
    this.setState({ userName: "chennan" });
    this.getWheater();
  }
  getWheater() {
    Axios.jsonp({
      url:
        "http://v.juhe.cn/historyWeather/citys?key=5842d1dd1f53c190778cdef7b54c5e77&province_id=16"
    }).then(res => {});
  }
  render() {
    return (
      <div className="header">
        <Row className="header_top">
          <Col span={24}>
            <span>你好</span>
            <span>{this.state.userName}</span>
          </Col>
        </Row>
        <Row className="breadcolum">
          <Col className="bread_date">
            <a href="#">首页</a>
          </Col>
          <Col className="bread_wheater">天气晴</Col>
        </Row>
      </div>
    );
  }
}
