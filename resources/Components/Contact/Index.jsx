// import React
import React, {Component} from 'react';


// Components
import {Col, Row, Grid} from 'react-bootstrap/lib';
import UpgradingUI from '.././Partials/UpgradingUI.jsx';


class Contact extends Component {
  // Use ES6 constructor to add childVisible prop to Components state i.e. Contact Component and set to true. This sets a true state used to conditionally render any child components below specifically the UpgradingUI component.
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
          <div className="text-center flexbox-aligner under-construction-copy">
            <Row>
              <Col xs={12}>
                <p className="flexbox-aligner-item up-down-padder">Server 0089 Response:</p>
              </Col>
              <Col xs={12}>
                <h1>Page Currently Under Construction</h1>
              </Col>
            </Row>
          </div>
        }
      </section>
    )
  }
}


Contact.propTypes = {
  // propTypes
}


export default Contact
