// import React
import React, {Component} from 'react';


// Components
import {Col, Row, Grid} from 'react-bootstrap/lib';

// Require ONLY the relevant Stylesheets
require('../../../public/stylesheets/fallout.scss');
require('../../../public/stylesheets/alignments.scss');


class WorkIndex extends Component {
  render() {
    return(
      <section className="fallout-wrapper">
        <div className="terminal-overlay"></div>
        <div className="terminal-scanline"></div>
        <div className="fallout-wrapper">
          <div className="text-center flexbox-aligner">
            <h1 className="flexbox-aligner-item">Server 0089 Response: <br /> page currently under construction.</h1>
          </div>
        </div>
      </section>
    )
  }
}


WorkIndex.propTypes = {
  // propTypes
}


export default WorkIndex