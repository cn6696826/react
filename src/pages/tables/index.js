import React from "react";
import { Card, Table, Button, Modal } from "antd";
import axios from "./../utils/axios";
import Util from "./../utils/utils";
import Etable from "./../components/Etable/index";
export default class Tables extends React.Component {
  state = {
    dataSource: []
  };
  componentWillMount() {
    this.gettableData();
  }
  onRowClick = (record, index) => {
    let selectkey = [index];

    this.setState({
      rowItem: record,
      selectedRowKeys: selectkey
    });
  };
  deleteTable = () => {
    let row = this.state.selectedRowKeys;
    Modal.confirm({
      title: "删除提示",
      content: `确定删除${row}`,
      onOk: () => {}
    });
  };
  params = {
    page: 1
  };
  gettableData = () => {
    let _this = this;
    axios
      .ajax({
        url:
          "https://www.easy-mock.com/mock/5c9b800e654f582502058ae1/mock/demotable",
        data: {
          params: {
            page: this.params.page
          }
        }
      })
      .then(res => {
        this.setState({
          dataSource: res.data.result.tabledata,
          pagination: Util.pagination(res.data.result, current => {
            _this.params.page = current;
            _this.gettableData();
          })
        });
      });
  };
  handlesortOrder = (pagination, filters, sorter) => {};
  handelDelete = item => {
    console.log(item);
  };
  render() {
    let selectedRowKeys = this.state.selectedRowKeys;
    const dataSource = [];
    const columns = [
      {
        title: "姓名",
        dataIndex: "name",
        key: "name",
        width: 150
      },
      {
        title: "年龄",
        dataIndex: "age",
        key: "age",
        sorter: (a, b) => {
          return a.age - b.age;
        }
      },
      {
        title: "住址",
        dataIndex: "adress",
        render: (text, item) => {
          return (
            <a
              href="#"
              onClick={item => {
                this.handelDelete(item);
              }}
            >
              删除
            </a>
          );
        }
      }
    ];
    let rowSelection = {
      selectedRowKeys,
      type: "checkbox",
      onChange: (selectedRowKeys, selectedRows) => {
        this.setState({
          selectedRowKeys
        });
      }
    };
    return (
      <div>
        <Card title="基础表格">
          <Button onClick={this.deleteTable}>删除</Button>
          <Etable
            updateSelectRowkeysItems={Util.updateSelectRowkeysItems.bind(this)}
            selectedRowKeys={this.state.selectedRowKeys}
            dataSource={this.state.dataSource}
            columns={columns}
            pagination={this.state.pagination}
            selectIds={this.state.selectIds}
            selectItem={this.state.selectedRows}
            rowSelection="checkbox"
          />
          {/* <Table
            dataSource={this.state.dataSource}
            columns={columns}
            pagination={this.state.pagination}
            rowSelection={rowSelection}
            scroll={{ y: 150 }}
            sortOrder={"ascend"}
            onChange={this.handlesortOrder}
            onRow={(record, index) => {
              return {
                onClick: () => {
                  this.onRowClick(record, index);
                } // 点击行
              };
            }}
          /> */}
        </Card>
      </div>
    );
  }
}
