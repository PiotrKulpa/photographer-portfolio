import React, { Component } from 'react';
import './Nav.css';

/**
 * Class representing a Nav component.
 * @extends React.Component
 */
class Nav extends Component {

  /**
   * Render view of this component.
   */
  render() {
    return (
      <div className="App">

      <div className="pos-f-t text-center">
        <div className="collapse" id="navbarToggleExternalContent">
          <div className="bg-dark p-4">
            <h4 className="text-white">KS</h4>
            <span className="text-muted">Klaudia Smidth Photography</span>
              <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
              <a className="nav-link" href="/portfolio">Portfolio</a>
              <a className="nav-link" href="/contact">Contact</a>
          </div>
        </div>
        <nav className="navbar navbar-dark bg-dark">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </nav>
      </div>

      </div>
    );
  }
}

/** @module Nav */
export default Nav;
