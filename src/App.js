import logo from './images/logo.png';
import './App.css';
import MyNavbar from "./MyNavbar";
// import ProgressBar from "react-scroll-progress-bar";
import ProgressBar from 'react-progressbar-on-scroll'
import Portfolio from "./pages/Portfolio";

function App() {

  return (
    <div className="App">
        {/*<ProgressBar bgcolor="#8BD4C0" style={{position: "relative"}}/>*/}
        <ProgressBar color="#8BD4C0" position="top" height ={6}/>
        <div className="header">
            <MyNavbar/>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <Portfolio/>
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          website under construction, come back later!
        </p>
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />

          {/*<a*/}
        {/*  className="App-link"*/}
        {/*  href="https://reactjs.org"*/}
        {/*  target="_blank"*/}
        {/*  rel="noopener noreferrer"*/}
        {/*>*/}
        {/*  Learn React*/}
        {/*</a>*/}
      </header>
    </div>
  );
}

export default App;
