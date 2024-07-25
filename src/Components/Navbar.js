import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';
import './Navbar.css'; // Import the custom CSS

const NavigationBar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleLoginClose = () => setShowLogin(false);
  const handleLoginShow = () => setShowLogin(true);

  const handleRegisterClose = () => setShowRegister(false);
  const handleRegisterShow = () => setShowRegister(true);

  const isAdmin = true;

  return (
    <>
      <Navbar bg="light" expand="lg" className="large-navbar"> {/* Apply custom class */}
        <Navbar.Brand className="header" as={Link} to="/">CMS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/menu">Menu</Nav.Link>
            <Nav.Link as={Link} to="/order-history">Orders</Nav.Link>
            <Nav.Link as={Link} to="/feedback">Feedback</Nav.Link>
            {isAdmin && (
              <>
                <NavDropdown title="Admin" id="admin-nav-dropdown">
                  <NavDropdown.Item as={Link} to="/admin">Dashboard</NavDropdown.Item>
                </NavDropdown>
              </>
            )}
            <Nav.Link onClick={handleLoginShow}>Login</Nav.Link>
            <Nav.Link onClick={handleRegisterShow}>Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <LoginModal show={showLogin} handleClose={handleLoginClose} />
      <RegisterModal show={showRegister} handleClose={handleRegisterClose} />
    </>
  );
};

export default NavigationBar;
