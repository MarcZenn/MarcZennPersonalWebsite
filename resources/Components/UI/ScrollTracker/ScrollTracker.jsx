// Libs
import React, {Component} from 'react';


// Dependencies
import './ScrollTracker.scss';


var Scroll    = require('react-scroll');

var Link       = Scroll.Link;
var Element    = Scroll.Element;
var Events     = Scroll.Events;
var scroll     = Scroll.animateScroll;
var scrollSpy  = Scroll.scrollSpy;


class ScrollTracker extends Component {
  constructor(props) {
    super(props)
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
      <div className="scroll-tracker">
        <ul>
          <li>
            <Link activeClass="active" className="test1" to="test1" spy={true} smooth={true} duration={700} ></Link>
          </li>
        </ul>
      </div>
    )
  }
}




export default ScrollTracker
