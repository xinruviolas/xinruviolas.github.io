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
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import resume from "./Xinru_Li.pdf"

function App() {
    const HeaderWithRouter = withRouter(MyNavbar);
  return (
      <Router>
          <div>
              <ProgressBar color="#8BD4C0" position="top" height ={6}/>
                   <div className="header">
                       <HeaderWithRouter/>
                       {/*<MyNavbar/>*/}
                   </div>
              {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
              <Switch>
                  <Route path="/about">
                      <About />
                  </Route>
                  <Route path="/">
                      <Portfolio />
                  </Route>
              </Switch>
          </div>
          <div className = "App">
          <Footer/>
          </div>
        </Router>

  );
}

export default App;
