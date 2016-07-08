import React, {Component} from 'react'

// TODO: strip nav out into seperate Component
// TODO: think of a better slogan to place on home page
// TODO: plan out the rest of the site
// TODO: give credit to original designer somewhere.
// TODO: make responsive

// Stylesheets
require('../../public/styles/home.scss');


class Homepage extends Component {
  render(){
    return (
      <section className="homepage-content">
        <div className="overlay"></div>
        <div className="scanline"></div>
        <div className="wrapper">
          <nav className="site clear home-nav">
            <ul className="home-nav-list">
              <li><a href="#" title="">Projects</a></li>
              <li><a href="#" title="">Work</a></li>
              <li><a href="#" title="">About</a></li>
              <li><a href="#" title="">Contact</a></li>
            </ul>
          </nav>

          <div className="home-content clearfix">
            <header className="site clearfix home-header">
              <div className="col one">
                <img src="./public/images/text-logo.png" className="text-logo" />
              </div>
              <div className="col two">
                <h1><br /> <b>M</b>erits <b>A</b>nalysis <b>R</b>eal-Time <b>C</b>omputer (M.A.R.C.)</h1>
                <p className="home-copy">System Administrator (SYSADM) - Marc Zenn</p>
                <p>---------------------------------------------------</p>
                <p className="home-copy">Fanatic of all things tech, innovative & socially-conscience missions.</p>
                <p>Version 1.0.0 - Server 0089</p>
              </div>
            </header>

            <div className="description-content">
              <h2>Administrator Biography &amp; Official Under-Taking  (A.B.O.U.T)</h2>
              <div>
                <p className="home-copy">I'm a deep thinker and an overtly anaylitcal person that, despite certain challenges, has managed to find a calling in life and attained the means to pursue it. These days I spend my time living and working in beautiful Boulder, Colorado enjoying my post-CU, (University of Colorado boulder), days as a web engineer. As a kid I felt an incredible pressure to succeed and support my family. To lift all tides, so to speak. Since then I've realized no one succeeds by the combined efforts of themselves alone and that very few succeed without risk or the pursuit of overlooked value/opportunity.</p>
                <p className="home-copy">But true success also depends on how you define it. For me, success means the ability to gather disparate groups of people for the simple idea of social progress. There is a myriad of problems facing the world today. If I could have even a small role in solving at least one of those problems, I'd consider myself successful. </p>
              </div>
            </div>

            <div className="home-social-bar">
              <ul>
                <li><a href="https://github.com/MarcZenn">Github</a></li>
                <li><a href="https://www.linkedin.com/in/marcosmartinez2">LinkedIn</a></li>
                <li><a href="">Google+</a></li>
              </ul>
            </div>

            <div className="contact-content">
              <h3>Contact</h3>
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

          </div>
        </div>
      </section>
    )
  }
}

Homepage.propTypes = {
 // none needed for home page
}


export default Homepage
