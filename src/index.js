import React from "react";
import ReactDOM from "react-dom";
import Hello from "./components/Hello";

const myh1 = React.createElement(
  "h1", // 这里必须用合法的html标签，而不能用自定义的React组件名
  { title: "this is title", id: "myh1" },
  "this is content",
  <Hello />
);

const dog = {
  name: "xxx",
  age: 3,
  gender: "male",
  //...
};
const myDiv1 = (
  <div>
    {<Hello name={dog.name} age={dog.age} gender={dog.gender} />}
    <Hello {...dog} />
    {myh1}
  </div>
);

ReactDOM.render(myDiv1, document.getElementById("app"));
