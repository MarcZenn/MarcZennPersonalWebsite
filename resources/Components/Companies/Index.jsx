// import React
import React, {Component} from 'react';


// Components
import {Col, Row, Grid} from 'react-bootstrap/lib';
import Nav from '.././Partials/Nav.jsx';
import Footer from '.././Partials/Footer.jsx';


class Companies extends Component {
  render() {
    return(
      <section>
        <Nav/>
          <div className="text-center flexbox-aligner under-construction-copy">
            <Row>
              <Col xs={12}>
                <h1>Blackhouse LLC.</h1>
                <p></p>
              </Col>
              <Col xs={12}>
                <p className="flexbox-aligner-item up-down-padder">Website Coming Soon</p>
              </Col>
            </Row>
          </div>
          <Footer/>
      </section>
    )
  }
}


Companies.propTypes = {
  //propTypes
}


export default Companies
