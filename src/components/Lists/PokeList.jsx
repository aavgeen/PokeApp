import React, { Component } from 'react'
import PokeListItem from '../ListItem/PokeListItem';
import GridList, { GridListTile } from 'material-ui/GridList';
import { Paper } from 'material-ui';

export default class PokeList extends Component {
    constructor(props){
        super(props);
        this.setState({
            tiles: this.props.pokemons,
            cols: 1
        })
    }

    render() {
        return (
        <div style={styles.gridlist}>
                <GridList cellHeight="auto"  cols={4} spacing={30}>
                    {this.props.pokemons.map((tile, state) => (
                    <GridListTile key={tile.name} cols={1}>
                        <div style={styles.content}>
                            <Paper elevation={2} square={false}>
                                <PokeListItem   imgurl={tile.imgurl}
                                                name={tile.name} 
                                                pokeurl={tile.pokeurl} />
                            </Paper>
                        </div>
                    </GridListTile>
                ))}
                </GridList>
        </div>
        )
    }
}

const styles = {
    gridlist: {
        marginLeft: 100,
        marginRight: 100,
        marginBottom:20,
        marginTop: 20
    },
    content: {
        margin: 5,
    }
}