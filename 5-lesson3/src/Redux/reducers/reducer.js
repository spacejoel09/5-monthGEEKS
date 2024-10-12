
import { combineReducers } from 'redux';
import { UserReducer } from './UsersReducer';
import { PokemonReducer } from './PokemonReducer';

export const rootReducer = combineReducers({
    PokemonReducer,

});
