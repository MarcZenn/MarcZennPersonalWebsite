// import React
import React, {Component} from 'react';


// Components
import {Col, Row, Grid, Navbar, NavItem, Nav, NavDropdown, MenuItem} from 'react-bootstrap/lib';
import {Link} from 'react-router';


class Navigation extends Component {
  render(){
    return(
      <Navbar id="main-nav"  collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/"><img src="/public/images/symbol-logo-white.png"  /></Link>
          </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <NavItem eventKey={1}><Link className="nav-link" to="/companies">Companies</Link></NavItem>
          <NavItem eventKey={2}><Link className="nav-link" to="/works">Work</Link></NavItem>
          <NavItem eventKey={2}><Link className="nav-link" to="/about">About</Link></NavItem>
          <NavItem eventKey={2}><Link className="hirecta" to="/contact">Hire</Link></NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    )
  }
}

Navigation.propTypes = {
 // propTypes
}


export default Navigation
