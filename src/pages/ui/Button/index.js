import React from "react";
import { Card, Button, Icon } from "antd";
import "./index.less";
export default class Buttons extends React.Component {
  state = {
    size: "large",
    loading: false
  };
  render() {
    return (
      <div>
        <Card title="基础组件">
          <Button type="primary">Primary</Button>
          <Button>Default</Button>
          <Button type="dashed">Dashed</Button>
          <Button type="danger">Danger</Button>
        </Card>
        <Card title="图形按钮">
          <Button
            type="primary"
            shape="circle"
            icon="download"
            size={this.state.size}
          />
          <Button
            type="primary"
            shape="round"
            icon="download"
            size={this.state.size}
          >
            Download
          </Button>
          <Button type="primary" icon="download" size={this.state.size}>
            Download
          </Button>
        </Card>

        <Card title="loading">
          <Button type="primary" loading>
            Loading
          </Button>
          <Button type="primary" size="small" loading>
            Loading
          </Button>
        </Card>
      </div>
    );
  }
}
