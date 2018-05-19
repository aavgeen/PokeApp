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
        console.log("Loader in get",this.state.isLoading);
        //We will show Types of the Pokemon, the moves, the abilities, the weight and base experience.
        fetch(this.props.pokeurl)
        .then((result) => {
            return result.json();
        })
        .then((data) => {
            //assign the data to respective state values.
            console.log(data);
            //Assign for the Types.
            var typesii="";
            data.types.forEach(ty => {
                typesii+=ty.type.name+', '
            });
            typesii = typesii.slice(0, -2);
            typesii = typesii.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); })   
            this.setState({
                types: typesii
            });
            console.log("Types: ",typesii);
            //Weight
            this.setState({
                weight: data.weight
            })
            //Base_XP
            this.setState({
                base_XP: data.base_experience
            })
            //Moves
            var movesii = "";
            data.moves.forEach(mv => {
                movesii+=mv.move.name+', '
            });
            console.log("Moves: ",movesii);
            movesii = movesii.slice(0, -2);
            movesii = movesii.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); })
            this.setState({
                moves: movesii
            });

            //Abilities
            var abilitiesii = "";
            data.abilities.forEach(abi => {
                abilitiesii+=abi.ability.name+', '
            });
            abilitiesii = abilitiesii.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); })
            console.log("Abilities: ",abilitiesii);
            abilitiesii = abilitiesii.slice(0, -2);
            this.setState({
                abilities: abilitiesii
            });
            console.log("Disable loader.")
            this.setState({isLoading: false})
        });
    }
    handleClickOpen = () => {
        this.setState({ open: true });
        console.log("Open Clicked", this.state.open);
        this.setState({isLoading: true});
      };
    
    handleClose = () => {
        this.setState({ open: false });
        console.log("Close Clicked", this.state.open);
        this.setState({isLoading: true});
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
                    {!(this.state.isLoading) &&
                    <div style={styles.dialogContent}>
                        <List style={styles.listContent}>
                            <img src={this.props.imgurl} alt={this.props.name} onError={() => {this.setState({show: false})}} height="150" width="150" />
                            <Divider />
                            <ListItem button>
                                <ListItemText primary={"Types: "} secondary={this.state.types} />
                            </ListItem>
                            <Divider />
                            <ListItem button>
                                <ListItemText primary={"Weight: "} secondary={this.state.weight} />
                            </ListItem>
                            <Divider />
                            <ListItem button>
                                <ListItemText primary={"Moves: "} secondary={this.state.moves} />
                            </ListItem>
                            <Divider />
                            <ListItem button>
                                <ListItemText primary={"Base XP: "} secondary={this.state.base_XP} />
                            </ListItem>
                            <Divider />
                            <ListItem button>
                                <ListItemText primary={"Abilities: "} secondary={this.state.abilities} />
                            </ListItem>
                            <Divider />
                        </List>
                    </div>}
                    {(this.state.isLoading) && <div style={styles.dialogContent}><Loader/></div>}
                    {/* <div style={styles.dialogContent}><Loader/></div> */}
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
        marginTop:65,
    },
    listContent: {
        alignContent: 'center',
        justifyContent: 'center'
    }
}

// PokeListItem.propTypes =
