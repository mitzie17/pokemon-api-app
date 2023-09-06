import React from "react";
import { pokemonsApi } from "../Api/PokemonsApi";
import { Pokemon } from "./Pokemon";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class PokemonsList extends React.Component {
  state = {
    pokemons: [],
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

  render() {
    return (
      <div className="pokemon-list">
        <Row xs={1} sm={2} md={3}>
          {this.state.pokemons.map((pokemon) => (
            <Col className="pokemon-col">
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
    );
  }
}
