import React, { Component } from 'react';
import './Portfolio.css';
import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesloaded';
import 'lightbox2/dist/js/lightbox.js';
import 'lightbox2/dist/css/lightbox.css';

/**
 * Class representing a Portfolio component.
 * @extends React.Component
 */
class Portfolio extends Component {

  /**
   * @property {object}  this.state           - The default values for state.
   * @property {array}   state.images         - The array of default images.
   */
  state = {
    images: []
  }

  /** Fetch JSON data from airtable */
  componentDidMount() {
    fetch('https://api.airtable.com/v0/apporPHdeV86qOTq9/Table%201?api_key=keyzNbhuvWFg1XFah')
    .then((res) => res.json())
    .then((result) => {

      // update state.images after data is fetched
      this.setState((state) => {
        return {images: result.records};
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

    });
  }

  /**
   * Render view of this component.
   */
  render() {
    return (
      <div className="App">
      <h1>Portfolio</h1>
        <div className="grid">
          <div className="grid-sizer"></div>
          {!this.state.images ? null : this.state.images.map((el) =>
            <div className="grid-item" key={el.id}>
            <a href={el.fields.Attachments[0].url} data-lightbox="images" data-title={el.fields.Caption}>
              <img src={el.fields.Attachments[0].thumbnails.large.url} alt={el.fields.Caption} />
            </a>
            </div>
          )}
        </div>
      </div>
    );
  }
}

/** @module Portfolio */
export default Portfolio;
