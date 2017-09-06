import React, { Component } from 'react';
import '../styles/App.css';
import img from '../styles/Whale_Hello.gif'

export default class App extends Component {
  render() {
    return (
        <div className="main">
          <h1>Hello and Welcome!</h1>
          <img src={img} alt="whale hello"></img>
        </div>
    );
  }
}
