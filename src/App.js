import { Button, Form, InputGroup } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./App.css";
import { useState } from "react";

function App() {
  const [validation, setValidation] = useState(false)
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidation(true);
  };

  return (
    <>
    <Form noValidate validated={validation} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <InputGroup hasValidation>
          <InputGroup.Text id="inputGroup">@</InputGroup.Text>
          <Form.Control type="email" placeholder="Email Address" />
          <Form.Control.Feedback type="invalid">Please enter valid email</Form.Control.Feedback>
        </InputGroup>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <InputGroup hasValidation>
          <Form.Control type="password" placeholder="Password" pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"/>
          <Form.Control.Feedback type="invalid">Please enter valid Password</Form.Control.Feedback></InputGroup>
        </Form.Group>
      </Row>
      <Row>
      <Form.Group className="mb-3" controlId="formGridFirstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control placeholder="First Name" pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"/>
        <Form.Control.Feedback type="invalid">Please enter valid name</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGridLastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control placeholder="Last Name" />
      </Form.Group>
      </Row>
      <Form.Group className="mb-3" controlId="formGridAddress">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="Address" />
        <Form.Control.Feedback type="invalid">Please enter valid address</Form.Control.Feedback>
      </Form.Group>
      <Row>
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control placeholder="City" />
        <Form.Control.Feedback type="invalid">Please enter valid city</Form.Control.Feedback>
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
          <Form.Label pattern="/(^\d{5}$)|(^\d{5}-\d{4}$)/">Zip</Form.Label>
          <Form.Control />
        <Form.Control.Feedback type="invalid">Please enter valid zip</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Terms and Condition" feedback="you must agree to terms and condition" feedbackType="invalid" required/>
      </Form.Group>
      <Button variant="primary" type="submit" style={{alignitem:"center"}}>
        Submit
      </Button>
    </Form>
    </>
  );
}

export default App;
