import logo from './images/logo.png';
import './App.css';
import MyNavbar from "./MyNavbar";
import ProgressBar from 'react-progressbar-on-scroll'
import Portfolio from "./pages/Portfolio";
import Footer from "./Footer";

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
        <br/>
        <br/>
        <br/>
      {/*  <header className="App-header">*/}
      {/*    /!*<a*!/*/}
      {/*  /!*  className="App-link"*!/*/}
      {/*  /!*  href="https://reactjs.org"*!/*/}
      {/*  /!*  target="_blank"*!/*/}
      {/*  /!*  rel="noopener noreferrer"*!/*/}
      {/*  /!*>*!/*/}
      {/*  /!*  Learn React*!/*/}
      {/*  /!*</a>*!/*/}
      {/*</header>*/}
        <Footer/>
    </div>
  );
}

export default App;
