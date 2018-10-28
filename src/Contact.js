import React, { Component } from 'react';
import './Contact.css';
import MapContainer from './MapContainer';

class Contact extends Component {
  render() {
    return (
      <div className="contact">

          <h1>Kontakt</h1>
          <div className="row">
            <div className="col-sm-12 col-md-4">

              <p>Klaudia Smidth Photography</p>
              <p>(503) 539-7299</p>
              <p>dreams @ aralani.com</p>
              <p>325 NW 21st Avenue, Suite 300 - Portland, OR 97209</p>



            <p>
              It's very important to me to have a strong connection and rapport with each of my couples--I know just how much that trust and connection shows in your photographs.  I believe you deserve to have your story told through the lens of someone who gets you, whom you trust with your emotional and vulnerable moments.  That's why I insist on meeting you either in person or over the phone--and if we're the perfect fit, I'll be overjoyed to join you on your wedding day!
            </p>
            </div>

            <div className="col-sm-12 col-md-8">



              <div className="row" style={{ height: '300px', width: '100%', display: 'block' }}>
                        <MapContainer

                        ></MapContainer>
              </div>


              <div className="row" style={{ display: 'block' }}>
                <form action="#" className="contact-form" id="el_5bd4941a838f6" data-alerts="0" data-alerts-msg="Please fill &quot;%&quot; field." data-privacy-error-msg="You must check privacy policy checkbox in order to submit the form." noValidate="">
                <div className="row">
                <div className="col-sm-6">
                <div className="form-group labeled-input-row">
                <label htmlFor="el_5bd4941a838f6_name">Name.</label>
                <input name="name" id="el_5bd4941a838f6_name" type="text" placeholder="" data-label="Name"/>
                </div>
                </div>
                <div className="col-sm-6"><div className="form-group labeled-input-row">
                <label htmlFor="el_5bd4941a838f6_email">Email.</label>
                <input name="email" id="el_5bd4941a838f6_email" type="email" placeholder="" data-label="Email"/>
                </div>
                </div>
                <div className="col-sm-12">
                <div className="form-group labeled-textarea-row">
                <label htmlFor="el_5bd4941a838f6_message">Message.</label>
                <textarea name="message" id="el_5bd4941a838f6_message" placeholder="" data-label="Message">
                </textarea>
                </div>
                </div>
                </div>
                <div className="form-group contact-form-privacy-policy">
                <label>
                <input type="checkbox" name="privacy_policy_check"/> <span>I’ve read and accept the <a href="#" className="">terms &amp; conditions</a> *</span> </label>
                </div>
                <button type="submit" name="send" className="button"> <span className="pre-submit">Send Message</span> <span className="success-msg">Thank you #, message sent!
                <i className="flaticon-verification24"></i></span> <span className="loading-bar"> <span></span> </span>
                </button>
                </form>
              </div>


            </div>
          </div>


      </div>
    );
  }
}

export default Contact;
