import logo from './logo.svg';
import Home from './components/Home';
import Business from './components/Business';
import License from './components/License';
import Wedding from './components/Wedding';
import Poster from './components/Poster';
import Blog from './components/Blog';
import Pin from './components/Pin';
import Reachus from './components/Reachus';
import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
    const [show, setShow] = useState(false);
    const showDropdown = (e)=>{
        setShow(!show);
    }
    const hideDropdown = e => {
        setShow(false);
    }
    return (
        <div>
             <Router>
      <Navbar bg="primary" variant="dark"expand="lg"className="nav">
        
      <Navbar.Brand>
      <img src={logo} width="40px"height="40px"/> 
    </Navbar.Brand>
    <Navbar.Toggle/>
    <Navbar.Collapse>
    <Nav className="centerdiv">
    <Nav.Link as={Link} to={""} className="spacing">Home </Nav.Link>
    <Nav.Link as={Link} to={"registerkra"} className="spacing">Kra Pin </Nav.Link>
    <Nav.Link as={Link} to={"license"} className="spacing">License </Nav.Link>
    <NavDropdown title="Designs"show={show}
   onMouseEnter={showDropdown} 
   onMouseLeave={hideDropdown}className="spacing"> 
    <NavDropdown.Item href="business">business Cards </NavDropdown.Item>
    <NavDropdown.Item href="wedding">Wedding Cards </NavDropdown.Item>
    <NavDropdown.Item href="poster">Poster </NavDropdown.Item>
    </NavDropdown>
    <Nav.Link as={Link} to={"contactus"} className="spacing">Contact Us </Nav.Link>
    <Nav.Link as={Link} to={"blog"} className="spacing">Blog </Nav.Link>
   
    </Nav>
    </Navbar.Collapse>
    
      </Navbar>
      <div>
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/registerkra">
            <Pin />
          </Route>
          <Route exact path="/wedding">
            <Wedding />
            </Route>
            <Route exact path="/poster">
            <Poster/>
          </Route>
          <Route exact path="/contactus">
            <Reachus/>
          </Route>
          <Route path="/business">
            <Business />
          </Route>
          <Route path="/license">
            <License />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
        </Switch>
      </div>
      </Router>
        </div>
    )
}

export default App