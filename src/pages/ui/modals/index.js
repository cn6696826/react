import React from "react";
import { Card, Button, Modal } from "antd";
export default class Modals extends React.Component {
  state = {
    visible: false
  };
  showModel = () => {
    this.setState({
      visible: true
    });
  };
  handleCancel = () => {
    this.setState({
      visible: false
    });
  };
  showModelConfim = type => {
    Modal[type]({
      title: "Confirm",
      content: "Bla bla ...",
      okText: "确认",
      cancelText: "取消",
      onOk: function() {
        console.log(22);
      }
    });
  };
  render() {
    return (
      <div>
        <Card title="基础弹框">
          {/* <Button type="primary" onClick={this.showModel}>
            基础弹框
          </Button>
          <Modal
            title="Basic Modal"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Modal>

          <Button type="primary" onClick={this.showModel}>
            自定义页脚
          </Button>
          <Modal
            title="Basic Modal"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            footer={[
              <Button type="primary" onClick={this.handleCancel}>
                盘他
              </Button>
            ]}
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Modal> */}

          {/* <Button type="primary" onClick={this.showModel}>
            顶部20cm
          </Button> */}
          {/* <Modal
            title="Basic Modal"
            style={{ top: 20 }}
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Modal> */}

          <Button
            type="primary"
            onClick={() => this.showModelConfim("confirm")}
          >
            confim
          </Button>
          <Button
            type="primary"
            onClick={() => this.showModelConfim("success")}
          >
            success
          </Button>
          {/* <Modal
            title="Basic Modal"
            style={{ top: 20 }}
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Modal> */}
        </Card>
      </div>
    );
  }
}
