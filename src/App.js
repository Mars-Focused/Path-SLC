import Login from "./Components/AdminLogin/Login";
import { Route, HashRouter, Switch, BrowserRouter } from "react-router-dom";
const Router =
  process.env.NODE_ENV === "development" ? HashRouter : BrowserRouter;

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route />
        <Route />
        <Route />
      </Switch>
    </Router>
  );
}

export default App;
