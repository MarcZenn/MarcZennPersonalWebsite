// import React
import React, {Component} from 'react';


// Components
import {Col, Row, Grid} from 'react-bootstrap/lib';
import {Link} from 'react-router';



// React Render
class HomeNav extends Component {
  render(){
    return(
      <nav className="site clear home-nav">
        <ul className="home-nav-list">
          <Grid>
            <Row className="show-grid">
              <Col md={3} xs={12}>
                <li><Link to="/companies">Companies</Link></li>
              </Col>
              <Col md={3} xs={12}>
                <li><Link to="/works">Work</Link></li>
              </Col>
              <Col md={3} xs={12}>
                <li><Link to="/about">About</Link></li>
              </Col>
              <Col md={3} xs={12}>
                <li><Link to="/contact">Contact</Link></li>
              </Col>
            </Row>
          </Grid>
        </ul>
      </nav>
    )
  }
}

HomeNav.propTypes = {
 // propTypes
}


export default HomeNav
