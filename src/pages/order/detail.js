import React from "react";
import { Card, Select, Form, Button, Table, Modal } from "antd";
import { from } from "rxjs";
import Axios from "../utils/axios/index";

const FormItem = Form.Item;
const Option = Select.Option;
export default class OrderDetail extends React.Component {
  state = {
    orderInfo: {}
  };
  componentWillMount() {}
  componentDidMount() {
    let orderId = this.props.match.params.orderId;
    this.getDetail(orderId);
  }
  getDetail = id => {
    console.log(id);
    Axios.ajax({
      url:
        "https://www.easy-mock.com/mock/5c9b800e654f582502058ae1/mock/order/detail"
    }).then(res => {
      this.setState({
        orderInfo: res.data.result
      });
      this.didMap();
    });
  };
  didMap = () => {
    const bmap = window.BMap;
    this.map = new bmap.Map("orderdetailMao");
    this.map.centerAndZoom(new bmap.Point(116.404, 39.915), 11);
    this.map.addControl(new bmap.NavigationControl());
    this.map.addControl(new bmap.ScaleControl());
    this.map.addControl(new bmap.OverviewMapControl());
    this.map.addControl(new bmap.MapTypeControl());
  };
  render() {
    let info = this.state.orderInfo;
    return (
      <div>
        <Card>
          <div id="orderdetailMao" style={{ height: "500px" }} />
          <div className="orderDetailItem">
            <span>基础信息</span>
            <ul>
              <li>
                <div>用车模式</div>
                <div>{info.mode == 1 ? "服务区" : "停车点"}</div>
              </li>
              <li>
                <div>订单编号</div>
                <div>{info.order_sn}</div>
              </li>
              <li>
                <div>车辆编号</div>
                <div>{info.bike_sn}</div>
              </li>
              <li>
                <div>用户姓名</div>
                <div>{info.user_name}</div>
              </li>
              <li>
                <div>手机号码</div>
                <div>{info.mobike}</div>
              </li>
            </ul>
          </div>
          <div className="orderDetailItem">
            <span>形式轨迹</span>
            <ul>
              <li>
                <div>起点</div>
                <div>{info.end_location}</div>
              </li>
              <li>
                <div>终点</div>
                <div>{info.end_location}</div>
              </li>
              <li>
                <div>里程</div>
                <div>{info.distance}</div>
              </li>
            </ul>
          </div>
        </Card>
      </div>
    );
  }
}
