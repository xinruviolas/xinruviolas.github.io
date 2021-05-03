import logo from './images/logo.png';
import './App.css';
import MyNavbar from "./MyNavbar";
import ProgressBar from "react-scroll-progress-bar";

function App() {

  return (
    <div className="App">
        <ProgressBar bgcolor="#8BD4C0" style={{position: "relative"}}/>

        <div className="header">
            <MyNavbar/>
        </div>
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
