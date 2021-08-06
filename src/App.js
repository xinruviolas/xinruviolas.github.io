import logo from './images/logo.png';
import './App.css';
import MyNavbar from "./MyNavbar";
import ProgressBar from 'react-progressbar-on-scroll'
import Portfolio from "./pages/Portfolio";
import Footer from "./Footer";
import About from "./pages/About";
import React from "react";
import { withRouter } from "react-router";

import {
    // HashRouter as Router,
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import resume from "./Xinru_Li.pdf"

function App() {
    const HeaderWithRouter = withRouter(MyNavbar);
  return (
      <Router basename={process.env.PUBLIC_URL}>
          <div>
              <ProgressBar color="#8BD4C0" position="top" height ={6}/>
                   <div className="header">
                       <HeaderWithRouter/>
                   </div>
              <Switch>
                  <Route path={process.env.PUBLIC_URL+"/about"} component={About}/>
                  <Route path="/" component = {Portfolio}/>
              </Switch>
          </div>
          <div className = "App">
          <Footer/>
          </div>
        </Router>
  );
}

export default App;
