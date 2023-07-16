import React from 'react';
import PokemonsList from './Components/PokemonsList';
import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>
          My Pokemon App
        </h1>
        <PokemonsList />
      </div>
    );
  }

}
