import React from "react";
import moment from "moment";
import {
  Card,
  Form,
  Input,
  Icon,
  Checkbox,
  Select,
  Switch,
  DatePicker,
  TimePicker,
  Radio,
  InputNumber,
  Upload,
  Button
} from "antd";
const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const Option = Select.Option;
const TextArea = Input.TextArea;
class Register extends React.Component {
  getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  };
  hasErrors = fieldsError => {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
  };
  handleChange = info => {
    if (info.file.status === "uploading") {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      this.getBase64(info.file.originFileObj, imageUrl =>
        this.setState({
          imageUrl,
          loading: false
        })
      );
    }
  };
  state = {
    loading: false
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
    let userInfo = this.props.form.getFieldsValue();
    console.log(userInfo);
  };
  render() {
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 3 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    };
    const {
      getFieldDecorator,
      getFieldsError,
      getFieldError,
      isFieldTouched
    } = this.props.form;
    const imageUrl = this.state.imageUrl;
    const userNameError =
      isFieldTouched("userName") && getFieldError("userName");
    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? "loading" : "plus"} />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    return (
      <div>
        <Card title="表单集合">
          <Form onSubmit={this.handleSubmit}>
            <FormItem label="用户名" {...formItemLayout}>
              {getFieldDecorator("userName", {
                rules: [
                  { required: true, message: "Please input your username!" }
                ]
              })(
                <Input prefix={<Icon type="user" />} placeholder="username" />
              )}
            </FormItem>
            <FormItem label="用户名" {...formItemLayout}>
              {getFieldDecorator("password", {
                rules: [
                  { required: true, message: "Please input your password!" }
                ]
              })(
                <Input prefix={<Icon type="lock" />} placeholder="password" />
              )}
            </FormItem>

            <FormItem label="性别" {...formItemLayout}>
              {getFieldDecorator("fex", {
                initialValue: "1",
                rules: [
                  { required: true, message: "Please input your password!" }
                ]
              })(
                <RadioGroup>
                  <Radio value="1">男</Radio>
                  <Radio value="2">女</Radio>
                </RadioGroup>
              )}
            </FormItem>
            <FormItem label="年龄" {...formItemLayout}>
              {getFieldDecorator("age", {
                initialValue: "24",
                rules: [
                  { required: true, message: "Please input your password!" }
                ]
              })(<InputNumber />)}
            </FormItem>
            <FormItem label="爱好" {...formItemLayout}>
              {getFieldDecorator("habbit", {
                initialValue: ["1", "2"],
                rules: [
                  { required: true, message: "Please input your password!" }
                ]
              })(
                <Select mode="multiple">
                  <Option value="1">篮球</Option>
                  <Option value="2">足球</Option>
                </Select>
              )}
            </FormItem>

            <FormItem label="地址" {...formItemLayout}>
              {getFieldDecorator("addres", {
                initialValue: moment("2018-08-08")
              })(<TextArea autosize={{ minRows: 2, maxRows: 6 }} />)}
            </FormItem>
            <FormItem label="头像" {...formItemLayout}>
              {getFieldDecorator("photo", {})(
                <Upload
                  listType="picture-card"
                  showUploadList={false}
                  action="//jsonplaceholder.typicode.com/posts/"
                  onChange={this.handleChange}
                >
                  {imageUrl ? (
                    <img src={imageUrl} alt="avatar" />
                  ) : (
                    uploadButton
                  )}
                </Upload>
              )}
            </FormItem>
            <FormItem {...formItemLayout}>
              <Button
                htmlType="submit"
                disabled={this.hasErrors(getFieldsError())}
              >
                提交
              </Button>
            </FormItem>
          </Form>
        </Card>
      </div>
    );
  }
}
export default (Register = Form.create()(Register));
// export default Login;?
