import React, {Component} from 'react';

import {Col, Row, Grid} from 'react-bootstrap/lib';

class HomeNav extends Component {
  render(){
    return(
      <nav className="site clear home-nav">
        <ul className="home-nav-list">
          <Grid>
            <Row className="show-grid">
              <Col>
                <li><a href="#" title="">Companies</a></li>
                <li><a href="#" title="">Works</a></li>
                <li><a href="#" title="">About</a></li>
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
