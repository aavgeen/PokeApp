export const CHANGE_TYPE = 'CHANGE_TYPE';

export const changeType = pokemonType => ({
    type: CHANGE_TYPE,
    pokemonType: pokemonType
})