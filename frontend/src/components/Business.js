import React from 'react'
import { Form,Button } from 'react-bootstrap';

function Business() {
    return (
        <div className="col-lg-4 ml-auto pin">
        <h4>Business Card</h4>  
        <p>
        A good business card helps to make your business stand out from the rest. Contact for proffesional business
        card design and you won't regret it. Start by filling your details below and we will call you for further
        clarifications.</p>
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

export default Business
