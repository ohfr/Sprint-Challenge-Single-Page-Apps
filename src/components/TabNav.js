import React, { useState } from "react";
// import { Tab, Menu, Icon } from "semantic-ui-react";
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import MapIcon from '@material-ui/icons/Map';
import { NavLink } from "react-router-dom";

const useStyles = makeStyles({
    root: {
      flexGrow: 1,
      display: 'flex',
      flexFlow: 'row wrap',
      justifyContent: 'space-evenly',
      width: '100%'
    },
  });



// TODO: Add missing menu/tabs/nav below

// Review Semantic UI Component options for nav-like UI:
// https://react.semantic-ui.com/collections/menu/
// https://react.semantic-ui.com/modules/tab/
// https://react.semantic-ui.com/elements/button/
// https://react.semantic-ui.com/collections/breadcrumb/

export default function TabNav() {
    const classes=useStyles();
    return (
        // <nav>
        //     <NavLink to="/">Home Page</NavLink>
        //     <NavLink to="/characters">Characters</NavLink>
        //     <NavLink to="/locations">Locations</NavLink>
        //     <NavLink to="/episodes">Episodes</NavLink>
        // </nav>
        <Paper square className={classes.root}>
            <Tabs>
                <NavLink to="/"><Tab label="Home Page"></Tab></NavLink>
                <NavLink to="/characters"><Tab label="Characters" /></NavLink>
                <NavLink to="/locations"><Tab label="Locations" /></NavLink>
                <NavLink to="/episodes"><Tab label="Episodes" /></NavLink>
            </Tabs>
      </Paper>
    )
};
