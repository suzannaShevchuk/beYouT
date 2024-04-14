import Navbarr from "../Navbar/Navbar";
import "../Home/Home.css";
import { Button, Card, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div>
      <Navbarr />

      <p className="homeHead fs-2 text-center">Sign up</p>

      <Container className="signup-container">
        <Card className="signup-card">
          <Card.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="First Name" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Last Name" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              {/* d-grid gap-2 mt-3 */}
              <div className="text-center">
                <Button type="submit" className="buttons">
                  Sign Up
                </Button>
              </div>
              <Link className="d-flex justify-content-center" to={"/Login"}>
                Already Have An Account? Login
              </Link>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default SignUp;
