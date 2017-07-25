// Libs
import React, {Component} from 'react';
import {Link} from 'react-router';


// Dependencies
import './Header.scss';
import {Col, Row, Grid, Navbar, NavItem, Nav, NavDropdown, MenuItem} from 'react-bootstrap/lib';



class Header extends Component {
  constructor(props){
    super(props)
  }
  activateTerminalMode(e) {
    e.preventDefault();
  }
  render(){
    const { terminal_mode, turnOffTerminalMode, turnOnTerminalMode, currentPath } = this.props;

    return(
      <Navbar className={`${(!terminal_mode && currentPath !== '/') && 'solid'}`} id="main-nav" collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/"><img src="/public/images/8bitme.jpg"  /></Link>
          </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1}><Link className="nav-link" to="/companies">Companies</Link></NavItem>
            <NavItem eventKey={2}><Link className="nav-link" to="/works">Work</Link></NavItem>
            <NavItem eventKey={2}><Link className="hirecta" to="/contact">Hire</Link></NavItem>
            {terminal_mode ? <NavItem eventKey={2}><Link onClick={turnOffTerminalMode} className="hirecta" to="">2017</Link></NavItem> : <NavItem eventKey={2}><Link onClick={turnOnTerminalMode} className="terminalcta" to="">1989</Link></NavItem> }

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

Header.propTypes = {
 // propTypes
}


export default Header
