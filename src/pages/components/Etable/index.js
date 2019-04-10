import React from "react";
import { Card, Table, Button, Modal } from "antd";
export default class Etable extends React.Component {
  onRowClick = (record, index) => {
    let selectedRowKeys = [];
    let selectType = this.props.selectType;
    console.log(selectType);
    if (selectType == "checkbox") {
      let selectedRowKeys = this.props.selectedRowKeys;
      let selectItem = this.props.selectItem;
      let selectIds = this.props.selectIds;
      if (selectIds !== undefined && selectIds.length > 0) {
        let i = selectIds.indexOf(record.id);
        if (i == -1) {
          selectedRowKeys.push(index);
          selectItem.push(record);
          selectIds.push(record.id);
        } else {
          selectedRowKeys.splice(i, 1);
          selectItem.splice(i, 1);
          selectIds.splice(i, 1);
        }
      } else {
        selectedRowKeys = [];
        selectItem = [];
        selectIds = [];
        selectedRowKeys.push(index);
        selectItem.push(record);
        selectIds.push(record.id);
      }

      this.props.updateSelectRowkeysItems(
        selectedRowKeys,
        selectItem,
        selectIds
      );
    } else {
      let selectedRowKeys = [index];
      let selectItem = [record];
      this.props.updateSelectRowkeysItems(selectedRowKeys, selectItem);
    }
  };
  initTable = () => {
    let row_selection = this.props.rowSelection;
    let selectedRowKeys = this.props.selectedRowKeys;

    let rowSelection = {
      selectedRowKeys: selectedRowKeys,
      type: "radio",
      onChange: this.onSelectChange
    };
    // 判断是否需要单选或者多选
    if (row_selection === false || row_selection === null) {
      row_selection = false;
    } else if (row_selection === "checkbox") {
      rowSelection.type = "checkbox";
    } else {
      row_selection = "radio";
    }
    return (
      <Table
        {...this.props}
        rowSelection={row_selection ? rowSelection : null}
        onRow={(record, index) => {
          return {
            onClick: () => {
              if (!row_selection) {
                return;
              }
              this.onRowClick(record, index);
            } // 点击行
          };
        }}
      />
    );
  };
  render() {
    return <div>{this.initTable()}</div>;
  }
}
