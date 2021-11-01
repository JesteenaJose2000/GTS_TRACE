import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Routing from "./Routing";
import Layout from "./components/layout";
import Dashboard from "./components/pages/Dashboard";
import Jobs from "./components/pages/Job/job";
import CustomReports from "./components/pages/CustomReports";
import Calender from "./components/pages/Calender";
import Activityreports from "./components/pages/Activities/Activityreports";
import Grazing from "./components/pages/Activities/Grazing";
import Harvest from "./components/pages/Activities/Harvest";
import Irrigation from "./components/pages/Activities/Irrigation";
import Maintainance from "./components/pages/Activities/Maintainance";
import Planting from "./components/pages/Activities/Planting";
import Spraylogs from "./components/pages/Activities/Spraylogs";
import Spreading from "./components/pages/Activities/Spreading";


class App extends Component {
  render() {
    return (
      <Router >
        <Layout>        
          <Switch>
            <Route path="/" exact>
              <Dashboard/> 
            </Route>
            <Route path="/Jobs" exact component={Jobs}></Route>
            <Route path="/Customreports" exact component={CustomReports}></Route>
            <Route path="/Calender" exact component={Calender}></Route>
            <Route path="/Activityreports" exact component={Activityreports}></Route>
            <Route path="/Grazing" exact component={Grazing}></Route>
            <Route path="/Harvest" exact component={Harvest}></Route>
            <Route path="/Maintainance" exact component={Maintainance}></Route>
            <Route path="/Planting" exact component={Planting}></Route>
            <Route path="/Spraylogs" exact component={Spraylogs}></Route>
            <Route path="/Spreading" exact component={Spreading}></Route>
            <Route path="/Irrigation" exact component={Irrigation}></Route>
          </Switch>
        </Layout>
      </Router>
    );
  }
}

export default App;
