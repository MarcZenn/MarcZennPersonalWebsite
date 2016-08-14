import React, {Component} from 'react';

import {Col, Row, Grid} from 'react-bootstrap/lib';

class HomeNav extends Component {
  render(){
    return(
      <nav className="site clear home-nav">
        <ul className="home-nav-list">
          <Grid>
            <Row className="show-grid">
              <Col md={3} xs={12}>
                <li><a href="#" title="">Companies</a></li>
              </Col>
              <Col md={3} xs={12}>
                <li><a href="#" title="">Works</a></li>
              </Col>
              <Col md={3} xs={12}>
                <li><a href="#" title="">About</a></li>
              </Col>
              <Col md={3} xs={12}>
                <li><a href="#" title="">Contact</a></li>
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
