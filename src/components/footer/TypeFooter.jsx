import React, { Component } from 'react'
import { Paper, Grid, Tabs, Typography } from 'material-ui';
import Tab from 'material-ui/Tabs/Tab';
import TurnedInNot from '@material-ui/icons/TurnedInNot';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlightTakeoff from '@material-ui/icons/FlightTakeoff';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
import {changeType} from '../../actions/pokemonType';

export default class TypeFooter extends Component {
    constructor(props){
        super(props);
        this.state= {
            value: 0
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(){
        //Emit an Action here to supply to redux store of main app.
        // this.props.handleChangeType(val); //Because of index;
        this.props.dispatch(changeType(this.state.value + 1));
    };
    render() {
        return (
        <div style={styles.footer}>
            {/* <Typography variant="title" color="secondary">Type</Typography> */}
            <Paper>
            {/* <Grid container spacing={8} justify="center">
                <Grid item xs={12} sm={12}>
                <Grid justify="center" spacing={Number(2)}> */}
                    <Tabs
                        value={this.state.value}
                        onChange={this.handleChange()}
                        scrollable
                        scrollButtons="on"
                        indicatorColor="primary"
                        textColor="primary"
                        >
                    <Tab label="Normal" icon={<FavoriteIcon />} />
                    <Tab label="Fighting" icon={<TurnedInNot />} />
                    <Tab label="Flyning" icon={<FlightTakeoff />} />
                    <Tab label="Poison" icon={<HelpIcon />} />
                    <Tab label="Ground" icon={<ShoppingBasket />} />
                    <Tab label="Rock" icon={<ThumbDown />} />
                    <Tab label="Ghost" icon={<ThumbUp />} />
                    <Tab label="Steel" icon={<ThumbUp />} />
                    <Tab label="Fire" icon={<ThumbUp />} />
                    <Tab label="Water" icon={<ThumbUp />} />
                    <Tab label="Grass" icon={<ThumbUp />} />
                    <Tab label="Electric" icon={<ThumbUp />} />
                    <Tab label="Psychic" icon={<ThumbUp />} />
                    <Tab label="Ice" icon={<ThumbUp />} />
                    <Tab label="Dragon" icon={<ThumbUp />} />
                    <Tab label="Dark" icon={<ThumbUp />} />
                    <Tab label="Fairy" icon={<ThumbUp />} />
                </Tabs>
                {/* </Grid>
                </Grid>
            </Grid> */}
            </Paper>
        </div>
        )
    }
    }

    const styles = {
        footer: {
            zIndex: 3
        }
    }