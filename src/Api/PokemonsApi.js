const POKEMONS_API = 'https://64b0cb52062767bc48252eba.mockapi.io/pokemon';

class PokemonsApi {
    get = async () => {
        try {
            const resp = await fetch(POKEMONS_API);
            const data = await resp.json();
            return data;
        } catch(e) {
            console.log('Oh no! Something in fetchPokemon went wrong:(', e);
        }
    }

    put = async (pokemon) => {
        try {
            const resp = await fetch(`${POKEMONS_API}/${pokemon.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(pokemon)
            });
            return await resp.json();
        } catch(e) {
            console.log('Oh no! Something in updatePokemon went wrong:(', e);
        }
    }

}

export const pokemonsApi = new PokemonsApi();