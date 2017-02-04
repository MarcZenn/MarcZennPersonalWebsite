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


class PersonalProjects extends Component {
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
        <Nav />
        <div className="personal-projects-content">
          <Element name="test1" className="element">
            <Row className="work-item foodle text-center">
              <Col xs={12} md={12}>
                <h2>Foodle It!</h2>
                <p><a href="http://www.foodle-it.com">Because eating healthy isn't rocket science.</a></p>
              </Col>
              <Col xs={12} md={12}>
                <a className={this.state.hideImg ? 'hidden' : ''} href="http://www.foodle-it.com"><img src="/public/images/foodle.png" /><i className="fa fa-arrow-circle-o-right" aria-hidden="true"><p>see project</p></i></a>
              </Col>
            </Row>
          </Element>

          <div className="scroll-tracker">
            <ul>
              <li><Link activeClass="active" className="test1" to="test1" spy={true} smooth={true} duration={700} ></Link></li>
              {/* <li><Link activeClass="active" className="test2" to="test2" spy={true} smooth={true} duration={700}></Link></li> */}
            </ul>
          </div>
        </div>
        <Footer />
      </section>
    )
  }
}




PersonalProjects.propTypes = {
  // .....
}



export default PersonalProjects
