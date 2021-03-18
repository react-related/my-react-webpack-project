// class方式定义组件
import React from "react";

// 必须继承自React.Component类
export default class App2 extends React.Component {
  // class方式创建的组件中，不需要接收外部传递进来的props参数，直接通过this.props.xxx访问，this就是当前组件的实例对象

  // 该类继承自React.Component父类，所以自定义构造函数中，必须调用super()
  constructor() {
    // 只有调用了super()才能使用this关键字(不用this也要写)，否则报错：ReferenceError: this hasn't been initialised - super() hasn't been called
    super();
    // this.state={}相当于Vue组件中data(){return {}}
    this.state = {
      message: "这是class创建的组件，参数如下",
    };
  }
  // 在组件内部，必须有render函数，用于渲染当前组件所对应的虚拟DOM元素
  render() {
    // 无法在组件内修改props属性，会报错：Cannot assign to read only property 'name' of object '#<Object>'
    // this.props.name = "xxx";

    // render函数中，必须返回合法的JSX虚拟DOM结构
    return (
      <div>
        {this.state.message}: name:{this.props.name}, age:
        {this.props.age}, gender:{this.props.gender}
      </div>
    );
  }
}
