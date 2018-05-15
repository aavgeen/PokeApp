import React, {Component} from 'react'
import PropTypes from 'prop-types';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';
import Search from '@material-ui/icons/Search';
import {changeSearch} from '../../actions/searchTerm';

class SearchField extends Component{
  static propTypes = { 
    dispatch: PropTypes.func,
  }
  constructor(props){
    super(props);
    this.state= {
        value: 0,
    }
    this.onSearchChange = this.handleChange.bind(this);
    }

    onSearchChange = (event) => {
        //Emit an Action here to supply to redux store of main app.
        // this.props.handleChangeType(val); //Because of index;
        this.props.dispatch(changeSearch(event.target.value));
    };
  render(){
    return (
      <div>
        <FormControl style={styles.formContainer}>
            <InputLabel shrink htmlFor="input-with-icon-adornment">Search</InputLabel>
            <Input
              fullWidth	= {true}
              autoFocus = {true}
              style={styles.searchInput}
              onChange= {this.onSearchChange}
              id="input-with-icon-adornment"
              startAdornment={
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              }
            />
        </FormControl>
      </div>
    )
  }
}
const styles = {
    formContainer:{
      marginTop: 30,
      width: 900,
    },
    searchInput:{
      backgroundColor: "#f3f3f3",
      borderRadius: 20,
      padding: 10
    }  
  }

  export default SearchField;
