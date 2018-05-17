import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Typography, AppBar, Button, Dialog, ListItemText, ListItem,
            List, Divider, Toolbar, IconButton, Slide} from 'material-ui';
import CloseIcon from '@material-ui/icons/Close';

import Loader from '../loader/loader';


function Transition(props) {
    return <Slide direction="up" {...props} />;
  }

export default class PokeListItem extends Component {
    static proptypes = {
        imgurl: PropTypes.string,
        name: PropTypes.string,
        pokeurl: PropTypes.string
    }
    constructor(){
        super();    
        this.state= {
            show: true,
            open: false,
            isLoading: true,
            types: "",
            moves: "",
            abilities: "",
            weight: 0,
            base_XP: 0,
        }
        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.getPokeData = this.getPokeData.bind(this);
    }
    getPokeData= () => {  
        //call the rest service to fetch the data for a particular pokemon.
        this.setState({isLoading: true});
        //We will show Types of the Pokemon, the moves, the abilities, the weight and base experience.
        fetch(this.props.pokeurl)
        .then((result) => {
            return result.json();
        })
        .then((data) => {
            //assign the data to respective state values.
            console.log(data);
            //Assign for the Types.
            var types="";
            data.types.forEach(ty => {
                types+=ty.type.name+', '
            });
            this.setState(prevState => {
                types: prevState.types+types
            });
            console.log("Types: ",types);
            //Weight
            this.setState(prevState => {
                weight: prevState.weight+data.weight
            })
            //Base_XP
            this.setState(prevState => {
                base_XP: prevState.base_XP+data.base_XP
            })
            //Moves
            var moves = "";
            data.moves.forEach(mv => {
                moves+=mv.move.name+', '
            });
            console.log("Moves: ",moves);
            this.setState(prevState => {
                abilities: prevState.moves+moves
            });

            //Abilities
            var abilities = "";
            data.abilities.forEach(abi => {
                abilities+=abi.ability.name+', '
            });
            console.log("Abilities: ",abilities);
            this.setState(prevState => {
                abilities: prevState.abilities+abilities
            });
            
            this.setState({isLoading: false})
        });
    }
    handleClickOpen = () => {
        this.setState({ open: true });
        console.log("Open Clicked", this.state.open)
      };
    
    handleClose = () => {
    this.setState({ open: false });
    console.log("Close Clicked", this.state.open)
    };

  render() {
    if(this.state.show)
        return (
            <div>
                <div style={styles.content} onClick={this.handleClickOpen}>
                    <img src={this.props.imgurl} alt={this.props.name} onError={() => {this.setState({show: false})}} height="100" width="100" />
                    <br />
                    <Typography variant="title" color="secondary">
                        {this.props.name.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); })}
                    </Typography>     
                </div>
                <Dialog
                    fullScreen
                    open={this.state.open}
                    onClose={this.handleClose}
                    onEntered={this.getPokeData}
                    TransitionComponent={Transition}
                    >
                    <AppBar >
                        <Toolbar>
                        <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
                            <CloseIcon />
                        </IconButton>
                        <Typography variant="title" color="inherit">
                            {this.props.name.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); })}
                        </Typography>
                        </Toolbar>
                    </AppBar>
                    <div style={styles.dialogContent}>
                        <List >
                            <img src={this.props.imgurl} alt={this.props.name} onError={() => {this.setState({show: false})}} height="150" width="150" />
                            <Divider />
                            <ListItem button>
                                <ListItemText primary={"Types: "+this.state.types} secondary="" />
                            </ListItem>
                            <Divider />
                            <ListItem button>
                                <ListItemText primary={"Weight: "+this.state.weight} secondary="" />
                            </ListItem>
                            <Divider />
                            <ListItem button>
                                <ListItemText primary={"Moves: "+this.state.moves} secondary="" />
                            </ListItem>
                            <Divider />
                            <ListItem button>
                                <ListItemText primary={"Base XP: "+this.state.base_XP} secondary="" />
                            </ListItem>
                            <Divider />
                            <ListItem>
                                <ListItemText primary={"Abilities: "+this.state.abilities} secondary="" />
                            </ListItem>
                            <Divider />
                        </List>
                    </div>
                    <Divider />
                    {(this.state.isLoading) && <Loader/>}
                </Dialog>
            </div>
        )
    else{
        return(<div></div>)
    }
  }
}

const styles = {
    content: {
        borderRadius: 30,
        font: 'BlinkMacSystemFont',
        fontColor: 'black',
        // zIndex: 3,
        // boxShadow: '1px 3px 1px 3px #9E9E9E',
        backgroundColor: 'white',
        padding: 0,
        height: 150,
    },
    dialogContent: {
        marginTop:60,
    }
}

// PokeListItem.propTypes =
