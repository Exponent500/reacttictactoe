import React, { Component } from 'react';
import './App.css';
import Game from '../Game/Game';

class App extends Component {
  render() {
    return (
      <div className="col-xs-12 App">
        <Game />
      </div>
    );
  }
}

export default App;
