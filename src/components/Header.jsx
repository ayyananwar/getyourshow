import React from 'react';
import { Navbar, Nav, Form, Button, Container, Dropdown } from 'react-bootstrap';
import { Search, Person, Moon, Sun } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <Navbar 
      bg={darkMode ? 'dark' : 'light'} 
      variant={darkMode ? 'dark' : 'light'} 
      expand="lg" 
      sticky="top"
      collapseOnSelect
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold fs-3 text-warning">
          GetYourShow
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/movies" className="fw-bold mx-2">Movies</Nav.Link>
            <Nav.Link as={Link} to="/events" className="fw-bold mx-2">Events</Nav.Link>
          </Nav>
          
          <Form className="d-flex mx-2 my-2 my-lg-0">
            <Form.Control
              type="search"
              placeholder="Search..."
              className={darkMode ? 'bg-dark text-white' : ''}
              aria-label="Search"
            />
            <Button 
              variant={darkMode ? 'outline-light' : 'outline-dark'} 
              className="ms-2"
            >
              <Search />
            </Button>
          </Form>
          
          <Button
            variant={darkMode ? 'outline-light' : 'outline-dark'}
            className="mx-2 my-2 my-lg-0"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun /> : <Moon />}
          </Button>
          
          <Dropdown className="mx-2 my-2 my-lg-0">
            <Dropdown.Toggle variant={darkMode ? 'outline-warning' : 'warning'}>
              <Person className="me-1" /> Account
            </Dropdown.Toggle>
            <Dropdown.Menu className={darkMode ? 'bg-dark' : ''}>
  <Dropdown.Item 
    as={Link} 
    to="/login" 
    className={darkMode ? 'text-white' : 'text-dark'}
  >
    Login
  </Dropdown.Item>
  <Dropdown.Item 
    as={Link} 
    to="/register" 
    className={darkMode ? 'text-white' : 'text-dark'}
  >
    Register
  </Dropdown.Item>
</Dropdown.Menu>
          </Dropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;