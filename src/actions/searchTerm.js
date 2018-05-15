export const CHANGE_SEARCH = 'CHANGE_SEARCH';

export const changeSearch = searchTerm => ({
    type: CHANGE_SEARCH,
    searchTerm,     //Syntactical sugar if the name (kay) and value are same.
})