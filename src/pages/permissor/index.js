import React from "react";
import { Card, Button } from "antd";
import Etable from "./../components/Etable/index";
import axios from "./../utils/axios/index";
import Util from "./../utils/utils";
export default class Permissor extends React.Component {
  state = {};
  componentWillMount() {
    this.getUserList();
  }
  getUserList = () => {
    axios
      .ajax({
        url:
          "https://www.easy-mock.com/mock/5c9b800e654f582502058ae1/mock/authuser"
      })
      .then(res => {
        this.setState({
          dataSource: res.data.item_list
        });
      });
  };
  render() {
    const columns = [
      {
        title: "角色ID",
        dataIndex: "id"
      },
      {
        title: "角色名称",
        dataIndex: "role_name"
      },
      {
        title: "创剑时间",
        dataIndex: "create_time"
      },
      {
        title: "使用状态",
        dataIndex: "status"
      },
      {
        title: "授权时间",
        dataIndex: "authorize_time"
      },
      {
        title: "授权人",
        dataIndex: "authorize_user_name"
      }
    ];
    return (
      <div>
        <Card>
          <Button type="primary">创建角色</Button>
          <Button type="primary">设置权限</Button>
          <Button type="primary">用户授权</Button>
        </Card>
        <Card>
          <Etable
            selectType="radio"
            updateSelectRowkeysItems={Util.updateSelectRowkeysItems.bind(this)}
            selectedRowKeys={this.state.selectedRowKeys}
            dataSource={this.state.dataSource}
            columns={columns}
            pagination={this.state.pagination}
            selectIds={this.state.selectIds}
            selectItem={this.state.selectedRows}
          />
        </Card>
      </div>
    );
  }
}
