// import React
import React, {Component} from 'react';


// Components
import {Col, Row, Grid} from 'react-bootstrap/lib';
import UpgradingUI from '.././Partials/UpgradingUI.jsx';

// Require ONLY the relevant Stylesheets
require('../../../public/stylesheets/fallout.scss');
require('../../../public/stylesheets/alignments.scss');
require('../../../public/stylesheets/fonts.scss');
require('../../assets/scss/partials.scss');



class PrivacyPolicy extends Component {
  // Use ES6 constructor to add childVisible prop to Components state i.e. About Component and set to true. This sets a true state used to conditionally render any child components below specifically the UpgradingUI component.
  constructor() {
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
          <div className="text-center flexbox-aligner privacy-policy-copy">
            <h1>Privacy Policy</h1>
            <p>start</p>
          </div>
        }
      </section>
    )
  }
}


PrivacyPolicy.propTypes = {
  // propTypes
}


export default PrivacyPolicy
