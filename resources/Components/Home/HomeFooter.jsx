// import React
import React, {Component} from 'react';

// Components
import {Col, Row, Grid} from 'react-bootstrap/lib';
import {Link} from 'react-router';

// React Render
class HomeFooter extends Component {
 render (){
   return (
     <footer className="home-footer">
      <Grid>
        <Row className="show-grid">
          <Col md={ 3 } xs={ 12 } >
            <div>
              <img src="/Public/Images/symbol-logo-2.png"  />
              <p><i className="fa fa-copyright" aria-hidden="true"></i> 2016 MARC ZENN ALL RIGHTS RESERVED</p>
            </div>
          </Col>
          <Col md={ 9 } xs={ 12 } >
              <div className="home-footer-list">
              <Row>
                <ul>
                  <Col xs={ 3 }>
                    <li><Link to="/companies">Companies</Link></li>
                  </Col>
                  <Col  xs={ 3 }>
                    <li><Link to="/works">Work</Link></li>
                  </Col>
                  <Col  xs={ 3 }>
                    <li><Link to="/about">About</Link></li>
                  </Col>
                  <Col  xs={ 3 }>
                    <li><Link to="/contact">Contact</Link></li>
                  </Col>
                </ul>
              </Row>
              </div>
          </Col>
        </Row>
      </Grid>
     </footer>
   )
 }
}


HomeFooter.propTypes = {
  // propTypes
}


export default HomeFooter
