import React, { Component } from 'react';
import './Footer.css'

/**
 * Class representing a Footer component.
 * @extends React.Component
 */
class Footer extends Component {

  /**
   * Render view of this component.
   */
  render() {
    return (
      <div className="footer text-center mt-5">

          <p>
            © Copyright 2018. All Rights Reserved.
          </p>

      </div>
    );
  }
}

/** @module Footer */
export default Footer;
