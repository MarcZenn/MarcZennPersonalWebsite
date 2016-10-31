//import react
import React, {Component} from 'react';

// Components
import Nav from '.././Partials/Nav.jsx';
import {Col, Row, Grid} from 'react-bootstrap/lib';
import Waypoint from 'react-waypoint';
import {Link} from 'react-router';


class ProfessionalContributions extends Component {
  render(){
    return(
      <section>
        <Nav />
        <div className="professional-contributions-content">
          <Row className="work-item professional-contributions-header">
            <Col xs={12} className="text-left">
              <h1>This page represents a collective body of work built during my employment as a full-time developer within an organization, startup or agency. Feel free to peruse the projects and contact me if you have any questions, concerns or skeptical inquiries.</h1>
              <p>Also..please pardon the dust. Site currently under construction.</p>
            </Col>
            <ul>
              <li>
                <i className="devicon-git-plain colored"></i>
              </li>
              <li>
                <img src="/public/images/php-icon.png"  />
              </li>
              <li>
                <img src="/public/images/laravel-icon.png"  />
              </li>
              <li>
                <img src="/public/images/mysql-icon.png"  />
              </li>
            </ul>
          </Row>
          <Row className="work-item kickfurther">
            <Col className="text-left" xs={12} md={6}>
              <h2>A Place Called Kickfurther</h2>
              <p>The Micro-Retail Revolution.</p>
            </Col>
            <Col xs={12} md={6}>

            </Col>
          </Row>

          <div className="scroll-tracker">
            <div className="filled" id="wp-dot-1"></div>
            <div className="empty" id="wp-dot-2"></div>
            <div className="empty" id="wp-dot-3"></div>
            <div className="empty" id="wp-dot-4"></div>
          </div>
        </div>
      </section>
    )
  }
}




ProfessionalContributions.propTypes = {
  // .....
}



export default ProfessionalContributions
