import logo from './logo.svg';
import './App.css';
import { FrontPage } from './MyComponents/FrontPage';
import { Content } from './MyComponents/Content';
function App() {
  const list1 = ["Pet", "Max"];
  // let res=list1.map((item)=>{
  //   return (
  //     <div></div>
  //   )
  // })
  return (
    <>
    <FrontPage />
    <Content res={list1} />
    </>
    
  );
}

export default App;