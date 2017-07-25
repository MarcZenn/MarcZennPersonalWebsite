// Libs
import React, {Component} from 'react';
import {Link} from 'react-router';
import {Col, Row, Grid} from 'react-bootstrap/lib';


// Dependencies
import './Work.scss';



class Works extends Component {
  render() {
    const { terminal_mode } = this.props;

    return(
      <section className="work-content" key="work">
          <div className="content-wrapper">

            <div className="content">
              <Row>
                <Col xs={12}>
                  <div className="text-left overview">
                    <h2>Hi. In case you were wondering, I have experience with...</h2>
                    <ul>
                      <li><i className="devicon-react-original-wordmark colored"></i></li>
                      <li><i className="devicon-laravel-plain colored"></i></li>
                      <li><i className="devicon-angularjs-plain colored"></i></li>
                      <li><i className="devicon-vuejs-plain-wordmark colored"></i></li>
                      <li><i className="devicon-jquery-plain-wordmark colored"></i></li>
                      <li><i className="devicon-javascript-plain colored"></i></li>
                      <li><i className="devicon-php-plain colored"></i></li>
                      <li><i className="devicon-go-plain colored"></i></li>
                      <li><i className="devicon-nodejs-plain colored"></i></li>
                      <li><i className="devicon-webpack-plain colored"></i></li>
                      <li><i className="devicon-babel-plain colored"></i></li>
                      <li><i className="devicon-amazonwebservices-original colored"></i></li>
                      <li><i className="devicon-gulp-plain colored"></i></li>
                      <li><i className="devicon-mongodb-plain-wordmark colored"></i></li>
                      <li><i className="devicon-mysql-plain-wordmark colored"></i></li>
                      <li><i className="devicon-github-plain colored"></i></li>
                      <li><i className="devicon-bitbucket-plain-wordmark colored"></i></li>
                      <li><i className="devicon-gitlab-plain colored"></i></li>
                      <li><i className="devicon-heroku-original colored"></i></li>
                      <li><i className="devicon-backbonejs-plain-wordmark colored"></i></li>
                      <li><i className="devicon-bootstrap-plain colored"></i></li>
                      <li><i className="devicon-sass-original colored"></i></li>
                      <li><i className="devicon-less-plain-wordmark colored"></i></li>
                      <li><i className="devicon-atom-original colored"></i></li>
                      <li><p>plus...</p></li>
                    </ul>
                    <div className="arrow-down">
                      <p>view work</p>
                      <i className="arrow"></i>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={6} className="personal-landing">
                  <Link to="/personal-projects">
                    <div className="text-center flexbox-aligner">
                      <h2 className="flexbox-aligner-item">Personal
                        <i className="fa fa-toggle-on" aria-hidden="true"></i>
                        <i className="fa fa-toggle-off" aria-hidden="true"></i>
                      </h2>
                    </div>
                  </Link>
                </Col>
                <Col xs={12} md={6} className="professional-landing">
                  <Link to="/professional-contributions">
                    <div className="text-center flexbox-aligner">
                      <h2 className="flexbox-aligner-item">Professional<i className="fa fa-toggle-on" aria-hidden="true"></i><i className="fa fa-toggle-off" aria-hidden="true"></i></h2>
                    </div>
                  </Link>
                </Col>
              </Row>
            </div>

          </div>
      </section>
    )
  }
}


Works.propTypes = {
  // propTypes
}


export default Works
