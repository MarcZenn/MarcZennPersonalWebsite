// Import react
import React, {Component} from 'react';

// Components
import Nav from '.././Partials/Nav.jsx';
import {Col, Row, Grid} from 'react-bootstrap/lib';
import {Link} from 'react-router';
import Waypoint from 'react-waypoint';


class PersonalProjects extends Component {
  constructor(props) {
    // super simply allows us to call methods defined on any parent Components of this Component
    super(props);
    this.state = {
     entered: false
    };
  }

  componentDidMount(e) {
    setTimeout(function() {
      this.setWaypoint(true, 1);
    }.bind(this), 10);
  }

  setWaypoint(bool, int) {
    // Set waypoint state
    if (!bool) {
      this.setState({ entered: false});
    } else {
      this.setState({entered: true});
    }

    // Use updated state for UI waypoints animation.
    if(!this.state.entered) {
      document.getElementById('wp-dot-' + int).className = 'filled';
    } else {
      document.getElementById('wp-dot-' + int).className = 'empty';
    }
  }

  render(){
    return(
      <section>
        <Nav />
        <div className="personal-projects-content">
          <Row className="work-item personal-projects-header">
            <Col xs={12} className="text-left">
              <Waypoint
                onEnter={this.setWaypoint.bind(this, true, 1)}
                onLeave={this.setWaypoint.bind(this, false, 1)}
              />
              <h1>This page represents a collective body of work built during my employment as a full-time developer within an organization, startup or agency. Feel free to peruse the projects and contact me if you have any questions, concerns or skeptical inquiries.</h1>
            </Col>
            <Col xs={12}>
              <img src="/public/images/devicons.png"  />
            </Col>
          </Row>

          <Row className="work-item foodle">
            <Waypoint
              onEnter={this.setWaypoint.bind(this, true, 2)}
              onLeave={this.setWaypoint.bind(this, false, 2)}
            />
            <Col className="text-left" xs={12} md={6}>
              <h2>So It's Like Kickstarter?</h2>
              <p><Link to="#">Because eating healthy is simple.</Link></p>
            </Col>
            <Col xs={12} md={6}>
              <img src="/public/images/kf-example_image.png" />
            </Col>
          </Row>


          <div className="scroll-tracker">
            <div className="filled" id="wp-dot-1"></div>
            <div className="empty" id="wp-dot-2"></div>
          </div>
        </div>
      </section>
    )
  }
}




PersonalProjects.propTypes = {
  // .....
}



export default PersonalProjects
