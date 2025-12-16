import React from "react";
class MyClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  componentDidMount() {
    // 组件挂载后执行的逻辑
  };// 空数组表示只在挂载和卸载时执行
  render() {
    return (
      <div>
        {this.props.message}
        <div>当前计数: {this.state.count}</div>
        <button onClick={this.increment}>增加</button>
      </div>
    );
  }
}
export default MyClassComponent;
