// Libs
import React, {Component} from 'react';
import {Link} from 'react-router';
import {Col, Row, Grid} from 'react-bootstrap/lib';

// Dependencies
import './Details.scss';
import { PROFESSIONAL_PROJECTS } from '../.././Utils/constants/projects.constants.js';
import { PERSONAL_PROJECTS } from '../.././Utils/constants/projects.constants.js';



class Details extends Component {
  getProjectDetails(type, slug) {
    const array = type === 'personal' ? PERSONAL_PROJECTS : PROFESSIONAL_PROJECTS;
    const details = array.filter((child) => {
      if(child.slug === slug) {
        return child;
      }
    });
    return details[0];
  }
  render(){
    const { type } = this.props.routeParams;
    const { project } = this.props.routeParams;
    const work = this.getProjectDetails(type,project);
    const {terminal_mode} = this.props;

    return(
      <section className="project-details" key="project-details">
        <div className="content-wrapper">
            <div className="intro">
              <div className="logo" style={{backgroundImage: `url(${work.logo})`}}></div>
              <p>{work.desc}</p>
              <h2>{work.name}</h2>
            </div>
            <div className="content">
              <div className="overview">
                <a href={work.details.website}>{work.name}</a>
                <p>{work.details.overview}</p>
              </div>
              <div className="screenshot" style={{backgroundImage: `url(${work.details.img})`}}></div>
              <div className="contributions">
                <h2>Contributions <span><br/> as a {work.details.position}</span></h2>
                <Row>
                  {work.details.contributions.map((obj) => {
                    return <Col key={obj.key} xs={12} md={4}>
                                <div className={`tile text-left ${(obj.key % 2 === 1 && !terminal_mode) ? 'odd' : 'even'}`}>
                                    <div className="overlay"></div>
                                    <div className="copy">
                                      <h2>{obj.name}</h2>
                                      <i>
                                        {obj.tools.map((tool) => {
                                          return <div key={tool} className="tile-tag">
                                                    {tool}
                                                  </div>
                                        })}
                                      </i>
                                      <p>{obj.work}</p>
                                    </div>
                                 </div>
                            </Col>
                  })}
                  </Row>
              </div>
            </div>
        </div>
      </section>
    )
  }
}




Details.propTypes = {
  // .....
}



export default Details
