// Import react
import React, {Component} from 'react';

// Components
import Nav from '.././Partials/Nav.jsx';
import Footer from '.././Partials/Footer.jsx';
import {Col, Row, Grid} from 'react-bootstrap/lib';
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
    this.setWaypoint(false, 2);
    this.setWaypoint(true, 1);
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
      document.getElementById('wp-dot-' + int).className = 'empty';
    } else {
      document.getElementById('wp-dot-' + int).className = 'filled';
    }
  }

  render(){
    return(
      <section>
        <Nav />
        <div className="personal-projects-content">
          <Waypoint
            onEnter={this.setWaypoint.bind(this, true, 1)}
            onLeave={this.setWaypoint.bind(this, false, 1)}
          />
          <Row className="work-item personal-projects-header">
            <Col xs={12} className="text-left">
              <h1>Here you will find personal passion type projects. Projects I felt compelled to build for one reason or another...I simply had to build them. Feel free to peruse the projects and contact me if you have any questions, concerns or harsh remarks.</h1>
            </Col>
            <Col xs={12}>
              <img src="/public/images/devicons.png"  />
            </Col>
          </Row>

          <Row className="work-item foodle">
            <Col className="text-left" xs={12} md={6}>
              <h2>Just Foodle It!</h2>
              <p><a href="http://www.foodle-it.com">Because eating healthy isn't rocket science.</a></p>
            </Col>
            <Col xs={12} md={6}>
              <i className="fa fa-arrow-circle-o-right" aria-hidden="true"><p>see project</p></i>
              <a href="http://www.foodle-it.com"><img src="/public/images/foodle.png" /></a>
            </Col>
          </Row>
          <Waypoint
            onEnter={this.setWaypoint.bind(this, true, 2)}
            onLeave={this.setWaypoint.bind(this, false, 2)}
          />


          <div className="scroll-tracker">
            <a href=""><div className="empty" id="wp-dot-1"></div></a>
            <div className="filled" id="wp-dot-2"></div>
          </div>
        </div>
        <Footer />
      </section>
    )
  }
}




PersonalProjects.propTypes = {
  // .....
}



export default PersonalProjects
