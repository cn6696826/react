import React from "react";
import { Select } from "antd";
const Option = Select.Option;
export default {
  pagination(data, callback) {
    return {
      onChange: current => {
        callback(current);
      },
      current: data.page,
      pageSize: data.page_size,
      showTotal: () => {
        return `共${data.total}条`;
      }
    };
  },
  getoptions(data) {
    let options = [];
    data.map((item, index) => {
      options.push(
        <Option id={item.id} value={item.value}>
          {item.name}
        </Option>
      );
    });
    return options;
  },
  updateSelectRowkeysItems(selectedRowKeys, selectedRows, selectIds) {
    if (selectIds) {
      this.setState({
        selectedRowKeys,
        selectedRows,
        selectIds
      });
    } else {
      this.setState({
        selectedRowKeys,
        selectedRows
      });
    }
  }
};
