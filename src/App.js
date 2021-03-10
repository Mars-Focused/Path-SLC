import Login from "./Components/AdminLogin/Login";
import AdminCtrl from "./Components/AdminCtrl/AdminCtrl";
import About from "./Components/About/About";
import Header from "./Components/Header/Header";
import Events from "./Components/Events/Events";
import Blog from "./Components/Blog/Blog";
import Announcements from "./Components/Announcements/Announcements";
import MailList from "./Components/MailList/MailList";
import AgeVerify from "./Components/AgeVerify/AgeVerify";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact component={AgeVerify} />
        <Route path="/About" exact component={About} />
        <Route path="/Admin" exact component={Login} />
        <Route path="/AdminCtrl" exact component={AdminCtrl} />
        <Route path="/Events" exact component={Events} />
        <Route path="/Blog" exact component={Blog} />
        <Route path="/Announcements" exact component={Announcements} />
        <Route path="/MailList" exact component={MailList} />
      </Switch>
    </div>
  );
}

export default App;
