// Import react
import React, {Component} from 'react';

// Components
import Nav from '.././Partials/Nav.jsx';
import Footer from '.././Partials/Footer.jsx';
import {Col, Row, Grid} from 'react-bootstrap/lib';

var Scroll    = require('react-scroll');

var Link       = Scroll.Link;
var Element    = Scroll.Element;
var Events     = Scroll.Events;
var scroll     = Scroll.animateScroll;
var scrollSpy  = Scroll.scrollSpy;

class ProfessionalContributions extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount(){
    scrollSpy.update();
  }
  componentWillUnmount(){
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }
  render(){
    return(
      <section>
        <Nav />

        <div className="professional-contributions-content">
          <Element name="test1" className="element">
            <Row className="work-item kickfurther text-center">
              <Col xs={12} md={12}>
                <h2>kickfurther Llc.</h2>
                <p><a href="http://www.kickfurther.com">Like Kickstarter? Hmm..yes and no.</a></p>
              </Col>
              <Col xs={11} md={12}>
                <a href="http://www.kickfurther.com"><img src="/public/images/kf_example_image.png" /><i className="fa fa-arrow-circle-o-right" aria-hidden="true"><p>see project</p></i></a>
              </Col>
            </Row>
          </Element>

          <Element name="test2" className="element">
            <Row className="work-item cpb text-center">
              <Col xs={12} md={12}>
                <h2>Interning at Crispin Porter + Bogusky</h2>
                <p><a href="/">You WILL sleep over at the office at least once.</a></p>
              </Col>
              <Col xs={12} md={12}>
                <a href="http://www.foodle-it.com"><img src="/public/images/iphone6plus.png" /><i className="fa fa-arrow-circle-o-right" aria-hidden="true"><p>see project</p></i></a>
              </Col>
            </Row>
          </Element>
        </div>

        <div className="scroll-tracker">
          <ul>
            <li><Link activeClass="active" className="test1" to="test1" spy={true} smooth={true} duration={700} ></Link></li>
            <li><Link activeClass="active" className="test2" to="test2" spy={true} smooth={true} duration={700}></Link></li>
            {/* <li><Link activeClass="active" className="test3" to="test3" spy={true} smooth={true} duration={500}></Link></li> */}
          </ul>
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
