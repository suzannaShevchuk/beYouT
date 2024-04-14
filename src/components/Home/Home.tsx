import { Button, Col, Container, Row } from "react-bootstrap";
import "./Home.css";
import CarouselHome from "./Carousel";
import Navbarr from "../Navbar/Navbar";

function Home() {
  return (
    <>
      <Container>
        <Navbarr />
        <p className="homeHead fs-2 text-center">Beauty made simple</p>
        <CarouselHome />
        <p className="beauty fs-3 text-center">Ready for Beauty?</p>
        <Row className="ms-auto">
          <Col className="text-center">
            <Button className="buttons" href="/SignUp">
              Create Account
            </Button>
          </Col>
          <Col className="text-center">
            <Button className="buttons">List A Business</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
