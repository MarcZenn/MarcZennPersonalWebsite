// Import React
import React, {Component} from 'react'

// Components
import HomeNav from './HomeNav.jsx';
import {Col, Row, Grid} from 'react-bootstrap/lib';
import {Link} from 'react-router';


class Homepage extends Component {
  render(){
    return (
      <section className="homepage-content">
        <div className="terminal-overlay"></div>
        <div className="terminal-scanline"></div>
        <div className="fallout-wrapper">
          <HomeNav />
          <div className="home-content clearfix">
            <header className="site clearfix home-header">
              <div className="col one">
                <img src="/public/images/text-logo-2.png"  />
              </div>
              <div className="col two">
                <p>---------------------------------------------------</p>
                <br/>
                <p className="slogan">- Web Developer, Programmer, Tinkerer, Aspiring Entrepreneur -</p>
                <p className="home-copy"><br /> <b>M</b>erits <b>A</b>nalysis <b>R</b>eal-Time <b>C</b>omputer (M.A.R.C)</p>
                <p className="home-copy">Version 1.0.05 - Server 1989</p>
              </div>
              <div className="text-center">
                <ul className="home-cta-list">
                  <li><Link to='/personal-projects'>Personal</Link></li>
                  <li><Link to='/professional-contributions'>Professional</Link></li>
                </ul>
                <p>Please pardon the dust. Site currently under construction.</p>
              </div>
            </header>
            <Row>
                <div className="home-social-bar">
                  <ul>
                    <Col md={4} xs={12}>
                      <li><a href="https://github.com/MarcZenn">Github</a></li>
                    </Col>
                    <Col md={4} xs={12}>
                      <li><a href="https://www.linkedin.com/in/marcosmartinez2">LinkedIn</a></li>
                    </Col>
                    <Col md={4} xs={12}>
                      <li><a href="">Google+</a></li>
                    </Col>
                  </ul>
                </div>
            </Row>
          </div>

        </div>
      </section>
    )
  }
}

Homepage.propTypes = {
  //
}


export default Homepage
