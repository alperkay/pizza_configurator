import React, { Component } from 'react';
import IngredientsList from './components/IngredientsList'
// import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>WELCOME TO NEWAGEPIZZA.COM</h1>
        <h2>Let's get you a delicious pizza!</h2>
        <IngredientsList />
      </div>
    );
  }
}

export default App;
