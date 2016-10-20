// import React
import React, {Component} from 'react';

// Components
import {Col, Row, Grid} from 'react-bootstrap/lib';

class UpgradingUI extends Component {
  render() {
    return (
      <section className="fallout-wrapper">
        <div className="terminal-overlay"></div>
        <div className="terminal-scanline"></div>
        <div className="text-center flexbox-aligner upgradingUI-copy">
          <Row>
            <Col xs={12}>
              <h1 className="flexbox-aligner-item">Upgrading UI...</h1>
            </Col>
            <Col xs={12}>
              <div className="spinner">
                <div className="rect1"></div>
                <div className="rect2"></div>
                <div className="rect3"></div>
                <div className="rect4"></div>
                <div className="rect5"></div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    )
  }
}


UpgradingUI.propTypes = {
  // propTypes
}

export default UpgradingUI
