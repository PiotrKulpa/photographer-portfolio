import React, { Component } from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import Home from './Home';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Nav from './Nav';
import Footer from './Footer';

/**
 * Class representing a Main component.
 * @extends React.Component
 */
class App extends Component {

  componentDidMount() {
  }

  /**
   * Render view of this component.
   */
  render() {
    return (
      <div>
        <Nav />
        <div className="container">

          <Route exact path="/" render={()=>(
             <div>
               <Home />
             </div>
           )}/>

         <Route exact path="/portfolio" render={()=>(
             <div>
               <Portfolio />
             </div>
           )}/>

         <Route exact path="/contact" render={()=>(
             <div>
               <Contact />
             </div>
           )}/>

        </div>
        <Footer />
      </div>
    );
  }
}

/** @module App */
export default App;
