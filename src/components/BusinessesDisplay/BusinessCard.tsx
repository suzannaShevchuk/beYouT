import { Card, Col, Row } from "react-bootstrap";
import "./BusinessesDisplay.css";
import img1 from "../../images/img1.jpg";
import DisplayRating from "../Rating/DisplayRating";

function BusinessCard(props: { props: business }) {
  const businessTemp = JSON.stringify(props);
  const business = JSON.parse(businessTemp);

  return (
    <div>
      <Card className="businessCard">
        <Row>
          <Card.Img
            className="cardImg"
            variant="right"
            src={img1}
            style={{ width: "20%", height: "20%" }}
          ></Card.Img>

          <Col>
            <Card.Title>{business.props.name}</Card.Title>
            <Card.Text>{business.props.location}</Card.Text>
            <Card.Text>
              <DisplayRating props={business.props.rating} />
            </Card.Text>
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default BusinessCard;
