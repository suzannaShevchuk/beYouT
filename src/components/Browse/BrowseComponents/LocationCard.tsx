import { Button, Card, Col, Row } from "react-bootstrap";
import phoneLocation2 from "../../../images/phoneLocation2.jpg";
import "../Browse.css";

function LocationCard() {
  return (
    <div>
      <Card className="locationCard">
        <Card.Body>
          <Row>
            <Col sm={8} className="locationCardText">
              <h5>Turn on location services for beauty near you</h5>
              <p>
                Get recommendations of great businesses, turn on location
                services so we can show you what's nearby.
              </p>
              <Button className="buttons" style={{ marginRight: "25px" }}>
                Search Near Me
              </Button>
              <Button className="buttons">Not Now</Button>
            </Col>
            <Col sm={4}>
              <img
                src={phoneLocation2}
                style={{ width: "70%", height: "150px" }}
              ></img>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}

export default LocationCard;
