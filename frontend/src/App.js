import logo from './logo.svg';
import './App.css';
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
import {NavLink} from 'react-router-dom'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { faFacebook, faTwitter,faGooglePlus,faInstagram,faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
      <Navbar bg="primary" variant="dark"expand="lg"className="nav navstyle" style={{height:"52px"}}>
        
      <Navbar.Brand>
      <img src={logo} width="40px"height="40px"/> 
    </Navbar.Brand>
    <Navbar.Toggle/>
    <Navbar.Collapse>
    <Nav className="centerdiv py-0">
    <NavLink as={Link} to={"home"} className="spacing py-1 linkstyle linkhover" activeClassName="active">Home </NavLink>
    <NavLink as={Link} to={"registerkra"} className="spacing py-1 linkstyle linkhover" activeClassName="active ">Kra Pin </NavLink>
    <NavLink as={Link} to={"license"} activeClassName="active" className="spacing py-1 px-2 linkstyle linkhover">License </NavLink>
    <NavDropdown title="Designs"show={show}
    className="linkhover"
   onMouseEnter={showDropdown} 
   onMouseLeave={hideDropdown}className="spacing"> 
    <NavDropdown.Item href="business">business Cards </NavDropdown.Item>
    <NavDropdown.Item href="wedding">Wedding Cards </NavDropdown.Item>
    <NavDropdown.Item href="poster">Poster </NavDropdown.Item>
    </NavDropdown>
    <NavLink as={Link} activeClassName="active" to={"contactus"} className="spacing py-1 linkstyle linkhover">Contact Us </NavLink>
    <NavLink as={Link} to={"blog"} className="spacing linkstyle linkhover" activeClassName="active py-1 ">Blog </NavLink>
   
    </Nav>
    </Navbar.Collapse>
    
      </Navbar>
      <div className="row stylerow">
      <div className="col">
      <Switch>
          <Route exact path="home/">
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
      <div className="col-lg-4">
        <h5>TOP BLOG POSTS</h5>
        <ul>
          <li>Why you need a KRA Pin</li>
          <li>The cost of renewing a Driving license</li>
          <li>What you should know about PDL</li>
        </ul>
        </div>
      </div>
      </Router>
      
      {/*the footer */}
     
   
<footer class="page-footer font-small unique-color-dark footercontent mt-5">

  <div class="">
    <div class="container ">
      

    </div>
  </div>

  
  <div class="container text-center text-md-left mt-5 ">

   
    <div class="row  " >

      
      <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 mt-4 socialstyle">

       
        <h6 class="text-uppercase font-weight-bold">Social networks</h6>
        <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: "80px"}}/>
        <div>
        <a class="fb-ic mx-2">
            <i class="fab fa-facebook-f white-text mr-4 socialstyle"> </i>
            <FontAwesomeIcon icon={faFacebook} className="socialstyle"/>
          </a>
          
          <a class="tw-ic mx-2">
            <i class="fab fa-twitter white-text mr-4"> </i>
            <FontAwesomeIcon icon={faTwitter} className="socialstyle"/>
          </a>
          
          <a class="gplus-ic mx-2">
            <i class="fab fa-google-plus-g white-text mr-4"> </i>
            <FontAwesomeIcon icon={faGooglePlus} className="socialstyle" />
          </a>
      
          <a class="li-ic mx-2">
            <i class="fab fa-linkedin-in white-text mr-4"> </i>
            <FontAwesomeIcon icon={faLinkedin} className="socialstyle"/>
          </a>
          
          <a class="ins-ic mx-2">
            <i class="fab fa-instagram white-text"> </i>
            <FontAwesomeIcon icon={faInstagram} className="socialstyle" />
          </a>
</div>
      </div>
      
      <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 mt-4 socialstyle">

       
        <h6 class="text-uppercase font-weight-bold">Services</h6>
        <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px"}}/>
        <p >
          <a href="#!" className="socialstyle">KRA Pin Register</a>
        </p>
        <p>
          <a href="#!" className="socialstyle">License Renewal</a>
        </p>
        <p>
          <a href="#!" className="socialstyle">Card Designs</a>
        </p>
        <p>
          <a href="#!" className="socialstyle">Blogging</a>
        </p>

      </div>
      
      <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 mt-4">

        
        <h6 class="text-uppercase font-weight-bold">Useful links</h6>
        <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width:"60px"}}/>
        <p>
          <a href="#!"className="socialstyle">KRA</a>
        </p>
        <p>
          <a href="#!"className="socialstyle">License</a>
        </p>
        <p>
          <a href="#!"className="socialstyle">Designs</a>
        </p>
        <p>
          <a href="#!"className="socialstyle">Contact us</a>
        </p>

      </div>
     
      <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 mt-4">

       
        <h6 class="text-uppercase font-weight-bold">Contact</h6>
        <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px"}}/>
        <p>
          <i class="fas fa-home mr-3"></i> Nairobi, Kenya</p>
        <p>
          <i class="fas fa-envelope mr-3"></i> info@cyberonline.com</p>
        <p>
          <i class="fas fa-phone mr-3"></i> + 254 701 833 970</p>
        <p>
          <i class="fas fa-print mr-3"></i> + 254 735 285 909</p>

      </div>
      

    </div>
    

  </div>
 
  <div class="footer-copyright text-center py-3 footerx socialstyle">© 2021 Copyright:
    <a href="https://mdbootstrap.com/" className="socialstyle"> Cyberonline</a>
  </div>
  
</footer>


        </div>
    )
}

export default App