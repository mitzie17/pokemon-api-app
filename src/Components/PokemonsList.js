import React from "react";
import { pokemonsApi } from "../Api/PokemonsApi";
import { Pokemon } from "./Pokemon";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FilterButtons } from "./FilterButtons";

export default class PokemonsList extends React.Component {
  state = {
    pokemons: [],
    pokemonsCopy: [],
  };
  componentDidMount() {
    this.fetchPokemons();
  }

  fetchPokemons = async () => {
    const pokemons = await pokemonsApi.get();
    this.setState({ pokemons });
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
    let pokemonsCopy;
    if (e.target.value === "All") {
      pokemonsCopy = this.state.pokemons;
    } else {
      pokemonsCopy = this.state.pokemons.filter(
        (pokemon) => pokemon.type === e.target.value
      );
    }
    this.setState({
      pokemons: pokemonsCopy,
    });
  };

  fetchPokemonTypes = async () => {
    const pokemons = await pokemonsApi.get();
    const filteredPokemon = [
      ...new Set(pokemons.map((pokemon) => pokemon.type)),
    ];
    return filteredPokemon;
    console.log(filteredPokemon);
  };

  render() {
    const filterTypes = [
      ...new Set(this.state.pokemons.map((pokemon) => pokemon.type)),
    ];

    return (
      <div>
        <div className="filters">
          <FilterButtons
            typesButtons={filterTypes}
            pokemons={this.state.pokemons}
            handleTypeBtn={this.handleTypeBtn}
          />
        </div>
        <div className="pokemon-list">
          <Row xs={1} sm={2} md={3}>
            {this.state.pokemons.map((pokemon, index) => (
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
