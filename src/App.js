import React from 'react';
import PokemonsList from './Components/PokemonsList';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>
          My Pokemon App
        </h1>
        <PokemonsList />
      </div>
    );
  }

}
