import { combineReducers } from 'redux';
import pokemonType from './pokemonType';
import searchTerm from './searchTerm';

export default combineReducers({
    pokemonType,
    searchTerm,
});