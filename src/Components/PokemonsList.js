import React from 'react';
import { pokemonsApi } from '../Api/PokemonsApi';


export default class PokemonsList extends React.Component {
    state = {
        pokemons: []
    };

    componentDidMount() {
        this.fetchPokemons();
    }

    fetchPokemons = async () => {
        const pokemons = await pokemonsApi.get();
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}