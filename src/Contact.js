import React, { Component } from "react";
 
class Contact extends Component {
  render() {
    return (
      <div>
        <h1>Contact Us</h1>
        <p>Jack said he's <strong>buying lunch and beers!</strong></p>
        <div className="contact--form">
          <form action="mailto:anthonybet1@gmail.com"
          method="POST"
          enctype="multipart/form-data"
          name="EmailForm">
              Name:<br/>
              <input type="text" size="19" name="Contact-Name"></input><br/><br/>
              Email:<br/>
              <input type="email" name="Contact-Email"></input><br/><br/> 
              Message:<br/> 
              <textarea name="Contact-Message" rows="6" cols="20"></textarea>
              <br/><br/> 
              <button type="submit" value="Submit">Send</button>
          </form>
        </div>
      </div>
    );
  }
}
 
export default Contact;