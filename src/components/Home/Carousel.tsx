import { Carousel } from "react-bootstrap";
import img1 from "../../images/img1.jpg";
import img2 from "../../images/img2.jpg";
import img3 from "../../images/img3.jpg";

function CarouselHome() {
  return (
    <div>
      <Carousel>
        <Carousel.Item className="text-align-center">
          <img
            src={img1}
            style={{ height: "500px", width: "100%" }}
            className="rounded"
          />
          <Carousel.Caption>
            <h3>Beauty</h3>
            <p>Find the Best rated beauty service you're looking for</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="text-align-center">
          <img
            src={img2}
            style={{ height: "500px", width: "100%" }}
            className="rounded"
          />
          <Carousel.Caption>
            <h3>Community</h3>
            <p>
              Leave reviews based on personal experience to help others choosing
              a business
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="text-align-center">
          <img
            src={img3}
            style={{ height: "500px", width: "100%" }}
            className="rounded"
          />
          <Carousel.Caption>
            <h3>Exceptional</h3>
            <p>
              With the help of reviews, location, and businesses, become the
              most beautiful you.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselHome;
