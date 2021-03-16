import React, { Component } from 'react';
import './Contact.css';
import './App.css';



class Contact extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        email: '',
        message: ''
      }
    }
  
    render() {
      return(
        <div className="App">
          <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
            <div className="form-group">
              <label htmlFor="name">Full Name:</label>
              <input type="text" className="form-control" value={this.state.name} onChange={this.onNameChange.bind(this)} />
            </div>
            <br></br>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address:</label>
              <input type="email" className="form-control2" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
            </div>
            <br></br>
            <label htmlFor="message">Message:</label>
            
            <div className="form-group">
          
              <textarea className="form-control1" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
            </div>
            <br></br>
            <button type="submit" className="btn-primary">Submit</button>
          </form>
        </div>
      );
    }
  
    onNameChange(event) {
      this.setState({name: event.target.value})
    }
  
    onEmailChange(event) {
      this.setState({email: event.target.value})
    }
  
    onMessageChange(event) {
      this.setState({message: event.target.value})
    }
  
    handleSubmit(event) {
    }
  }
  
  export default Contact;