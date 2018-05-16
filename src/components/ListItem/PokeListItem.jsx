import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {Paper, Typography} from 'material-ui';
export default class PokeListItem extends Component {
    static proptypes = {
        imgurl: PropTypes.string,
        name: PropTypes.string,
        pokeurl: PropTypes.string
    }
    constructor(){
        super();    
        this.state= {
            show: true
        }
    }
  render() {
    if(this.state.show)
        return (
            <div style={styles.container}>
                <Paper elevation={10}>
                    <div style={styles.content}>
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
            </div>
        )
    else{
        return(<div></div>)
    }
  }
}

const styles = {
    content: {
        paddingTop:10, 
        borderRadius: 30,
        font: 'BlinkMacSystemFont',
        backgroundColor: 'white',
        fontColor: 'black',
        height: 300,
    },
    container: {
        zIndex: 3
    }
}

// PokeListItem.propTypes =
