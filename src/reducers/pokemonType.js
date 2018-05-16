import { CHANGE_TYPE } from '../actions/pokemonType';

const initialState = {
    pokemonType: 1
}

export default (state = initialState, action) => {
    switch(action.type){
        case CHANGE_TYPE: {
            return{
            ...state,
            pokemonType: action.pokemonType,
            }
        }
        default:
            return state;
    }
}