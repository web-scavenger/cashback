import React, { Component } from 'react';
import Stores from './components/Stores.jsx'

import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Stores />
      </div>
    )
  }
}
