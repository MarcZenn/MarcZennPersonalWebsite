// Libs
import React, {Component} from 'react';
import {Link} from 'react-router';
import {Col, Row, Grid} from 'react-bootstrap/lib';

// Dependencies
import './Professional.scss';
import { PROFESSIONAL_PROJECTS } from '../.././Utils/constants/projects.constants.js';



class Professional extends Component {
  render(){
    return(
      <section className="professional-projects" key="professional-projects">
        <div className="content-wrapper">
            <div className="overview">
              <h2>Professional projects &amp; contributions</h2>
              <p>"Tell me and I forget. Teach me and I remember. Involve me and I learn" - B. Franklin</p>
            </div>
            <div className="content">
              <Row>
                {PROFESSIONAL_PROJECTS.map((child) => {
                  return <Col key={child.key} xs={12} md={4} style={{padding: '0'}}>
                            <a href={child.site}>
                              <div className="tile text-left" style={{backgroundImage: `url(${child.path})` }}>
                                  <div className="overlay"></div>
                                  <div className="copy">
                                    <h2>{child.name}</h2>
                                    <p><a href={child.site}>{child.desc}</a></p>
                                  </div>
                               </div>
                            </a>
                          </Col>
                })}
                </Row>
            </div>
            <div className="personal-projects-btn">
              <Link to='/personal-projects'>See Personal Projects</Link>
            </div>
        </div>
      </section>
    )
  }
}




Professional.propTypes = {
  // .....
}



export default Professional
