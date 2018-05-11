import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {Paper, Typography} from 'material-ui'
export default class PokeListItem extends Component {
  render() {
    return (
        <Paper color="secondary">
            <div style={styles.container}>
                <img src={this.props.imgurl} alt={this.props.name} height="60" width="60" />
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
  }
}

const styles = {
    container: {
        paddingTop:20, 
        borderRadius: 30,
        font: 'BlinkMacSystemFont',
        backgroundColor: 'black',
        fontColor: 'white',
        height: 200,
    }
}

// PokeListItem.propTypes =
