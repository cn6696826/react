import React from "react";

export default class Life extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    console.log("componentWillMount");
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
  componentWillUpdate(nextProps, nextState, nextContext) {
    console.log("componentWillUpdate");
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    return 1;
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
  }
  render() {
    return <div>{this.props.name}</div>;
  }
}
