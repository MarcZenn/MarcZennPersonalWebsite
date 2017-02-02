// import React
import React, {Component} from 'react';


// Components
import Nav from '.././Partials/Nav.jsx';
import {Col, Row, Grid} from 'react-bootstrap/lib';
import {Link} from 'react-router';


class Works extends Component {
  // Use ES6 constructor to add childVisible prop to Components state i.e. About Component and set to true. This sets a true state used to conditionally render any child components below specifically the UpgradingUI component.
  constructor(props) {
    // super simply allows us to call methods defined on any parent Components of this Component
    super(props);
  }

  render() {
    return(
      <section>
          <div>
            <Nav />
            <Row className="work-landing">
              <Col xs={6} className="personal-landing">
                <Link to="/personal-projects">
                  <div className="text-center flexbox-aligner">
                    <h2 className="flexbox-aligner-item"><i className="fa fa-toggle-on" aria-hidden="true"></i><i className="fa fa-toggle-off" aria-hidden="true"></i>Personal</h2>
                  </div>
                </Link>
              </Col>
              <Col xs={6} className="professional-landing">
                <Link to="/professional-contributions">
                  <div className="text-center flexbox-aligner">
                    <h2 className="flexbox-aligner-item"><i className="fa fa-toggle-on" aria-hidden="true"></i><i className="fa fa-toggle-off" aria-hidden="true"></i>Professional</h2>
                  </div>
                </Link>
              </Col>
            </Row>
          </div>
      </section>
    )
  }
}


Works.propTypes = {
  // propTypes
}


export default Works
