// Libs
import React, {Component} from 'react';
import {Col, Row, Grid} from 'react-bootstrap/lib';
import {Link} from 'react-router';

// Dependencies
import './Footer.scss';

// React Render
class Footer extends Component {
 render (){
   const { currentPath } = this.props;

   if(currentPath !== '/') {
     return (
       <footer className="footer">
        <Grid>
          <Row className="show-grid">
            <Col xs={ 12 } >
                <div className="home-footer-list">
                <Row>
                  <ul>
                    <Col  xs={ 3 }>
                      <li><Link to="/contact">Contact</Link></li>
                    </Col>
                    <Col  xs={ 3 }>
                      <li><a href="https://github.com/MarcZenn">Github</a></li>
                    </Col>
                    <Col  xs={ 3 }>
                      <li><a href="https://www.linkedin.com/in/marcosmartinez2">LinkedIn</a></li>
                    </Col>
                    <Col  xs={ 3 }>
                      <li><a href="https://resume.com/share/marczenn">Resume</a></li>
                    </Col>
                  </ul>
                </Row>
                </div>
            </Col>
          </Row>
        </Grid>
       </footer>
     )
   } else {
     return (<div></div>)
   }
 }
}


Footer.propTypes = {
  // propTypes
}


export default Footer
