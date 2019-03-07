import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Subscribe from './Subscribe'
import Header from './Header'
// import App from 


const Routing = () => (
        <Router> 
            <Switch>
            {/* <Route exact path="/" component={App}/> */}
            <Route path="/Subscribe" component={Subscribe} />
            <Route path="/Header" component={Header} />
            </Switch>
     </Router>
  
);    

export default Routing;
