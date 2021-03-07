import Login from "./Components/AdminLogin/Login";
import AdminCtrl from "./Components/AdminCtrl/AdminCtrl";
import About from "./Components/About/About";
import Header from "./Components/Header/Header";
import Events from "./Components/Events/Events";
import Blog from "./Components/Blog/Blog";
import Announcements from "./Components/Announcements/Announcements";
import MailList from "./Components/MailList/MailList";

import { Route, HashRouter, Switch, BrowserRouter } from "react-router-dom";
const Router =
  process.env.NODE_ENV === "development" ? HashRouter : BrowserRouter;

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <Route path="/" exact component={About} />
          <Route path="/Admin" exact component={Login} />
          <Route path="/AdminCtrl" exact component={AdminCtrl} />
          <Route path="/Events" exact component={Events} />
          <Route path="/Blog" exact component={Blog} />
          <Route path="/Announcements" exact component={Announcements} />
          <Route path="/MailList" exact component={MailList} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
