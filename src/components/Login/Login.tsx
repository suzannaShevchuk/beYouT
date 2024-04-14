import Form from "react-bootstrap/Form";
import Navbarr from "../Navbar/Navbar";
import "../Home/Home.css";
import "./Login.css";
import { Button, Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <Navbarr />

      <p className="homeHead fs-2 text-center">Login</p>

      <Container>
        <Card>
          <Card.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <div className="text-center">
                <Button type="submit" className="buttons">
                  Login
                </Button>
              </div>
            </Form>
            <Link className="d-flex justify-content-center" to={"/SignUp"}>
              Don't Have An Account? Sign Up
            </Link>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default Login;
