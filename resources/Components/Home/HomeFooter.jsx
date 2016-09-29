// Components
import React, {Component} from 'react';

import {Col, Row, Grid} from 'react-bootstrap/lib';

// React Render
class HomeFooter extends Component {
 render (){
   return (
     <footer className="home-footer">
      <Grid>
        <Row className="show-grid">
          <Col md={ 4 } xs={ 12 } >
            <div>
              <img src="/Public/Images/symbol-logo.png"  />
            </div>
          </Col>
          <Col md={ 8 } xs={ 12 } >
              <div className="home-footer-list">
              <Row>
                <ul>
                  <Col xs={ 12 }>
                    <li><a href="#" title="">Companies</a></li>
                  </Col>
                  <Col  xs={ 12 }>
                    <li><a href="#" title="">Works</a></li>
                  </Col>
                  <Col  xs={ 12 }>
                    <li><a href="#" title="">About</a></li>
                  </Col>
                  <Col  xs={ 12 }>
                    <li><a href="#" title="">Contact</a></li>
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
