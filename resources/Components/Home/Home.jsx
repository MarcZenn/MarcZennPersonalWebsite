// Libs
import React, {Component} from 'react';
import {Link} from 'react-router';

// Dependencies
import './Home.scss';
import SocialBar from '.././Partials/SocialBar/SocialBar.jsx';
import UniverseBackground from '.././UI/UniverseBackground/UniverseBackground.jsx';



class Home extends Component {
  render(){
    const { terminal_mode } = this.props;

    return (
      <section className="home-content" key="home">
          <div className="content-wrapper">

            <div className="content clearfix">
              {!terminal_mode && <UniverseBackground/>}

              <header className="clearfix">
                <div className="col one">
                  {terminal_mode && <img src="/public/images/8bitme.jpg"/>}
                </div>

                <div className="col two">
                  {!terminal_mode && <h1>Marc Zenn</h1>}
                  {!terminal_mode && <p>---------------------------------------------------</p>}
                  <br/>
                  <p className="slogan">Web Developer, Programmer, Tinkerer, Aspiring Entrepreneur</p>
                  {terminal_mode && <p className="home-copy"><br /> <b>M</b>erits <b>A</b>nalysis <b>R</b>eal-Time <b>C</b>omputer (M.A.R.C)</p>}
                  {terminal_mode && <p className="home-copy">Version 1.0.05 - Server 1989</p>}
                </div>
                <div className="text-center">
                  <ul className="home-cta-list">
                    <li><Link to='/personal-projects'>Personal</Link></li>
                    <li><Link to='/professional-contributions'>Professional</Link></li>
                  </ul>
                </div>
              </header>
            </div>
            <SocialBar/>
          </div>
      </section>
    )
  }
}

Home.propTypes = {
  //
}


export default Home
