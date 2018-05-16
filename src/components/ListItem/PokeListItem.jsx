import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {Paper, Typography} from 'material-ui';
import Card, { CardActions, CardContent} from 'material-ui/Card';
export default class PokeListItem extends Component {
    constructor(){
        super();    
        this.state= {
            show: true
        }
    }
  render() {
    if(this.state.show)
        return (
            <Paper elevation={4}>
                <div style={styles.container}>
                    <img src={this.props.imgurl} alt={this.props.name} onError={() => {this.setState({show: false})}} height="100" width="100" />
                    <br />
                    <Typography variant="title" color="secondary">
                        {this.props.name.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); })}
                    </Typography>   
                    <Typography variant="body2" color="primary">
                        {this.props.pokeurl}
                    </Typography>
                </div>
            </Paper>
        )
    else{
        return(<div></div>)
    }
  }
}

const styles = {
    container: {
        paddingTop:10, 
        borderRadius: 30,
        font: 'BlinkMacSystemFont',
        backgroundColor: 'white',
        fontColor: 'black',
        height: 300,
    }
}

// PokeListItem.propTypes =
