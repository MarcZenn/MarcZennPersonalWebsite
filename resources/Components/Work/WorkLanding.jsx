// import React
import React, {Component} from 'react';


// Components
import Nav from '.././Partials/Nav.jsx';
import {Col, Row, Grid} from 'react-bootstrap/lib';
import Waypoint from 'react-waypoint';
import {Link} from 'react-router';


class Works extends Component {
  // Use ES6 constructor to add childVisible prop to Components state i.e. About Component and set to true. This sets a true state used to conditionally render any child components below specifically the UpgradingUI component.
  constructor(props) {
    // super simply allows us to call methods defined on any parent Components of this Component
    super(props);
    this.state = {
     entered: false
   };
  }
  // Remove child component after 4 seconds and show parent component then set entered state to true for initial waypoint UI rendering.
  componentDidMount(e) {
    setTimeout(function() {
      this.setWaypoint(true, 1);
    }.bind(this), 1500);
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

  render() {
    return(
      <section>
          <div>
            <Nav />
            <Row className="work-landing">
              <Col xs={12} className="personal-landing">
                <Waypoint
                  onEnter={this.setWaypoint.bind(this, true, 1)}
                  onLeave={this.setWaypoint.bind(this, false, 1)}
                />
                <Link to="/personal-projects">
                  <div className="text-center flexbox-aligner">
                    <h2 className="flexbox-aligner-item"><i className="fa fa-toggle-on" aria-hidden="true"></i><i className="fa fa-toggle-off" aria-hidden="true"></i>Personal</h2>
                  </div>
                </Link>
              </Col>
              <Col xs={12} className="professional-landing">
                <Link to="/professional-contributions">
                  <div className="text-center flexbox-aligner">
                    <h2 className="flexbox-aligner-item"><i className="fa fa-toggle-on" aria-hidden="true"></i><i className="fa fa-toggle-off" aria-hidden="true"></i>Professional</h2>
                  </div>
                </Link>
                <Waypoint
                  onEnter={this.setWaypoint.bind(this, true, 2)}
                  onLeave={this.setWaypoint.bind(this, false, 2)}
                />
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


Works.propTypes = {
  // propTypes
}


export default Works
