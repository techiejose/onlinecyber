import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  
} from "reactstrap";
import axios from "axios";
import React, { Component } from 'react'

export class Wedding extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
        activeItem: {
          names: "",
          idno: "",
          message: "",
          mobile: "",
          jobtype: "Contact us"
          
        }
    }};
    
    handleChange = (e) => {
      let { name, value } = e.target;
  
      if (e.target.type === "checkbox") {
        value = e.target.checked;
      }
  
      const activeItem = { ...this.state.activeItem, [name]: value };
      this.setState({ activeItem });    
    };
    refreshList = () => {
      axios
        .get("/api/job/")
        .then((res) => this.setState({ todoList: res.data }))
        .catch((err) => console.log(err));
    };
    handleSubmit = (item) => {
        
      axios
        .post("/api/job/", item)
        .then((res) => this.refreshList());
    };
  render() {
    return (
      <div>
        <div className="col-lg-8 ml-auto pin">
            <h4>Contact Us</h4>  
            <p>
            Anything you want to enquire from us? send us a message by filling your details below.
           </p>
            <Form>
  <FormGroup>
    <Label>Your Names</Label>
    <Input type="text" placeholder="Enter your names"name="names" onChange={this.handleChange} value={this.state.activeItem.names} required/>
  </FormGroup>

  <FormGroup>
    <Label>ID No.</Label>
    <Input type="text" placeholder="Enter ID number" onChange={this.handleChange} name="idno" value={this.state.activeItem.idno} required/>
  
    </FormGroup>
  
  <FormGroup>
    <Label>phone number.</Label>
    <Input type="text" placeholder="Enter your Phone number"name="mobile" onChange={this.handleChange} value={this.state.activeItem.mobile} required />
  </FormGroup>
  <FormGroup>
  <FormGroup>
    <Label >Your message.</Label>
    <textarea className="form-control" placeholder="Enter your message"name="message" onChange={this.handleChange} value={this.state.activeItem.message} required ></textarea>
  </FormGroup> 
    <Input type="hidden" placeholder="Enter your Phone number"name="jobtype" onChange={this.handleChange} value={this.state.activeItem.jobtype} required />
    </FormGroup>
<Button color="primary"className="mt-2" type="submit" onClick={() => this.handleSubmit(this.state.activeItem)}>
    Submit
  </Button>  
  </Form>
        </div>
      </div>
    )
  }
}

export default Wedding
