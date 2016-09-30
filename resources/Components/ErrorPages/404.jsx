// Components
import React, {Component} from 'react';

// Require ONLY the relevant Stylesheets
require('../../assets/scss/terminal_effect.scss');

class Notfound extends Component {
  render() {
    return (
      <section className="fallout-wrapper">
        <div className="terminal-overlay"></div>
        <div className="terminal-scanline"></div>
        <div className="fallout-wrapper">
          <div className="text-center flexbox-aligner">
            <h1>Page does not exist</h1>
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
