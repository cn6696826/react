import React from "react";
import { Form, Select, Input, Radio, Button } from "antd";
import Utils from "../../utils/utils";
const Option = Select.Option;
const FormItem = Form.Item;

class BaseForm extends React.Component {
  handlesearch = () => {
    let fieldvalue = this.props.form.getFieldsValue();
    console.log(fieldvalue);
    this.props.submitValue(fieldvalue);
  };
  initformList = () => {
    let FormItemList = [];
    const { getFieldDecorator } = this.props.form;
    const formList = this.props.formList;
    if (formList && formList.length > 0) {
      formList.map((item, index) => {
        let label = item.label;
        let field = item.field;
        let initiaValue = item.initiaValue;
        let type = item.type;
        let width = item.width;
        let data = item.data;
        if (item.type == "select") {
          const SELECT = (
            <Form.Item label={label}>
              {getFieldDecorator([field], {
                initialValue: initiaValue
              })(<Select>{Utils.getoptions(data)}</Select>)}
            </Form.Item>
          );
          FormItemList.push(SELECT);
        }
      });
    }
    return FormItemList;
  };
  render() {
    return (
      <div>
        <Form>
          {this.initformList()}
          <FormItem>
            <Button
              type="primary"
              style={{ margin: "0 20px" }}
              onClick={this.handlesearch}
            >
              查询
            </Button>
            <Button>重置</Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}
export default Form.create()(BaseForm);
