import { Card, Nav, Navbar } from "react-bootstrap";
import img3 from "../../../images/img3.jpg";
import "../Browse.css";

function BrowseHomeCard() {
  return (
    <div>
      <Card className="browseHomeCard">
        <Card.Img variant="top" src={img3} className="browseHomeImg"></Card.Img>
        <Card.Title className="browseCardHeader">Be Beautiful</Card.Title>
        <Card.Text className="browseCardText">
          Discover top-rated beauty professionals near you
        </Card.Text>
        <Card.Body className="cardBody">
          <Navbar className="browseNav">
            <Nav.Link className="browseNavLink" href="/BusinessesDisplay">
              Nail Salon
            </Nav.Link>
            <Nav.Link className="browseNavLink" href="/BusinessesDisplay">
              Hair Salon
            </Nav.Link>
            <Nav.Link className="browseNavLink" href="/BusinessesDisplay">
              Barbershop
            </Nav.Link>
            <Nav.Link className="browseNavLink" href="/BusinessesDisplay">
              Skin Care
            </Nav.Link>
            <Nav.Link className="browseNavLink" href="/BusinessesDisplay">
              Brows and Lashes
            </Nav.Link>
            <Nav.Link className="browseNavLink" href="/BusinessesDisplay">
              Cosmetics
            </Nav.Link>
            <Nav.Link className="browseNavLink" href="/BusinessesDisplay">
              Other
            </Nav.Link>
          </Navbar>
        </Card.Body>
      </Card>
    </div>
  );
}

export default BrowseHomeCard;
