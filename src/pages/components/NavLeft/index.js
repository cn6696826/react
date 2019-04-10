import React from "react";
import { Menu, Icon } from "antd";
import { Route, NavLink } from "react-router-dom";
import MenuConfig from "../../../recourse/menuConfig";
import "./index.less";
const SubMenu = Menu.SubMenu;
export default class Navleft extends React.Component {
  state = {
    currentKey: ""
  };
  componentWillMount() {
    let menuNode = this.renderMenu(MenuConfig);
    let currentKey = window.location.hash.replace(/#|\?.*/g, "");
    // this.setState({
    //   currentKey: _currentkey
    // });
    this.setState({
      menuNode: menuNode,
      currentKey: currentKey
    });
  }
  handleClick = () => {};
  renderMenu = data => {
    return data.map(item => {
      if (item.children) {
        return (
          <SubMenu title={item.title} key={item.key}>
            {this.renderMenu(item.children)}
          </SubMenu>
        );
      }
      return (
        <Menu.Item title={item.title} key={item.key}>
          <NavLink to={item.key}> {item.title}</NavLink>
        </Menu.Item>
      );
    });
  };
  render() {
    return (
      <div className="left-menu">
        <div className="top-icon">
          <img src="/assets/logo-ant.svg" alt="" className="icon-my" />
          <span style={{ marginLeft: "10px" }}>陈楠专属</span>
        </div>
        <Menu
          theme="dark"
          onClick={this.handleClick}
          selectedKeys={this.state.currentKey}
        >
          {this.state.menuNode}
        </Menu>
      </div>
    );
  }
}
