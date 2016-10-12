// import React
import React, {Component} from 'react'

// Components
import {Col, Row, Grid} from 'react-bootstrap/lib';

// Require ONLY the relevant Stylesheets
require('../../assets/scss/home.scss');
require('../../../public/stylesheets/fallout.scss');


class ContactPartial extends Component {
  render(){
    return (
      <section className="contact-content">
        <form className="home-contact-form">
          <h2>Contact the System Administrator (SYSADMIN)</h2>
          <p>Fill out the fields below and press the SUBMIT button. The SYSADMIN will respond to your query after an appropriate amount of quiet contemplation. Thank you for contacting the System Administrator's Office.</p>
          <label>Name >></label><input type="text" /><br />
          <label>Email >></label><input type="text" /><br />
          <label>Subject >></label><input type="text" /><br />
          <label>Message >></label><textarea id="text" rows="1"></textarea><br /><br /><br />
          <input type="submit" value="Submit" />
          <input type="submit" value="Cancel" />
        </form>
      </section>
    )
  }
}

ContactPartial.propTypes = {
 // propTypes
}


export default ContactPartial
