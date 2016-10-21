// import React
import React, {Component} from 'react';


// Components
import {Col, Row, Grid} from 'react-bootstrap/lib';
import UpgradingUI from '.././Partials/UpgradingUI.jsx';


class Works extends Component {
  // Use ES6 constructor to add childVisible prop to Components state i.e. About Component and set to true. This sets a true state used to conditionally render any child components below specifically the UpgradingUI component.
  constructor() {
    // super simply allows us to call methods defined on any parent Components of this Component
    super();
    this.state = {
     childVisible: true,
   };
  }
  // Remove child component after 4 seconds and show parent component.
  componentDidMount(e) {
    setTimeout(function() {
      this.setState({childVisible: !this.state.childVisible});
    }.bind(this), 4000);
  }
  render() {
    return(
      <section>
        {
          // Ternary to show UpgradingUI child component for 4 seconds then show hidden parent component.
          this.state.childVisible ? <UpgradingUI /> :
          <section>
            <Row className="work-landing">
              <Col xs={12} className="personal-landing">
                <div className="text-center flexbox-aligner">
                  <h2 className="flexbox-aligner-item"><i className="fa fa-toggle-on" aria-hidden="true"></i><i className="fa fa-toggle-off" aria-hidden="true"></i>Personal Projects</h2>
                </div>
              </Col>
              <Col xs={12} className="professional-landing">
                <div className="text-center flexbox-aligner">
                  <h2 className="flexbox-aligner-item"><i className="fa fa-toggle-on" aria-hidden="true"></i><i className="fa fa-toggle-off" aria-hidden="true"></i>Professional Contributions</h2>
                </div>
              </Col>
            </Row>
          </section>
        }
      </section>
    )
  }
}


Works.propTypes = {
  // propTypes
}


export default Works
