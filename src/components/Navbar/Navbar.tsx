import "./Navbar.css";
import { Nav, NavDropdown, Navbar } from "react-bootstrap";

export default function Navbarr() {
  return (
    <Navbar className="navbarGlob navbar-collapse  fixed-top">
      <Navbar.Brand className="navName fs-3" href="/Home">
        BeYouTi
      </Navbar.Brand>
      <Nav className="">
        <Nav.Link className="navName" href="/Home">
          Home
        </Nav.Link>
        <Nav.Link className="navName" href="/Browse">
          Browse
        </Nav.Link>
        <NavDropdown title="Profile" id="dropdown">
          <NavDropdown.Item href="/Login">Login</NavDropdown.Item>
          <NavDropdown.Item>My Profile</NavDropdown.Item>
          <NavDropdown.Item>My Reviews</NavDropdown.Item>
          <NavDropdown.Item>Logout</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar>
  );
}
