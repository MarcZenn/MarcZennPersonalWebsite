// Libs
import React, {Component} from 'react';
import {Link} from 'react-router';
import { Col, Row, Grid } from 'react-bootstrap/lib';


// Dependencies
import './Personal.scss';
import { PERSONAL_PROJECTS } from '../.././Utils/constants/projects.constants.js';


class Personal extends Component {
  render(){
    return(
      <section className="personal-projects" key="personal-projects">
          <div className="content-wrapper">
              <div className="overview">
                <h2>Feel free to peruse my personal passion projects.</h2>
                <p>If you have any questions please reach out...I will respond to your query after an appropriate amount of quiet contemplation.</p>
              </div>
              <div className="content">
                <Row>
                  {PERSONAL_PROJECTS.map((child) => {
                    return <Col key={child.key} xs={12} md={4} style={{padding: '0'}}>
                              <Link to={child.site}>
                                <div className="tile text-left" style={{backgroundImage: `url(${child.path})` }}>
                                    <div className="overlay"></div>
                                    <div className="copy">
                                      <h2>{child.name}</h2>
                                      <p><a href={child.site}>{child.desc}</a></p>
                                    </div>
                                 </div>
                              </Link>
                            </Col>
                  })}
                  </Row>
              </div>
              <div className="professional-projects-btn">
                <Link to='/professional-contributions'>See Professional Projects</Link>
              </div>
          </div>
      </section>
    )
  }
}



export default Personal
