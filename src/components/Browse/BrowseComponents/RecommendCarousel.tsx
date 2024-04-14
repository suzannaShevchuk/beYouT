import { Card, Carousel, Row } from "react-bootstrap";
import "../Browse.css";
import Data from "../../../data/db.json";
import DisplayRating from "../../Rating/DisplayRating";

//if location services IS NOT turned on, will recommend highest rated businesses from all over US
//if location services IS turned on, will recommend highest rated business nearby

//passing props to use businesses
function RecommendCarousel() {
  return (
    <div>
      <Carousel className="carousel-dark">
        {Data.businesses.map((business) => {
          return (
            <Carousel.Item>
              <Row>
                <Card className="carouselCard" key={business.id}>
                  <Card.Body>
                    <Card.Title>{business.name}</Card.Title>
                    <Card.Text>{business.services}</Card.Text>
                    <DisplayRating props={business.rating} />
                    <Card.Text>{business.location}</Card.Text>
                  </Card.Body>
                </Card>
              </Row>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}

export default RecommendCarousel;
