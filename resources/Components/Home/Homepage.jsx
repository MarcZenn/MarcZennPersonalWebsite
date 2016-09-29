// Components
import React, {Component} from 'react'
import HomeNav from './HomeNav.jsx';
import HomeFooter from './HomeFooter.jsx';
import {Col, Row, Grid} from 'react-bootstrap/lib';

// Require ONLY the relevant Stylesheets
require('../../assets/scss/home.scss');
require('../../assets/scss/terminal_effect.scss');

// React Render
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
                <img src="/Public/Images/text-logo.png"  />
              </div>
              <div className="col two">
                <h1><br /> <b>M</b>erits <b>A</b>nalysis <b>R</b>eal-Time <b>C</b>omputer (M.A.R.C)</h1>
                <p>---------------------------------------------------</p>
                <p className="slogan">- Web Engineer, Tinkerer, Aspiring Social-Entrepreneur -</p>
                <p className="home-copy">System Administrator (SYSADM) - Marc Zenn</p>
                <p className="home-copy">Version 1.0.0 - Server 0089</p>
              </div>
            </header>

            <div className="description-content">
              <h2>Administrator Biography &amp; Official Under-Taking  (A.B.O.U.T)</h2>
              <div>
                <p className="home-copy">When you start life at the bottom of a well you have to climb the usual ladders several rungs at a time. Nothing comes easy, there's no such thing as the expected outcome, plans always go awry and if you're not careful you can easily become a victim of others' expectations. A victim of "you can't do that" or "I doubt you'll get there". But these perspectives are false obstacles. Ironically if I hadn't encountered such circumstances in my youth I don't think I'd be where I am today. False obstacles can give way challenges, and challenges are meant to be overcome!</p>
                <p className="home-copy">These days I spend my time living and working in beautiful Boulder, Colorado enjoying most of my days as a web engineer and startup enthusiast. The rest of the time I'm pursuing the improbable or the impossible. When I was younger I felt this incredible pressure to not just succeed but to succeed in such a way that there would be little limit to how many suffering people I could help in some regard. Since then I've realized no one succeeds by the combined efforts of themselves alone and that very few succeed without risk or the pursuit of overlooked value/opportunity. That success depends on how you define it as much as how you attain it.</p>
              </div>
            </div>

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


            <div className="contact-content">
              <h2>Contact</h2>
              <form className="home-contact-form">
                <p>Fill out the fields below and press the SUBMIT button. The system administrator (SYSADM) will respond to your query after an appropriate amount of quiet contemplation. Thank you for contacting the System Administrator's Office.</p>
                <label>Name >></label><input type="text" /><br />
                <label>Email >></label><input type="text" /><br />
                <label>Subject >></label><input type="text" /><br />
                <label>Message >></label><textarea id="text" rows="1"></textarea><br /><br /><br />
                <input type="submit" value="Submit" />
                <input type="submit" value="Cancel" />
              </form>
            </div>

            <HomeFooter />

          </div>
        </div>
      </section>
    )
  }
}

Homepage.propTypes = {
 // propTypes
}


export default Homepage
