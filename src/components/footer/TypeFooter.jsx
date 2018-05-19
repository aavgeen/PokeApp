import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Paper, Tabs } from 'material-ui';
import { Tab } from 'material-ui/Tabs';
import {TurnedInNot, FlightTakeoff, BugReport,
         ViewModule, GroupWork, AcUnit,
        Face, EventSeat, Label, HotTub,
        Language, TurnedIn, ViewHeadline,
        Gesture, Accessibility, SelectAll} from '@material-ui/icons';
import FavoriteIcon from '@material-ui/icons/Favorite';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';

export default class TypeFooter extends Component {
    constructor(props){
        super(props);
        this.state= {
            value: 0
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event, value){
        this.setState({
            value
        });
        this.props.onChangeType(value+1); //because in the API, the type starts from 1.
    }
    render() {
        const { value } = this.state;
        return (
        <div style={styles.footer}>
            {/* <Typography variant="title" color="secondary">Type</Typography> */}
            <Paper elevation={6}>
             {/* <Grid container spacing={8} justify="center">
                <Grid item xs={12} sm={12}>
                <Grid justify="center" spacing={Number(2)}> */}
                <Tabs
                    value={value}
                    onChange={this.handleChange}
                    scrollable
                    scrollButtons="on"
                    indicatorColor="secondary"
                    textColor="primary"
                    >
                    <Tab label="Normal" icon={<FavoriteIcon />} />
                    <Tab label="Fighting" icon={<TurnedInNot />} />
                    <Tab label="Flyning" icon={<FlightTakeoff />} />
                    <Tab label="Poison" icon={<HelpIcon />} />
                    <Tab label="Ground" icon={<ViewModule />} />
                    <Tab label="Rock" icon={<GroupWork />} />
                    <Tab label="Bug" icon={<BugReport />} />
                    <Tab label="Ghost" icon={<TurnedIn />} />
                    <Tab label="Steel" icon={<Language />} />
                    <Tab label="Fire" icon={<HotTub />} />
                    <Tab label="Water" icon={<SelectAll />} />
                    <Tab label="Grass" icon={<ViewHeadline />} />
                    <Tab label="Electric" icon={<Gesture />} />
                    <Tab label="Psychic" icon={<Accessibility />} />
                    <Tab label="Ice" icon={<AcUnit />} />
                    <Tab label="Dragon" icon={<EventSeat />} />
                    <Tab label="Dark" icon={<Label />} />
                    <Tab label="Fairy" icon={<Face />} />
                {/* </Grid>
                </Grid>
            </Grid>*/} 
            </Tabs>
            </Paper>
        </div>
        )
    }
    }

    const styles = {
        footer: {
            zIndex: 3
        },
        typeLabel: {
            justifyContent: 'center',
            alignContent: 'center',
            height: 40
        }
    }