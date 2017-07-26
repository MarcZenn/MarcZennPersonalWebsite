// Libs
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Dependencies
require('./portfolio.container.scss');
import { turnOffTerminalMode, turnOnTerminalMode } from '../../.././app/redux/actions/ui.actions.js';
import Header from '../.././Components/Partials/Header/Header.jsx';
import Footer from '../.././Components/Partials/Footer/Footer.jsx';


class Portfolio extends Component {
  componentDidMount() {
    !this.props.terminal_mode && window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  handleScroll() {
    const elem = document.getElementById('main-nav');
    let top = window.pageYOffset;
    if(top >= 90) {
      elem.classList.add('solid');
    } else {
      elem.classList.remove('solid');
    }
  }
  render(){
    const { children, terminal_mode, turnOffTerminalMode, turnOnTerminalMode } = this.props;
    let currentPath = this.props.location.pathname;

    return (
      <section className={`${terminal_mode && 'terminal-mode'}`} key="portfolio">
        {terminal_mode && <div className="terminal-overlay"></div>}
        {terminal_mode && <div className="terminal-scanline"></div>}

        <Header terminal_mode={terminal_mode} turnOffTerminalMode={turnOffTerminalMode} turnOnTerminalMode={turnOnTerminalMode}/>

        {/* render children with global props - NOTE: OR consider switch case here child.key */}
        {[children].map((child) => {
          return React.cloneElement(child, {
            key: child,
            terminal_mode: terminal_mode
          });
        })}

        <Footer currentPath={currentPath} />

      </section>
    )
  }
}


/*
 * mapStateToProps is a helper function. It leverages React-Redux to connect our Redux global state
 * to our React views.
 *
 * More Specifically, the purpose of this function is to take our redux application state keys and
 * make them available to any smart components in need of it. Whatever key is returned from this
 * function will be available to us as a component prop.
 *
*/
const mapStateToProps = (state) => ({
  terminal_mode: state.ui.terminal_mode,
})


/* mapDispatchToProps does exactly what it sounds like. It maps our redux actions to our props.
 *
 */
function mapDispatchToProps(dispatch) {
  return {
    turnOnTerminalMode: bindActionCreators(turnOnTerminalMode, dispatch),
    turnOffTerminalMode: bindActionCreators(turnOffTerminalMode, dispatch)
  }
}


/* Here we are using a React-Redux connect function to bridge redux and react together.
 *
 * Specifically the connect function takes a function, a component and produces a container.
 * a component aware of the state contained by redux. - It also needs to know about any dispatch
 * methods, actions and make them available as props if needed.
*/
export default connect(mapStateToProps,  mapDispatchToProps)(Portfolio);
