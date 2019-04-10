import React from "react";
import { Card, Spin, Icon } from "antd";
export default class Loading extends React.Component {
  render() {
    return (
      <div>
        <Card title="基础用法">
          <Spin />
        </Card>
      </div>
    );
  }
}
