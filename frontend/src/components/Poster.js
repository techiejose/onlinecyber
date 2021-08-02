import React from 'react'
import { Form,Button } from 'react-bootstrap';

function Poster() {
    return (
        <div className="col-lg-4 ml-auto pin">
        <h4>Poster</h4>  
        <p>
       We design eye catching posters at very pocket friendly costs. Reach us by filling the form below.</p>
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

export default Poster
