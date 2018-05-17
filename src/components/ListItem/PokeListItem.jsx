import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Typography, AppBar, Button, Dialog, ListItemText, ListItem,
            List, Divider, Toolbar, IconButton, Slide} from 'material-ui';


import CloseIcon from '@material-ui/icons/Close';


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
        }
    //     this.handleClickOpen = this.handleClickOpen.bind(this);
    //     this.handleClose = this.handleClose.bind(this);
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
                    TransitionComponent={Transition}
                    >
                    <AppBar>
                        <Toolbar>
                        <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
                            <CloseIcon />
                        </IconButton>
                        <Typography variant="title" color="inherit">
                            {this.props.name.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); })}
                        </Typography>
                        </Toolbar>
                    </AppBar>
                    <List>
                        <ListItem button>
                            <ListItemText primary={this.props.pokeurl} secondary="" />
                        </ListItem>
                        <Divider />
                        <ListItem button>
                            <ListItemText primary={this.props.pokeurl} secondary="" />
                        </ListItem>
                        <Divider />
                        <ListItem>
                            <Typography variant="title" color="inherit">
                                dwfff3f
                            </Typography>
                        </ListItem>
                    </List>
                    <Divider />
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
    }
}

// PokeListItem.propTypes =
