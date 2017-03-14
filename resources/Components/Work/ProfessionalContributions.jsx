// Import react
import React, {Component} from 'react';

// Components
import Navigation from '.././Partials/Nav.jsx';
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
    this.state = {
      hideImg: true // avoid image slowload
    }
  }
  componentWillMount(){
    scrollSpy.update();
  }
  componentWillUnmount(){
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }
  componentDidMount(){
    setTimeout(function() {
      this.setState({hideImg: false});
    }.bind(this), 1200);
  }
  render(){
    return(
      <section>
        <Navigation />

        <div className="professional-contributions-content">
          <Element name="test1" className="element">
            <Row className="work-item weave text-center">
              <Col xs={12} md={6}>
                <h2>Weave IQ</h2>
                <p><a href="/">Local and Proud.</a><i className="fa fa-long-arrow-right" aria-hidden="true"></i></p>
              </Col>
              <Col xs={12} md={6}>
                <a className={this.state.hideImg ? 'hidden' : ''} href="http://www.weaveiq.com"><img src="/public/images/weavescreen.png" /></a>
              </Col>
            </Row>
          </Element>

          <Element name="test2" className="element">
            <Row className="work-item kickfurther text-left">
              <Col xs={12} md={6}>
                <a className={this.state.hideImg ? 'hidden' : ''} ref="projectImage" href="http://www.kickfurther.com"><img src="/public/images/kfwork.png" /></a>
              </Col>
              <Col xs={12} md={6}>
                <h2>kickfurther Llc.</h2>
                <p><a href="http://www.kickfurther.com">Like Kickstarter? Yes and No.. </a><i className="fa fa-long-arrow-right" aria-hidden="true"></i></p>
              </Col>
            </Row>
          </Element>

          <Element name="test3" className="element">
            <Row className="work-item cpb text-center">
              <Col xs={12} md={6}>
                <h2>Interning at Crispin Porter + Bogusky</h2>
                <p><a href="/">You WILL sleep over at the office at least once.</a><i className="fa fa-long-arrow-right" aria-hidden="true"></i></p>
              </Col>
              <Col xs={12} md={6}>
                <a className={this.state.hideImg ? 'hidden' : ''} href="http://www.cpb.com"><img src="/public/images/iphone6plus.png" /></a>
              </Col>
            </Row>
          </Element>
        </div>

        <div className="scroll-tracker">
          <ul>
            <li><Link activeClass="active" className="test1" to="test1" spy={true} smooth={true} duration={700} ></Link></li>
            <li><Link activeClass="active" className="test2" to="test2" spy={true} smooth={true} duration={700}></Link></li>
            <li><Link activeClass="active" className="test3" to="test3" spy={true} smooth={true} duration={500}></Link></li>
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
