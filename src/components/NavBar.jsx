import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import mylogo from "../assets/logo2.png"


const NavBar = () => {
  const [isOpen, setIsOpen] = useState(sessionStorage.getItem("email") || false)

  const handleClick = () => {
    setIsOpen(false)
    sessionStorage.clear()
  }

  return (
    <div>
      <Navbar className="bg-warning">
        {isOpen ? (<Container>
          <Navbar.Brand href="">
            <img src={mylogo} alt="my-logo" />         
          </Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="about">About</NavLink>
            <NavLink to="/" onClick={handleClick}>Logout</NavLink>
          </Nav>
        </Container>) : (<Container>
          <Navbar.Brand href="">Tarık CEYHAN</Navbar.Brand></Container>)}
      </Navbar>
    </div>
  )
}

export default NavBar