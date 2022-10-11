import { Button, Form } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./App.css";

function App() {
  return (
    <>
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Email Address" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </Row>
      <Row>
      <Form.Group className="mb-3" controlId="formGridFirstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control placeholder="First Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGridLastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control placeholder="Last Name" />
      </Form.Group>
      </Row>
      <Form.Group className="mb-3" controlId="formGridAddress">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="Address" />
      </Form.Group>
      <Row>
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control placeholder="City" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>kathmandu</option>
            <option>bhaktapur</option>
            <option>lalitpur</option>
          </Form.Select>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>
      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check this out" />
      </Form.Group>
      <Button variant="primary" type="submit" style={{alignitem:"center"}}>
        Submit
      </Button>
    </Form>
    </>
  );
}

export default App;
