//import react
import React, {Component} from 'react';

// Components
import Nav from '.././Partials/Nav.jsx';
import {Col, Row, Grid} from 'react-bootstrap/lib';
import Waypoint from 'react-waypoint';
import {Link} from 'react-router';


class ProfessionalContributions extends Component {
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
    console.log(int);
    // Set waypoint state
    if (!bool) {
      this.setState({ entered: false});
    } else {
      this.setState({entered: true});
    }

    // Use updated state for UI waypoints animation.
    if(!this.state.entered) {
      document.getElementById('wp-dot-' + int).className = 'empty';
    } else {
      document.getElementById('wp-dot-' + int).className = 'filled';
    }
  }

  render(){
    return(
      <section>
        <Nav />
        <div className="professional-contributions-content">
          <Row className="work-item professional-contributions-header">
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

          <Row className="work-item kickfurther">
            <Col className="text-left" xs={12} md={6}>
              <Waypoint
                debug={true}
                onEnter={this.setWaypoint.bind(this, true, 2)}
                onLeave={this.setWaypoint.bind(this, false, 2)}
              />
              <h2>A Thing Called Kickfurther</h2>
              <p>The Micro-Retail Revolution.</p>
            </Col>
            <Col xs={12} md={6}>
              <img src="/public/images/kf-example_image.png" />
            </Col>
          </Row>


          <Row className="work-item cpb">
            <Col className="text-left" xs={12} md={6}>
              <Waypoint
                debug={true}
                onEnter={this.setWaypoint.bind(this, true, 3)}
                onLeave={this.setWaypoint.bind(this, false, 3)}
              />
              <h2>Reality Check from Crispin Porter + Bogusky</h2>
              <p>My First Real Boy Development Position.</p>
            </Col>
            <Col xs={12} md={6}>
              <img src="/public/images/kf-example_image.png" />
            </Col>
          </Row>




          <div className="scroll-tracker">
            <div className="filled" id="wp-dot-1"></div>
            <div className="empty" id="wp-dot-2"></div>
            <div className="empty" id="wp-dot-3"></div>
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
