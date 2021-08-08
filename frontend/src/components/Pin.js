import React, { Component } from "react";
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import axios from "axios";
import './Pin.css';

export default class CustomModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: {
        names: "",
        profession: "",
        idno: "",
        dob: "",
        box: "",
        county: "",
        town: "",
        mobile: ""
        
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
      .get("/api/todos/")
      .then((res) => this.setState({ todoList: res.data }))
      .catch((err) => console.log(err));
  };
  handleSubmit = (item) => {
      
    axios
      .post("/api/todos/", item)
      .then((res) => this.refreshList());
  };
  render() {
    return (
      <div className="col-lg-8 mr-auto pin">
         <h4>KRA Pin</h4>  
         <p>
         fill yor details in the form below, send Ksh 200 and we will process yor request once we receive 
         yor payment</p>
          <Form>
            <FormGroup>
              <Label for="todo-title">Your Names</Label>
              <Input
                type="text"
                required
                id="todo-title"
                name="names" 
                value={this.state.activeItem.names}
                onChange={this.handleChange}
                placeholder="Enter Todo Title"
              />
            </FormGroup>
            <FormGroup>
              <Label for="todo-description">Your Profession</Label>
              <Input
                type="text"
                id="todo-description"
                name="profession"
                value={this.state.activeItem.profession}
                onChange={this.handleChange}
                placeholder="Enter Todo description"
              required/>
            </FormGroup>
            <FormGroup>
              <Label for="todo-id">Your Id No.</Label>
              <Input
                type="text"
                id="todo-description"
                name="idno"
                required
                value={this.state.activeItem.idno}
                onChange={this.handleChange}
                placeholder="Enter Todo description"
              />
            </FormGroup>
            <FormGroup>
              <Label for="todo-id">Your date of Birth.</Label>
              <Input
                type="text"
                id="todo-description"
                name="dob"
                required
                value={this.state.activeItem.dob}
                onChange={this.handleChange}
                placeholder="Enter dob"
              />
            </FormGroup>
            <FormGroup>
              <Label for="todo-id">Your Box.</Label>
              <Input
                type="text"
                id="todo-description"
                name="box"
                required
                value={this.state.activeItem.box}
                onChange={this.handleChange}
                placeholder="Enter box"
              />
            </FormGroup>
            <FormGroup>
              <Label for="todo-id">Your County.</Label>
              <Input
                type="text"
                id="todo-description"
                name="county"
                value={this.state.activeItem.county}
                required
                onChange={this.handleChange}
                placeholder="Enter county"
              />
            </FormGroup>
            <FormGroup>
              <Label for="todo-id">Your date of Town.</Label>
              <Input
                type="text"
                id="todo-description"
                name="town"
                value={this.state.activeItem.town}
                onChange={this.handleChange}
                required
                placeholder="Enter town"
              />
            </FormGroup>
            <FormGroup>
              <Label for="todo-id">Your mobile Number.</Label>
              <Input
                type="text"
                id="todo-description"
                name="mobile"
                value={this.state.activeItem.mobile}
                required
                onChange={this.handleChange}
                placeholder="Enter mobile Number"
              />
            </FormGroup>
            <Button color="primary"className="mt-2"  onClick={() => this.handleSubmit(this.state.activeItem)} type="submit">
Submit
</Button>
          </Form>
         
          
          
          </div>
         
    );
  }
}