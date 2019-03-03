import React from "react";
import Child from "./Child";
export default class Life extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0
    };
  }
  addone = () => {
    this.setState({
      num: this.state.num + 1
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.addone}>点击加1</button>
        {this.state.num}
        <Child name={this.state.num} />
      </div>
    );
  }
}
