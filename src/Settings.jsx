import React, { useState } from 'react';
import { Typography, Container, Paper, List, ListItem, ListItemIcon, ListItemText, ListItemSecondaryAction, Switch, Grid } from '@material-ui/core';
import Brightness4Icon from '@material-ui/icons/Brightness4';

const Settings = (props) => {
    const newSettings = { ...props.settings };

    const HandleToggle = (event, value) => {
        newSettings.darkMode = value;
        props.onSettingsChanged(newSettings);
    }
    return (
        <Grid container>
            <Grid item xs={0} sm={3} md={4} />
            <Grid item xs={12} sm={6} md={4}>
                <Paper>
                    <Typography variant="h6" gutterBottom>Settings</Typography>
                    <List>
                        <ListItem>
                            <ListItemIcon>
                                <Brightness4Icon />
                            </ListItemIcon>
                            <ListItemText id="switch-list-label-dark" primary="Dark Mode" />
                            <ListItemSecondaryAction>
                                <Switch
                                    edge="end"
                                    onChange={HandleToggle}
                                    checked={newSettings.darkMode}
                                    inputProps={{ 'aria-labelledby': 'switch-list-label-wifi' }}
                                />
                            </ListItemSecondaryAction>
                        </ListItem>
                    </List>
                </Paper>
            </Grid>
            <Grid item xs={0} sm={3} md={4} />
        </Grid>
    );
}

export default Settings;

