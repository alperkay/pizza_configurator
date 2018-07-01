import React, { Component } from 'react';
import PizzaConfigurator from './components/PizzaConfigurator'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="flex-container">
        <PizzaConfigurator />
      </div>
    );
  }
}

export default App;
