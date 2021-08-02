import React from 'react'
import { Form,Button } from 'react-bootstrap';


function Reachus() {
    return (
        <div className="col-lg-4 ml-auto pin">
            <h4>Contact Us</h4>  
            <p>
            Anything you want to enquire from us? send us a message by filling your details below.</p>
            <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Your Names</Form.Label>
    <Form.Control type="email" placeholder="Enter your names" />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Email.</Form.Label>
    <Form.Control type="password" placeholder="Enter email address" />
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Phone number.</Form.Label>
    <Form.Control type="password" placeholder="Enter your Phone number" />
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Your message.</Form.Label>
    <textarea className="form-control" placeholder="Type your message" id="exampleFormControlTextarea1" rows="5"></textarea>
  </Form.Group>
  <Button variant="primary"className="mt-2" type="submit">
    Submit
  </Button>
  </Form>
  </div>
    )
}

export default Reachus
