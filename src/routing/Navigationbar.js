import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

import { NavLink } from 'react-router-dom'
const Navigationbar = () => {
    const myStyle = ({isActive}) => {
        return{
            color : isActive ? 'red' : 'green'
        }
    }
    return(
        <>
        <Navbar bg="light" data-bs-theme="dark">
        <Container>
        <Navbar.Brand ><NavLink  style={myStyle} to={""}>Home</NavLink></Navbar.Brand>
          {/* <Navbar.Brand style={myStyle} to={""}>Home</Navbar.Brand> */}
          <Nav className="me-auto">
            {/* <NavLink  style={myStyle} to={""}>Home</NavLink> */}
            <NavLink style={myStyle} to={"/form"}>Register</NavLink>
            <NavLink  style={myStyle} to={"/table"}>Viewdata</NavLink>
          </Nav>
        </Container>
      </Navbar>
        {/* <nav>
        <NavLink style={myStyle} to={"/form"}>Form</NavLink>
        <NavLink style={myStyle} to={"/table"}>Table</NavLink>
        </nav>         */}
        </>
    )
}
export default Navigationbar