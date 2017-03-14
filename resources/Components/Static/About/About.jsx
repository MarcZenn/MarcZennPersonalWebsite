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
          <p className="about-copy">When you start at the bottom of a well you have to climb the usual ladders several rungs at a time. Nothing comes easy, there's no such thing as a safe outcome, plans always go awry and if you're not careful, you can easily become the victim of others' expectations. A victim of "you can't do that" or "I doubt you'll get there with your background" or "it's just too expensive". These perspectives are nothing but obstacles. Obstacles that give way to challenges, and challenges are meant to be overcome.</p>
          <p className="about-copy">It's my firm belief that no one succeeds by the combined efforts of themselves alone and that very few succeed without risk or the pursuit of overlooked value/opportunity. That success depends on how you define it as much as how you attain it and that success alone is not enough if it only benefits you, maybe even a select few.</p>
          <h1>Work</h1>
          <p className="about-copy">
            Currently I'm experienced in object-oriented programming, agile, testing, debugging, refactoring & evaluating the full-stack. Hoping to dive into Ethereum Decentralization Platform, Augmented/Virtual Reality, Machine-Learning, Social E-commerce, AI, Statically Typed Languages. For the time being I work for a successful startup as a Junior Developer and 9th team hire.
          </p>
          <h1>Life</h1>
          <p className="about-copy">These days I spend my time living and working in beautiful Boulder, Colorado enjoying my days as a web engineer and startup enthusiast. The rest of the time I'm pursuing something I personally feel passionate about. I think the one thing I'd say my soul couldn't live without would be music...if only I had any musical talent whatsoever. Regardless, I'm good have to settle for the occasional hike or road trip and a good beer or two once in a while.</p>
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
