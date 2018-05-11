import React, {Component} from 'react';

class PokemonList extends Component{
    constructor(props){
        super(props);
        this.state = {
            list: this.props.pokemonList
        }
    }
    renderPokemonList(){
        return this.props.pokemonList.map( (pokemon, index) => {
                return 
            });
    }
    render(){
        if(this.props.pokemonList.length === 0){
            return <p>No pokemon Found</p>
        }
        return(
            <ul>
                {this.renderPokemonList()}
            </ul>
        )
    }
}


export default PokemonList;