import { CHANGE_SEARCH } from '../actions/searchTerm';

const initialState = {
    searchTerm: ""
}

export default (state = initialState, action) => {
    switch(action.type){
        case CHANGE_SEARCH: {
            return{
            ...state,
            searchTerm: action.searchTerm,
            }
        };
        default:
            return state;
    }
}