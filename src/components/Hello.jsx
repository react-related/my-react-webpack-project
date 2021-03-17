import React from "react"; // 首行必须导入React，否则报找不到的错误

export default function Hello(props) {
  console.log(props);
  return (
    <div>
      this is Hello component props.name:{props.name}, props.age:{props.age},
      props.gender:{props.gender}
    </div>
  );
}
