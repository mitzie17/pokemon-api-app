import React from 'react';
import { pokemonsApi } from '../Api/PokemonsApi';
import Pokemon from './Pokemon';

export default class PokemonsList extends React.Component {
    state = {
        pokemons: []
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

    render() {
        return (
            <div className='pokemon-list'>
                {this.state.pokemons.map((pokemon) => (
                    <Pokemon
                        pokemon={pokemon}
                        key={pokemon.id}
                        updatePokemon={this.updatePokemon}
                    />
                ))}
            </div>
        )
    }

}