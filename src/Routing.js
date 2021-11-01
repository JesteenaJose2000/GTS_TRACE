import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import Layout from "./components/layout";
import history from "./History";


 class Routing  extends Component{
     render(){
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Layout}/>
                </Switch>
            </Router>
       
            );
     }
   
}

export default Routing;