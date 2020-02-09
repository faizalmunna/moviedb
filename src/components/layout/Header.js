import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import './Header.scss'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem
  } from 'reactstrap';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
      <header>
        <Navbar expand="md">
            <NavbarBrand  href="/">MyOwnMovieDB</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
                <NavItem>
                <Link to={`/`}>Home</Link>
                </NavItem>
                <NavItem>
                <Link to={`/actors`}>Actors</Link>
                </NavItem>
                <NavItem>
                <Link to={`/contact`}>Contact</Link>
                </NavItem>
            </Nav>
            </Collapse>
        </Navbar>
      </header>
  );
}

export default Header