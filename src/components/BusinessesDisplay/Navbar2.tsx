import { Nav, Navbar } from "react-bootstrap";
import "./BusinessesDisplay.css";

function Navbar2() {
  return (
    <div>
      <Navbar className="businessNav navbar-collapse  fixed-top">
        <Nav className="nav2">
          <Nav.Link className="navName2" href="">
            Nail Salon
          </Nav.Link>
          <Nav.Link className="navName2" href="">
            Hair Salon
          </Nav.Link>
          <Nav.Link className="navName2" href="">
            Barbershop
          </Nav.Link>
          <Nav.Link className="navName2" href="">
            Skin Care
          </Nav.Link>
          <Nav.Link className="navName2" href="">
            Brows and Lashes
          </Nav.Link>{" "}
          <Nav.Link className="navName2" href="">
            Cosmetics
          </Nav.Link>
          <Nav.Link className="navName2" href="">
            Other
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}

export default Navbar2;
