import logo from './logo.svg';
import MyComponent from './component/MyComponent';
import MyFunctionComponent from './component/MyFunctionComponent';
import MyClassComponent from './component/MyClassComponent';
import MyControlledForm from './component/MyControlledForm';
import MyUncontrolledForm from './component/MyUncontrolledForm';
import './App.css';
import ThemeContext from './injectData/ThemeContext';
function App() {
   const items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' }
   ];
  return (
    <div className="App">
       <MyFunctionComponent message="Hello, World!" />
       <MyClassComponent message="Hello, World!MyClassComponent"/>
       <ThemeContext.Provider value="dark">
         <MyComponent >
               <MyControlledForm />
       </MyComponent>
       </ThemeContext.Provider>
       <MyComponent >
               <MyControlledForm />
       </MyComponent>
       <h3>受控组件</h3>
       <MyControlledForm />
       <h3>非受控组件</h3>
       <MyUncontrolledForm />
    </div>
  );
}

export default App;
