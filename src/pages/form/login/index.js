import React from "react";
import { Card, Form, Input, Icon, Checkbox } from "antd";
const FormItem = Form.Item;
class Login extends React.Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Card title="基础表单">
          <Form layout="inline">
            <FormItem>
              {getFieldDecorator("userName", {
                rules: [
                  { required: true, message: "Please input your username!" }
                ]
              })(
                <Input prefix={<Icon type="user" />} placeholder="username" />
              )}

              {getFieldDecorator("remeberPwd", {
                initialValue: true,
                valuePropName: "checked"
              })(<Checkbox>记住密码</Checkbox>)}
            </FormItem>
          </Form>
        </Card>
      </div>
    );
  }
}
export default (Login = Form.create()(Login));
// export default Login;?
