// Nutraceuticals.js
// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import myImage from './path/to/your/image.jpg'; // Adjust the path as needed
import Nutraceuticals from './assets/Nutraceuticals.jpg'
import './Nutraceuticals.css'; // Optional for styling

class Nutraceuticals extends Component {
  render() {
    return (
      <div className="nutraceuticals">
        <h1>Welcome to Nutraceuticals</h1>
        <img src={Nutraceuticals} alt="Nutraceuticals" className="nutraceuticals-image" />
      </div>
    );
  }
}

export default Nutraceuticals;
