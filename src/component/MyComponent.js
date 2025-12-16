import { useEffect, useState } from "react";

function MyComponent() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    // 这里就是 componentDidMount 的逻辑
    console.log("组件挂载完成");

    // 可选：return 一个清理函数，对应 componentWillUnmount
    return () => {
      console.log("组件卸载");
    };
  }, [count]); // ✅ 空依赖数组表示只在挂载和卸载时触发
  function handleClick() {
    return setCount(count + 1);
  }
  return (
    <div>
      Hello, MyComponent! 当前计数: {count}
      <div onClick={handleClick}>点击4我</div>
    </div>
  );
}
export default MyComponent;
