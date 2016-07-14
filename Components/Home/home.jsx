import React, {Component} from 'react'

// TODO: strip nav out into seperate Component
// TODO: plan out the rest of the site
// TODO: give credit to original designer somewhere.
// TODO: make mobile responsive
// TODO: 'upgrading UI' spinner before client display work page
// TODO: incorporate google analytics to track site hits.

// Components
import HomeNav from './HomeNav.jsx';
import HomeFooter from './HomeFooter.jsx';

// Stylesheets
require('../../public/styles/home.scss');


class Homepage extends Component {
  render(){
    return (
      <section className="homepage-content">
        <div className="overlay"></div>
        <div className="scanline"></div>
        <div className="wrapper">

          <HomeNav />

          <div className="home-content clearfix">
            <header className="site clearfix home-header">
              <div className="col one">
                <img src="./public/images/text-logo.png" className="text-logo" />
              </div>
              <div className="col two">
                <h1><br /> <b>M</b>erits <b>A</b>nalysis <b>R</b>eal-Time <b>C</b>omputer (M.A.R.C)</h1>
                <p>---------------------------------------------------</p>
                <p className="slogan">Fanatic of all things tech, innovative & socially-conscience missions.</p>
                <p className="home-copy">System Administrator (SYSADM) - Marc Zenn</p>
                <p className="home-copy">Version 1.0.0 - Server 0089</p>
              </div>
            </header>

            <div className="description-content">
              <h2>Administrator Biography &amp; Official Under-Taking  (A.B.O.U.T)</h2>
              <div>
                <p className="home-copy">I'm a deep thinker and an overtly anaylitcal person that, despite a number of circumstantial challenges, has managed to find a calling in life and is working hard to pursue it. These days I spend my time living and working in beautiful Boulder, Colorado enjoying my University of Colorado days as a web engineer and startup enthusiast.</p>
                <p className="home-copy">As a kid I felt an incredible pressure to succeed and support my family while at the same time embarking on work that would one day have an impact. Since then I've realized no one succeeds by the combined efforts of themselves alone and that very few succeed without risk or the pursuit of overlooked value/opportunity.</p>
                <p className="home-copy">But true success also depends on how you define it. For me, success is the ability to gather groups of people under the simple idea that when united, social progress is attainable. There is a myriad of problems facing the world today. If I could have even a small role in solving at least one of those problems or in altering the course of mankind, I'd consider myself successful.</p>
              </div>
            </div>


            <div className="contact-content">
              <h2>Contact</h2>
              <p>Fill out the fields below and press the SUBMIT button. The system administrator (SYSADM) will respond to your query after an appropriate amount of quiet contemplation. Thank you for contacting the System Administrator's Office.</p><br />
              <form className="home-contact-form">
                <p>Welcome to the System Administrator Integrated Message System (SAIMS).</p>
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
