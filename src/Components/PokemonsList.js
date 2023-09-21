import React from "react";
import { pokemonsApi } from "../Api/PokemonsApi";
import { Pokemon } from "./Pokemon";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FilterButtons } from "./FilterButtons";

export default class PokemonsList extends React.Component {
  state = {
    pokemons: [],
    filteredPokemon: [],
    buttons: ["All", "Grass", "Fire", "Water", "Ice", "Electric", "Normal"],
  };
  componentDidMount() {
    this.fetchPokemons();
  }

  fetchPokemons = async () => {
    const pokemons = await pokemonsApi.get();
    this.setState({ pokemons: pokemons, filteredPokemon: pokemons });
  };

  updatePokemon = async (updatePokemon) => {
    await pokemonsApi.put(updatePokemon);
    this.fetchPokemons();
  };

  deletePokemon = async (pokemonId) => {
    await pokemonsApi.delete(pokemonId);
    this.fetchPokemons();
  };

  handleTypeBtn = (e) => {
    console.log(e.target.value);

    let filteredPokemon;
    if (e.target.value === "All") {
      filteredPokemon = this.state.pokemons;
    } else {
      filteredPokemon = this.state.pokemons.filter(
        (pokemon) => pokemon.type === e.target.value
      );
      console.log(filteredPokemon);
    }
    this.setState({
      filteredPokemon: filteredPokemon,
    });
  };

  render() {
    return (
      <div>
        <div className="filters">
          <FilterButtons
            handleTypeBtn={this.handleTypeBtn}
            buttons={this.state.buttons}
          />
        </div>
        <div className="pokemon-list">
          <Row xs={1} sm={2} md={3}>
            {this.state.filteredPokemon.map((pokemon, index) => (
              <Col className="pokemon-col" key={index}>
                <Pokemon
                  pokemon={pokemon}
                  key={pokemon.id}
                  updatePokemon={this.updatePokemon}
                  deletePokemon={this.deletePokemon}
                />
              </Col>
            ))}
          </Row>
        </div>
      </div>
    );
  }
}
