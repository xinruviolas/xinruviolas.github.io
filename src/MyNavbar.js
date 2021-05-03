import { Navbar, Nav} from 'react-bootstrap';
import logo from "./images/logo.png";
import "./css/MyNavbar.css";
import 'bootstrap/dist/css/bootstrap.min.css';


function MyNavbar(props) {
    return (
        <div>
            <Navbar className={"navbar"} bg="light" expand="lg" fixed="top">
                <Navbar.Brand href="/">
                    <img src={logo} style={{width:75, marginTop: 0, marginLeft: 0}} />
                </Navbar.Brand>
                <Navbar.Text href="/volunteerDash">
                </Navbar.Text>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="/" id = "text">Projects</Nav.Link>
                        <Nav.Link href="/" id = "text">About</Nav.Link>
                        <Nav.Link href="/" id = "text">Resume</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>

    );
}
export default MyNavbar;