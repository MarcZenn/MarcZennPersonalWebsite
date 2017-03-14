// import React with sugar on top
import React, {Component} from 'react';


// Components
import {Col, Row, Grid} from 'react-bootstrap/lib';
import Navigation from '../.././Partials/Nav.jsx';
import Footer from '../.././Partials/Footer.jsx';


class About extends Component {
  render() {
    return(
      <section>
        <Navigation />
        <div className="about-content">
          <p className="about-copy">When you start at the bottom of a well you have to rise up several leaps at a time. Nothing comes easy, there's no such thing as a safe outcome, plans often go wrong and if you're not careful, you can easily become the victim of others' expectations. Expectations such as, "you can't do that" or "I doubt you'll get there with your background" or "it's too expensive". In reality these things are nothing but obstacles. Obstacles that give way to challenges, and challenges are meant to be overcome. </p>
          <p className="about-copy">The pursuit of overcoming problems and challenges is what I live for. But no one succeeds by the combined efforts of themselves alone. My success depends on how I define it as much as how I attain it and it's not enough if it only benefits me.</p>
          <h1>Work</h1>
          <p className="about-copy">
            Currently I'm experienced in object-oriented programming, agile, testing, debugging, refactoring & evaluating the full-stack. I work for a successful startup as an intermediate web engineer and 9th team hire.
          </p><br/>
          <p>For a list of known technlogies you can check out my <a href="http://www.resume.com/share/p4uzoufBAJ5ibsBf6">resume page.</a></p>
          <h1>Life</h1>
          <p className="about-copy">I live and work in beautiful Boulder, Colorado enjoying my days as a tinkerer and startup enthusiast. The rest of the time I'm pursuing something I personally feel passionate about. If I had any musical talent whatsoever there would be a good chance I'd have a couple of hits out by now.. Regardless, I'm good with the occasional hike, road trip and a beer or two now and then.</p>
        </div>
        <Footer />
      </section>
    )
  }
}


About.propTypes = {
  // childVisible: React.PropTypes.bool.isRequired
}


export default About
