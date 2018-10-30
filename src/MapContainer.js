import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
const style = [
{
  "elementType": "geometry",
  "stylers": [
    {
      "color": "#f5f5f5"
    }
  ]
},
{
  "elementType": "labels.icon",
  "stylers": [
    {
      "visibility": "off"
    }
  ]
},
{
  "elementType": "labels.text.fill",
  "stylers": [
    {
      "color": "#616161"
    }
  ]
},
{
  "elementType": "labels.text.stroke",
  "stylers": [
    {
      "color": "#f5f5f5"
    }
  ]
},
{
  "featureType": "administrative.land_parcel",
  "elementType": "labels.text.fill",
  "stylers": [
    {
      "color": "#bdbdbd"
    }
  ]
},
{
  "featureType": "poi",
  "elementType": "geometry",
  "stylers": [
    {
      "color": "#eeeeee"
    }
  ]
},
{
  "featureType": "poi",
  "elementType": "labels.text.fill",
  "stylers": [
    {
      "color": "#757575"
    }
  ]
},
{
  "featureType": "poi.park",
  "elementType": "geometry",
  "stylers": [
    {
      "color": "#e5e5e5"
    }
  ]
},
{
  "featureType": "poi.park",
  "elementType": "labels.text.fill",
  "stylers": [
    {
      "color": "#9e9e9e"
    }
  ]
},
{
  "featureType": "road",
  "elementType": "geometry",
  "stylers": [
    {
      "color": "#ffffff"
    }
  ]
},
{
  "featureType": "road.arterial",
  "elementType": "labels.text.fill",
  "stylers": [
    {
      "color": "#757575"
    }
  ]
},
{
  "featureType": "road.highway",
  "elementType": "geometry",
  "stylers": [
    {
      "color": "#dadada"
    }
  ]
},
{
  "featureType": "road.highway",
  "elementType": "labels.text.fill",
  "stylers": [
    {
      "color": "#616161"
    }
  ]
},
{
  "featureType": "road.local",
  "elementType": "labels.text.fill",
  "stylers": [
    {
      "color": "#9e9e9e"
    }
  ]
},
{
  "featureType": "transit.line",
  "elementType": "geometry",
  "stylers": [
    {
      "color": "#e5e5e5"
    }
  ]
},
{
  "featureType": "transit.station",
  "elementType": "geometry",
  "stylers": [
    {
      "color": "#eeeeee"
    }
  ]
},
{
  "featureType": "water",
  "elementType": "geometry",
  "stylers": [
    {
      "color": "#c9c9c9"
    }
  ]
},
{
  "featureType": "water",
  "elementType": "labels.text.fill",
  "stylers": [
    {
      "color": "#9e9e9e"
    }
  ]
}
]
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
        style={{height: '300px'}}
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
