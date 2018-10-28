import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

/**
 * Class representing a Neighborhood Map main component.
 * @extends React.Component
 */
class MapContainer extends Component {

  /**
   * Render view of this component.
   */
  render() {
     return (

       /** Render map*/
       <Map
        aria-label="Contact map"
        role="application"
        tabIndex = "1"
        google = {this.props.google}
        zoom = {13}
        initialCenter = {{
          lat: 51.248529,
          lng: 22.5640563
        }}>
       </Map>
     );
   }

 }

/** @module MapContainer */
export default GoogleApiWrapper(
  (props) => ({
    apiKey: 'AIzaSyAFIiMycwN7h_esLWJcwPRkdINM25zO4gE',
    language: props.language,
    google: props.google
  }
))(MapContainer)
