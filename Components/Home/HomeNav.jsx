import React, {Component} from 'react';


class HomeNav extends Component {
  render(){
    return(
      <nav className="site clear home-nav">
        <ul className="home-nav-list">
          <li><a href="#" title="">Companies</a></li>
          <li><a href="#" title="">Works</a></li>
          <li><a href="#" title="">About</a></li>
          <li><a href="#" title="">Contact</a></li>
        </ul>
      </nav>
    )
  }
}

HomeNav.propTypes = {
 // propTypes
}


export default HomeNav
