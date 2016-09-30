// Components
import React, {Component} from 'react';

// Require ONLY the relevant Stylesheets
require('../../../public/stylesheets/fallout.scss');
require('../../../public/stylesheets/alignments.scss');
require('../../assets/scss/error_pages.scss');

class PageNotFound extends Component {
  render() {
    return (
      <section className="fallout-wrapper">
        <div className="terminal-overlay"></div>
        <div className="terminal-scanline"></div>
        <div className="fallout-wrapper">
          <div className="text-center flexbox-aligner copy-404">
            <h1 className="flexbox-aligner-item">Server 0089 Response: <br /><span>404</span> <br /> you requested a page that does not exist. SYSADMIN has been notified.</h1>
          </div>
        </div>
      </section>
    )
  }
}


Notfound.propTypes = {
  // propTypes
}

export default Notfound
