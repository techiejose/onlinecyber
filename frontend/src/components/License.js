import { Form,Button } from 'react-bootstrap';
import axios from "axios";
import React, { Component } from 'react'

export class License extends Component {
  state = {
    details: [],
    names: "",
    id: "",
    phone: "",
};
handleInput = (e) => {
  this.setState({
      [e.target.name]: e.target.value,
  });
};
handleSubmit = (e) => {
  e.preventDefault();

  axios
      .post("http://localhost:8000/cyberonline/", {
          names: this.state.names,
          id: this.state.id,
          phone: this.state.phone,
      })
      .then((res) => {
          this.setState({
              names: "",
              id: "",
              phone: "",
          });
      })
      .catch((err) => {});
};
  render() {
    return (
      <div>
        <div className="col-lg-4 ml-auto pin">
            <h4>License</h4>  
            <p>
            fill your details in the form below, send Ksh 200 and we will call you so that we may confirm some details from you, process yor request and send you the renewal copy once we receive 
            yor payment</p>
            <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Your Names</Form.Label>
    <Form.Control type="text" placeholder="Enter your names"name="names" onChange={this.handleInput} value={this.state.names} required/>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>ID No.</Form.Label>
    <Form.Control type="text" placeholder="Enter ID number" onChange={this.handleInput} name="id" value={this.state.id} required/>
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Phone number.</Form.Label>
    <Form.Control type="text" placeholder="Enter your Phone number"name="phone" onChange={this.handleInput} value={this.state.phone} required />
  </Form.Group>
  <Button variant="primary"className="mt-2" type="submit">
    Submit
  </Button>
  </Form>
        </div>
      </div>
    )
  }
}

export default License
