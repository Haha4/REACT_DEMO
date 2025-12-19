import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Users from "./Users";
import Settings from "./Setting";

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("组件挂载完成");

    return () => {
      console.log("组件卸载");
    };
  }, []); // ✅ 只在挂载 / 卸载时执行

  function handleClick() {
    setCount((prev) => prev + 1);
  }

  return (
    <div>
      <div>Hello, MyComponent! 当前计数: {count}</div>
      <button onClick={handleClick}>点击我</button>

      {/* v7 嵌套路由 */}
      <Routes>
        <Route path="post/users" element={<Users />} />
        <Route path="post/settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default MyComponent;
