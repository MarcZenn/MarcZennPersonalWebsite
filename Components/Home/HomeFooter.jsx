import React, {Component} from 'react';

// Stylesheets
import {Grid, Row, Col} from 'react-bootstrap/lib'


class HomeFooter extends Component {
 render (){
   return (
     <footer className="home-footer">
      <Grid>
        <Row className="show-grid">
          <Col md={ 6 } xs={ 12 } >
            <div>
              <img src="./public/images/symbol-logo.png"  />
            </div>
            <a class="widget ng-scope" ng-href="https://www.thumbtack.com/-Boulder-CO/service/2512017" target="_blank" href="https://www.thumbtack.com/-Boulder-CO/service/2512017">
              <img src="https://static.thumbtackstatic.com/media/pages/profile/standard-widgets/pro-svg/white/2016.svg" />
            </a>
          </Col>
          <Col md={ 6 } xs={ 12 } >
            <div>
              <ul>
                <li><a href="#" title="">Companies</a></li>
                <li><a href="#" title="">Works</a></li>
                <li><a href="#" title="">About</a></li>
                <li><a href="#" title="">Contact</a></li>
              </ul>
            </div>
          </Col>
        </Row>
      </Grid>

       {/*<div className="home-social-bar">
         <ul>
           <li><a href="https://github.com/MarcZenn">Github</a></li>
           <li><a href="https://www.linkedin.com/in/marcosmartinez2">LinkedIn</a></li>
           <li><a href="">Google+</a></li>
         </ul>
       </div>*/}
     </footer>
   )
 }
}


HomeFooter.propTypes = {
  // propTypes
}


export default HomeFooter
