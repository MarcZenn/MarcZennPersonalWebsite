// Libs
import React, {Component} from 'react';
import { Col, Row } from 'react-bootstrap/lib';

// Dependencies
import './SocialBar.scss';



class SocialBar extends Component {
  render() {
    return (
      <Row>
          <div className="home-social-bar">
            <ul>
              <Col md={4} xs={12}>
                <li><a href="https://github.com/MarcZenn">Github</a></li>
              </Col>
              <Col md={4} xs={12}>
                <li><a href="https://www.linkedin.com/in/marcosmartinez2">LinkedIn</a></li>
              </Col>
              <Col md={4} xs={12}>
                <li><a href="https://angel.co/marczenn">Angel.co</a></li>
              </Col>
            </ul>
          </div>
      </Row>
    )
  }
}


export default SocialBar
