import React, { useState, useEffect} from "react";
import logo from '../../images/Blue Logo.png';
import '../Styles/NavigationBar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavigationBar = ()=>{

    return(

        <>
        <div className="NavCont">
        <Navbar expand="lg">
            <Navbar.Brand href="#home"><img src={logo} style={{width:"20vh",height:"auto"}}/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto" id="Nav-links">
                <Nav.Link className="nav-links" href="#features">Home</Nav.Link>
                <Nav.Link  className="nav-links" href="#pricing">Orders</Nav.Link>
                <Nav.Link className="nav-links" href="#pricing">Contact Us</Nav.Link>
                <Nav.Link className="nav-links" href="#pricing">Feedback</Nav.Link>
            </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
        <br />
        </>
    );
}

export default NavigationBar;