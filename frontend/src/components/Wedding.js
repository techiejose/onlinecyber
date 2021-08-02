import React from 'react'
import { Form,Button } from 'react-bootstrap';

function Wedding() {
    return (
        <div className="col-lg-4 ml-auto pin">
        <h4>Wedding Card</h4>  
        <p>
            Give us an opportunity to spice your wedding event by letting us design the wedding card you need.
            fill your details below and submit before its too late.
       </p>
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

<Button variant="primary"className="mt-2" type="submit">
Submit
</Button>
</Form>
</div>
    )
}

export default Wedding
