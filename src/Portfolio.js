import React, { Component } from 'react';
import './Portfolio.css';
import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesloaded';

class Portfolio extends Component {

  state = {
    images: []
  }

  componentDidMount() {

    fetch('https://api.airtable.com/v0/apporPHdeV86qOTq9/Table%201?api_key=keyzNbhuvWFg1XFah')
    .then((res) => res.json())
    .then((result) => {

      this.setState((state) => {
        return {images: result.records};
      });

      console.log(this.state.images)
    });
    // init Masonry after all images have loaded
    var grid = document.querySelector('.grid');
    var msnry;

    imagesLoaded( grid, function() {
      // init Isotope after all images have loaded
      msnry = new Masonry( grid, {
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        percentPosition: true
      });
    });
  }

  render() {
    return (
      <div className="App">

      <h1>Portfolio</h1>

        <div className="grid">
          <div className="grid-sizer"></div>
          <div className="grid-item">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/orange-tree.jpg" />
          </div>
          <div className="grid-item">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/submerged.jpg" />
          </div>
          <div className="grid-item">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/look-out.jpg" />
          </div>
          <div className="grid-item">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/one-world-trade.jpg" />
          </div>
          <div className="grid-item">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/drizzle.jpg" />
          </div>
          <div className="grid-item">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/cat-nose.jpg" />
          </div>
          <div className="grid-item">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/contrail.jpg" />
          </div>
          <div className="grid-item">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/golden-hour.jpg" />
          </div>
          <div className="grid-item">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/flight-formation.jpg" />
          </div>

          {!this.state.images ? null : this.state.images.map((el) =>
            <div className="grid-item">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/flight-formation.jpg" />
            </div>
          )}

        </div>



      </div>
    );
  }
}

export default Portfolio;
