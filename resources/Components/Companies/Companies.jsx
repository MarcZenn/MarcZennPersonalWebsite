// Libs
import React, {Component} from 'react';
import { Col, Row, Grid } from 'react-bootstrap/lib';


// Dependencies
import './Companies.scss';


class Companies extends Component {
  render() {
    return(
      <section className="companies-content" key="companies-content">
        <div className="content-wrapper">
          <div className="content">
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
          </div>
        </div>
      </section>
    )
  }
}


Companies.propTypes = {
  //propTypes
}


export default Companies
