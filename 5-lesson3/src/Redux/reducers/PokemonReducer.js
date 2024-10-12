const initialState = {
    pokemons: [],
    loading: false,
    error: null,
};

export const PokemonReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_POKEMON_REQUEST':
            return { ...state, loading: true, error: null };
        case 'FETCH_POKEMON_SUCCESS':
            return { ...state, pokemons: action.payload, loading: false };
        case 'FETCH_POKEMON_FAILURE':
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};