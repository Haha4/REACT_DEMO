import MyComponent from "./component/MyComponent";
import MyFunctionComponent from "./component/MyFunctionComponent";
import MyClassComponent from "./component/MyClassComponent";
import MyControlledForm from "./component/MyControlledForm";
import "./App.css";

import { Routes, Route, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  const goFunction = (path) => {
    navigate(path);
  };

  return (
    <div className="App">
      <button onClick={() => goFunction("/")}>跳转首页</button>
      <button onClick={() => goFunction("/about")}>跳转关于页</button>
      <button onClick={() => goFunction("/contact/123")}>跳转联系页</button>
      <button onClick={() => goFunction("/post")}>跳转 Post</button>

      <Routes>
        <Route path="/" element={<MyFunctionComponent />} />
        <Route path="/about" element={<MyClassComponent />} />
        <Route path="/post" element={<MyComponent />} />
        <Route path="/contact/:id" element={<MyControlledForm />} />
      </Routes>
    </div>
  );
}

export default App;
