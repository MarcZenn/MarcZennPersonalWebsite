// import React with sugar on top
import React, {Component} from 'react'

// Components
import {Col, Row, Grid} from 'react-bootstrap/lib';

// Require ONLY the relevant Stylesheets
require('../../assets/scss/home.scss');
require('../../../public/stylesheets/fallout.scss');


class ContactPartial extends Component {

  constructor(props) {
    // Super() simply allows us to call methods defined on any parent Components of this Component
    super(props);
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  }

  render(){
    return (
      <section className="contact-content">
        <form className="home-contact-form text-center" onSubmit={this.onSubmit.bind(this)}>
          <h2>Contact the System Administrator (SYSADMIN)</h2>
          <p>Fill out the fields below and press the SUBMIT button. The SYSADMIN will respond to your query after an appropriate amount of quiet contemplation. Thank you for contacting the System Administrator's Office.</p>
          <label>Name >></label>
          <input type="text" ref="name" name="name" value={this.state.name} onChange={this.handleChange.bind(this)}/><br />
          <label>Email >></label>
          <input type="text" ref="email" name="email" value={this.state.email} onChange={this.handleChange.bind(this)}/><br />
          <label>Subject >></label>
          <input type="text" ref="subject" name="subject" value={this.state.subject} onChange={this.handleChange.bind(this)}/><br />
          <label>Message >></label>
          <textarea id="text" rows="1" ref="message" name="message" value={this.state.message} onChange={this.handleChange.bind(this)}></textarea><br /><br /><br />
          <input type="submit" value="Submit" />
          {/* <input type="submit" value="Cancel" /> */}
        </form>
      </section>
    )
  }

  handleChange(e) {
    // Dynamically set controlled component, input value state.
    this.setState({[e.target.name]: e.target.value});

    // TODO:: handle robust form validation here....if it does not pass hide submit button else show. 
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.sendEmail(this.state);
  }

}



ContactPartial.propTypes = {
  //
}


export default ContactPartial
