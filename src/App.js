import logo from './logo.svg';
import './App.css';
import { FrontPage } from './MyComponents/FrontPage';
import { TextForm } from './MyComponents/TextForm';
import { About } from './MyComponents/About';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  // const list1 = ["Pet", "Max"];
  // let res=list1.map((item)=>{
  //   return (
  //     <div></div>
  //   )
  // })

  return (
    <>
      <Router>
        <FrontPage />
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <>
                {/* <div className="container">
                  <TextForm />
                </div> */}
                <TextForm />
              </>
            )
          }}>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;