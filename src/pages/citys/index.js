import React from "react";
import { Card, Select, Form, Button, Table, Modal } from "antd";
import { Link } from "react-router-dom";
import { from } from "rxjs";
import Axios from "../utils/axios/index";
import BaseForm from "./../components/baseForm/index";
const FormItem = Form.Item;
const Option = Select.Option;

export default class Citys extends React.Component {
  state = {
    dataSource: [],
    showcityModel: false
  };
  componentWillMount() {
    this.gettabledata();
  }
  handleOpenCity = () => {
    this.setState({
      showcityModel: true
    });
  };
  gettabledata = () => {
    Axios.ajax({
      url:
        "https://www.easy-mock.com/mock/5c9b96be654f582502058b92/mock_copy/citymange"
    }).then(res => {
      console.log(res);
      this.setState({
        dataSource: res.data.result.tableData
      });
    });
  };
  submitForm = () => {
    let cityform = this.formdata.props.form.getFieldsValue();
    console.log(this.formdata);
  };
  submit = data => {
    console.log(data);
  };
  openOrder = () => {
    window.open("", "balnk");
  };
  formList = [
    {
      label: "城市",
      initiaValue: "北京",
      type: "select",
      width: "120",
      field: "selectCity",
      data: [
        {
          id: "0",
          value: "0",
          name: "全部"
        },
        {
          id: "1",
          value: "1",
          name: "北京"
        },
        {
          id: "3",
          value: "2",
          name: "上海"
        }
      ]
    }
  ];
  render() {
    let coulmn = [
      {
        title: "城市id",
        dataIndex: "id",
        key: "id"
      },
      {
        title: "城市名称",
        dataIndex: "cityname"
      },
      {
        title: "用车模式",
        dataIndex: "pattern",
        render(pattern) {
          return pattern == 1 ? "停车点" : "禁停区";
        }
      },
      {
        title: "营运模式",
        dataIndex: "mode",
        render(mode) {
          return mode == 1 ? "你的" : "我的";
        }
      },
      {
        title: "开通时间",
        dataIndex: "createTime"
      },
      {
        title: "操作人",
        dataIndex: "opartor"
      },
      {
        title: "查看详情",
        render: (text, recode) => {
          return (
            <Link
              to={{
                pathname: `/common/order/detail/${recode.id}`
              }}
            >
              详情
            </Link>
          );
        }
      }
    ];

    return (
      <div>
        <Card>
          <BaseForm formList={this.formList} submitValue={this.submit} />
        </Card>
        <Card style={{ marginTop: 10 }} title="开通城市">
          <Button type="primary" onClick={this.handleOpenCity}>
            开通城市
          </Button>
          <Button type="primary" onClick={this.openOrder}>
            查看详情
          </Button>
        </Card>
        <Card>
          <Table columns={coulmn} dataSource={this.state.dataSource} />
          <Modal
            title="开通城市"
            visible={this.state.showcityModel}
            onCancel={() => {
              this.setState({
                showcityModel: false
              });
            }}
            onOk={this.submitForm}
          >
            <OpenCityForm
              wrappedComponentRef={item => {
                this.formdata = item;
              }}
            />
          </Modal>
        </Card>
        <Card />
      </div>
    );
  }
}
class FormFilter extends React.Component {
  handleCityChange = val => {
    console.log(val);
  };
  handleCearch = () => {
    console.log(1);
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        span: 5
      },
      wrapperCol: {
        span: 5
      }
    };
    return (
      <div>
        {/* <BaseForm formlist={this.formList}  /> */}
        {/* <Form layout="inline">
          <Form.Item label={"城市"} {...formItemLayout}>
            {getFieldDecorator("selectCity", {
              initialValue: "北京",
              rules: []
            })(
              <Select style={{ width: 120 }} onChange={this.handleCityChange}>
                <Option value="北京">北京</Option>
                <Option value="上海">上海</Option>
              </Select>
            )}
          </Form.Item>
          <Form.Item label={"城市"} {...formItemLayout}>
            {getFieldDecorator("selectCity", {
              initialValue: "北京",
              rules: []
            })(
              <Select style={{ width: 120 }} onChange={this.handleCityChange}>
                <Option value="北京">北京</Option>
                <Option value="上海">上海</Option>
              </Select>
            )}
          </Form.Item>
          <Form.Item label={"城市"} {...formItemLayout}>
            {getFieldDecorator("selectCity", {
              initialValue: "北京",
              rules: []
            })(
              <Select style={{ width: 120 }} onChange={this.handleCityChange}>
                <Option value="北京">北京</Option>
                <Option value="上海">上海</Option>
              </Select>
            )}
          </Form.Item>
          <FormItem>
            <Button
              type="primary"
              style={{ margin: "0 20px" }}
              onClick={this.handleCearch}
            >
              查询
            </Button>
            <Button>重置</Button>
          </FormItem>
        </Form> */}
      </div>
    );
  }
}

const Formfilter = Form.create()(FormFilter);
class OpenCityForm extends React.Component {
  render() {
    const formItemLayout = {
      labelCol: {
        span: 5
      },
      wrapperCol: {
        span: 19
      }
    };
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Form layout="horizontal">
          <FormItem label="选择城市" {...formItemLayout}>
            {getFieldDecorator("city_id", {
              initialValue: "1"
            })(
              <Select style={{ width: 100 }}>
                <Option value="">全部</Option>
                <Option value="1">北京市</Option>
                <Option value="2">天津市</Option>
              </Select>
            )}
          </FormItem>
          <FormItem label="营运模式" {...formItemLayout}>
            {getFieldDecorator("op_mode", {
              initialValue: "1"
            })(
              <Select style={{ width: 100 }}>
                <Option value="1">自营</Option>
                <Option value="2">加盟</Option>
              </Select>
            )}
          </FormItem>
          <FormItem label="用车模式" {...formItemLayout}>
            {getFieldDecorator("use_mode", {
              initialValue: "1"
            })(
              <Select style={{ width: 100 }}>
                <Option value="1">指定停车点</Option>
                <Option value="2">禁停区</Option>
              </Select>
            )}
          </FormItem>
        </Form>
      </div>
    );
  }
}
OpenCityForm = Form.create({})(OpenCityForm);
