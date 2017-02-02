// Import react
import React, {Component} from 'react';

// Components
import Nav from '.././Partials/Nav.jsx';
import Footer from '.././Partials/Footer.jsx';
import {Col, Row, Grid} from 'react-bootstrap/lib';
var Scroll    = require('react-scroll');

var Link       = Scroll.Link;
var DirectLink = Scroll.DirectLink;
var Element    = Scroll.Element;
var Events     = Scroll.Events;
var scroll     = Scroll.animateScroll;
var scrollSpy  = Scroll.scrollSpy;


class ProfessionalContributions extends Component {
  constructor(props) {
    // super simply allows us to call methods defined on any parent Components of this Component
    super(props);
  }
  componentDidMount(){
    Events.scrollEvent.register('begin', function() {
      console.log("begin", arguments);
    });
    Events.scrollEvent.register('end', function() {
      console.log("end", arguments);
    });
    scrollSpy.update();
  }
  componentWillUnmount(){
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }
  handleSetActive(to) {
    console.log(to);
  }
  render(){
    return(
      <section>
        <Nav />
        <div className="scroll-tracker">
          <Link activeClass="active" className="test1" to="test1" spy={true} smooth={true} duration={500} >ass</Link>

          {/* <div className="" id="wp-dot-2"></div> */}
          <Link activeClass="active" className="test2" to="test2" spy={true} smooth={true} duration={500}>ass</Link>

          {/* <div className="" id="wp-dot-3"></div> */}
          <Link activeClass="active" className="test3" to="test3" spy={true} smooth={true} duration={500} >ass</Link>
        </div>
        <div className="professional-contributions-content">

          <Element name="test1" className="element" >
            <Row className="work-item professional-contributions-header">
              <Col xs={11} className="text-left">
                <h1>This page represents a collective body of work built during my employment as a full-time developer within an organization, startup or agency. Feel free to peruse the projects and contact me if you have any questions, concerns or skeptical inquiries.</h1>
              </Col>
              <Col xs={11}>
                <img src="/public/images/devicons.png"  />
              </Col>
            </Row>
          </Element>

          <Element name="test2" className="element">
            <Row className="work-item kickfurther">
              <Col className="text-left" xs={12} md={6}>
                <h2>So It's Like Kickstarter?</h2>
                <p><a href="http://www.kickfurther.com">Hmm, yes and no...</a></p>
              </Col>
              <Col xs={11} md={6}>
                <i className="fa fa-arrow-circle-o-right" aria-hidden="true"><p>see project</p></i>
                <a href="http://www.kickfurther.com"><img src="/public/images/kf-example_image.png" /></a>
              </Col>
            </Row>
          </Element>

          <Element name="test3" className="element">
            <Row className="work-item cpb">
              <Col className="text-left" xs={12} md={6}>
                <h2>Interning at Crispin Porter + Bogusky</h2>
                <p><a href="/">You WILL sleep over at the office at least once.</a></p>
              </Col>
              <Col xs={11} md={6}>
                <i className="fa fa-arrow-circle-o-right" aria-hidden="true"><p>see project</p></i>
                <a href="http://www.foodle-it.com"><img src="/public/images/iphone6plus.png" /></a>
              </Col>
            </Row>
          </Element>



        </div>
        <Footer />
      </section>
    )
  }
}




ProfessionalContributions.propTypes = {
  // .....
}



export default ProfessionalContributions
