// Hook写法
import React, { useState, useEffect } from "react";

export default function mainApp() {
  const [title, setTitleName] = useState("React 创建成功");

  return (
    <div>
      <div>{title}</div>
    </div>
  );
}
