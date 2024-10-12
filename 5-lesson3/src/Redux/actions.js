import { types } from "./types";



export const fetchPokemonAction = () => async (dispatch) => {
    dispatch({ type: 'FETCH_POKEMON_REQUEST' });

    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
        const data = await response.json();
        dispatch({ type: 'FETCH_POKEMON_SUCCESS', payload: data.results });
    } catch (error) {
        console.error("Failed to fetch Pokémon:", error);
        dispatch({ type: 'FETCH_POKEMON_FAILURE', payload: error.message });
    }
};
