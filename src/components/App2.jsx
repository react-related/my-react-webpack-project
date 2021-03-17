import React from "react";

// class方式
class App2 extends React.Component {
  // 在组件内部，必须有render函数
  render() {
    // render函数中，必须返回合法的JSX虚拟DOM结构
    return <div>这是class创建的组件</div>;
  }
}
