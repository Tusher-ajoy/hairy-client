import React, { useContext, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { userContext } from '../../../App';
import logo from '../../../images/barbershop.png';
import './Navigationbar.css';

const Navigationbar = () => {
  // const [loggedInUser, setLoggedInUser] = useContext(userContext);

  return (
    <Navbar style={{background:'rgba(9, 6, 17, 0.397)'}} variant="dark" expand="lg" fixed='top'>
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={logo}
            width="50"
            height="50"
            className="d-inline-block align-top"
          />{' '}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-end">
          <Nav style={{fontSize:'15px', fontWeight:'bold'}}>
            <Nav.Link style={{margin:'0 20px'}} href="/">Home</Nav.Link>
            <Nav.Link style={{margin:'0 20px'}} href="/#about">About</Nav.Link>
            <Nav.Link style={{margin:'0 20px'}} href="/#services">Services</Nav.Link>
            <Nav.Link style={{margin:'0 20px'}} href="/#team">Team</Nav.Link>
            <Nav.Link style={{margin:'0 20px'}} href="/dashboard">Dashboard</Nav.Link>
            <Nav.Link style={{margin:'0 20px'}} href="/#contact">Contact</Nav.Link>
            <Nav.Link style={{margin:'0 20px', padding:'8px 30px', background: 'rgb(220,164,78)', color:'white', textAlign:'center'}} href="/login">{sessionStorage.getItem('userName') ? 'Logout' : 'Login'}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigationbar;