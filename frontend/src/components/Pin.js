import React, { Component } from 'react';
import { Form,Button } from 'react-bootstrap';
import axios from "axios";

export class Pin extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            activeItem: {
                names: "hghgbhgh",
                career: "hhhhhhhhhhhhh",
                idno: "7888888",
                dob: "1995-4-3",
                mobile: "0725365470",
                town: "thika",
                county: "makueni",
                box: "50"
                
              }
        }
    }
    handleChange = (e) => {
        let { name, value } = e.target;
    
        if (e.target.type === "checkbox") {
          value = e.target.checked;
        }
    
        const activeItem = { ...this.state.activeItem, [name]: value };
    
        this.setState({ activeItem });
      };
      handleSubmit = (item) => {
    

        if (item.id) {
          axios
            .put(`/api/todos/${item.id}/`, item)
            .then((res) => this.refreshList());
          return;
        }
        axios
          .post("/api/todos/", item)
          .then((res) => this.refreshList());
      };
    
    
    render() {
        return (
          <div>
          <div className="col-lg-4 ml-auto pin">
         <h4>KRA Pin</h4>  
         <p>
         fill yor details in the form below, send Ksh 200 and we will process yor request once we receive 
         yor payment
         <Form >
   <Form.Group controlId="formBasicEmail">
   <Form.Label>Your Proffesion</Form.Label>
   <Form.Control type="text"required placeholder="Enter proffesion"name="career" onChange={this.handleChange} value={this.state.activeItem.career}  />
   </Form.Group>
   
   <Form.Group controlId="formBasicPassword">
   <Form.Label>ID No.</Form.Label>
   <Form.Control type="text"required placeholder="Enter ID number" name="idno" onChange={this.handleChange} value={this.state.activeItem.idno}/>
   </Form.Group>
   <Form.Group controlId="formBasicPassword">
   <Form.Label>Names.</Form.Label>
   <Form.Control type="text"required placeholder="Enter your names"name="names" onChange={this.handleChange} value={this.state.activeItem.names} />
   </Form.Group>
   <Form.Group controlId="formBasicEmail">
   <Form.Label>Date of Birth</Form.Label>
   <Form.Control type="text"required placeholder="Enter D.O.B" name="dob" onChange={this.handleChange} value={this.state.activeItem.dob}/>
   </Form.Group>
   <Form.Group controlId="formBasicEmail">
   <Form.Label>Your P.O Box</Form.Label>
   <Form.Control type="text"required placeholder="Enter P.O Box" name="box" onChange={this.handleChange} value={this.state.activeItem.box}/>
   </Form.Group>
   <Form.Group controlId="formBasicPassword">
   <Form.Label>Select your County.</Form.Label>
   <Form.Control type="text"required placeholder="Enter ID number" name="county" onChange={this.handleChange} value={this.state.activeItem.county}/>
   </Form.Group>
   <Form.Group controlId="formBasicPassword">
   <Form.Label>Enter your Town</Form.Label>
   <Form.Control type="text"required placeholder="Enter your Town" name="town" onChange={this.handleChange} value={this.state.activeItem.town}/>
   </Form.Group>
   <Form.Group controlId="formBasicEmail">
   <Form.Label>Your Mobile No.</Form.Label>
   <Form.Control type="text"required placeholder="Enter Mobile number" name="mobile" onChange={this.handleChange} value={this.state.activeItem.mobile}/>
   </Form.Group>
   
   
   <Button variant="primary"className="mt-2"type=" submit" onClick={() => this.handleSubmit(this.state.activeItem)}>
   Submit
   </Button>
   </Form>
         </p>
     </div>
       </div>
        )
    }
}

export default Pin
