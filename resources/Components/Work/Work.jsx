// Libs
import React, {Component} from 'react';
import {Link} from 'react-router';
import {Col, Row, Grid} from 'react-bootstrap/lib';


// Dependencies
import './Work.scss';



class Work extends Component {
  render() {
    const { terminal_mode } = this.props;

    return(
      <section className="work-content" key="work">
          <div className="content-wrapper">

            <div className="content">
              <Row>
                <Col xs={12}>
                  <div className="text-left overview">
                    <h2>Hi. Here are a few of the tools & technologies I've worked with: </h2>
                    <ul>
                      <li>
                        <a href="https://facebook.github.io/react/"><i className="devicon-react-original-wordmark colored"></i></a>
                      </li>
                      <li>
                        <a href="https://laravel.com/"><i className="devicon-laravel-plain colored"></i></a>
                      </li>
                      <li>
                        <a href="https://angularjs.org/"><i className="devicon-angularjs-plain colored"></i></a>
                      </li>
                      <li>
                        <a href="https://vuejs.org/"><i className="devicon-vuejs-plain-wordmark colored"></i></a>
                      </li>
                      <li>
                        <a href="https://jquery.com/"><i className="devicon-jquery-plain-wordmark colored"></i></a>
                      </li>
                      <li>
                        <a href="https://js.org/"><i className="devicon-javascript-plain colored"></i></a>
                      </li>
                      <li>
                        <a href="http://php.net/"><i className="devicon-php-plain colored"></i></a>
                      </li>
                      <li>
                        <a href="https://golang.org/"><i className="devicon-go-plain colored"></i></a>
                      </li>
                      <li>
                        <a href="https://nodejs.org/en/"><i className="devicon-nodejs-plain colored"></i></a>
                      </li>
                      <li>
                        <a href="https://webpack.github.io/"><i className="devicon-webpack-plain colored"></i></a>
                      </li>
                      <li>
                        <a href="https://babeljs.io/"><i className="devicon-babel-plain colored"></i></a>
                      </li>
                      <li>
                        <a href="https://aws.amazon.com/"><i className="devicon-amazonwebservices-original colored"></i></a>
                      </li>
                      <li>
                        <a href="https://gulpjs.com/"><i className="devicon-gulp-plain colored"></i></a>
                      </li>
                      <li>
                        <a href="https://www.mongodb.com/"><i className="devicon-mongodb-plain-wordmark colored"></i></a>
                      </li>
                      <li>
                        <a href="https://www.mysql.com/"><i className="devicon-mysql-plain-wordmark colored"></i></a>
                      </li>
                      <li>
                        <a href="https://www.github.com/"><i className="devicon-github-plain colored"></i></a>
                      </li>
                      <li>
                        <a href="https://bitbucket.org/"><i className="devicon-bitbucket-plain-wordmark colored"></i></a>
                      </li>
                      <li>
                        <a href="https://about.gitlab.com/"><i className="devicon-gitlab-plain colored"></i></a>
                      </li>
                      <li>
                        <a href="https://www.heroku.com/"><i className="devicon-heroku-original colored"></i></a>
                      </li>
                      <li>
                        <a href="http://getbootstrap.com/"><i className="devicon-bootstrap-plain colored"></i></a>
                      </li>
                      <li>
                        <a href="http://sass-lang.com/"><i className="devicon-sass-original colored"></i></a>
                      </li>
                      <li>
                        <a href="http://lesscss.org/"><i className="devicon-less-plain-wordmark colored"></i></a>
                      </li>
                      <li>
                        <a href="https://atom.io/"><i className="devicon-atom-original colored"></i></a>
                      </li>
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


Work.propTypes = {
  // propTypes
}


export default Work
