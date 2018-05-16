import React, { Component } from 'react';
import { AppBar, Toolbar, Typography, BottomNavigation } from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { connect } from "react-redux";
import theme from './appTheme';
import './App.css';
import SearchField from './components/searchField/SearchField';
import TypeFooter from './components/footer/TypeFooter';
import PokeList from './components/Lists/PokeList';
import {changeType} from './actions/pokemonType';
import {changeSearch} from './actions/searchTerm';

var selected = false;
var searched = false;
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        type: 1,
        pokemonList: [],
        searchTerm: "",
        pokemons: [],
        filteredPokemons: [],

    }
    this.onChangeType = this.onChangeType.bind(this);
    this.onChangeSearch = this.onChangeSearch.bind(this);
  }

  componentDidMount (){
    this.onChangeType(this.state.type);
  }
  onChangeType = function(value){
    //CHANGE TYPE VARIABLE IN REDUX STORE
    console.log("onchangeTyep in app.js: ",value);
    this.setState({
      type: value
    },
    //callback
    function(){
      this.props.dispatch(changeType(value));
      this.setState({
        pokemonList: [],
        pokemons: [],
        filteredPokemons: []
      })
      //TODO ENABLE LOADING ICON HERE.
      var API_URL = 'https://pokeapi.co/api/v2/type/';
      fetch(API_URL+this.state.type+'/')
      .then((result) => {
          return result.json();
      })
      .then((data) => {
        console.log(data.pokemon);
        //TODO DISABLE LOADING ICON HERE.
        this.setState({
          pokemonList: data.pokemon
        });
  
        //Filter the array for sending names and url
        var poke=[];
        this.state.pokemonList.forEach( pokem => {
          var u  = (pokem.pokemon.url);
          u=u.split("");
          u = u.splice(34);
          u.pop();
          u=u.join("");
          var url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+u+".png";
          poke.push({name: pokem.pokemon.name, imgurl: url, pokeurl: pokem.pokemon.url});
        });
        console.log(poke);
        this.setState({
          pokemons: poke,
          filteredPokemons: poke
        });
  
      }).catch(err => {//TODO DISABLE LOADING ICON HERE.
                        //Call/Enable the dialog with "PROBLEM IN FETCHING"
                        console.log(err)});
    }
  );
   
  }


  onChangeSearch = function(event){
    this.setState({
      searchTerm: event.target.value
    });
    //DISPATCH TO STORE
    this.props.dispatch(changeSearch(event.target.value));
    //filter the items here to display.
    var updatedList = this.state.pokemons;
    updatedList = updatedList.filter(function(item){
      return item.name.toLowerCase().search(
        event.target.value.toLowerCase()) !== -1;
    });
    this.setState({
      filteredPokemons: updatedList
    })
  }

  render() {
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
          <AppBar position="static" color="secondary" >
            <Toolbar>
              <Typography variant="display2">
                My Poke App
              </Typography>
            </Toolbar>
          </AppBar>
          <TypeFooter onChangeType={this.onChangeType}/>
          {/* Toggle icon to local search or full search */}
          <SearchField onSearchChange={this.onChangeSearch}/>
          <PokeList pokemons={this.state.filteredPokemons} />
        </MuiThemeProvider>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  searchTerm: state.searchTerm.searchTerm,
  type: state.pokemonType.searchTerm,
})
export default connect(mapStateToProps)(App);

const styles = {
  mainContent: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  }
}