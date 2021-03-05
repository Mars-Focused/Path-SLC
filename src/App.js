import Login from "./Components/AdminLogin/Login";
import AdminCtrl from "./Components/AdminCtrl/AdminCtrl";
import About from "./Components/About/About";
import Header from "./Components/Header/Header"
import { Route, HashRouter, Switch, BrowserRouter } from "react-router-dom";
const Router =
  process.env.NODE_ENV === "development" ? HashRouter : BrowserRouter;

function App() {
  return (
    <div>
      <Header/>
      <Router>
        <Switch>
          <Route path="/" exact component={About} />
          <Route path="/Admin" exact component={Login} />
          <Route path="/AdminCtrl" exact component={AdminCtrl} />
          <Route />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
