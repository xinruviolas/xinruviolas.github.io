import { Navbar, Nav} from 'react-bootstrap';
import logo from "./images/logo.png";
import "./css/MyNavbar.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import resume from "./Xinru_Li.pdf"
import './css/pages.css';
import { Link } from "react-router-dom"



function MyNavbar(props) {
    const { location } = props;
    return (
        <div>
            <Navbar className={"navbar"} bg="light" expand="lg" fixed="top">
                <Navbar.Brand href="/">
                    <img src={logo} style={{width:75, marginTop: 0, marginLeft: 0}} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className="ml-auto" variant = "custom" activeKey={location.pathname}>
                        <Nav.Item>
                            <Nav.Link href="/" id = "text" class={"pagelink"}>Projects</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to={process.env.PUBLIC_URL+"/about"} id = "text">About</Link>
                            {/*<Nav.Link href={process.env.PUBLIC_URL+"/about"} id = "text">About</Nav.Link>*/}
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href={resume} id = "text" target="_blank">Resume</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>

    );
}
export default MyNavbar;