import React from 'react';
import { Paper, List, ListItem, ListItemIcon, ListItemText, ListItemSecondaryAction, Switch, Grid, ListSubheader } from '@material-ui/core';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import NotificationsIcon from '@material-ui/icons/Notifications';

const Settings = (props) => {
    const newSettings = { ...props.settings };

    const HandleDarkModeToggle = (event, value) => {
        newSettings.darkMode = value;
        props.onSettingsChanged(newSettings);
    }

    const HandleNotificationToggle = (event, value) => {
        newSettings.notificationsEnabled = value;
        props.onSettingsChanged(newSettings);
    }

    return (
        <Grid container>
            <Grid item xs={false} sm={3} md={4} />
            <Grid item xs={12} sm={6} md={4}>
                <Paper>
                    <List>
                        <ListSubheader>Settings</ListSubheader>
                        <ListItem>
                            <ListItemIcon>
                                <Brightness4Icon />
                            </ListItemIcon>
                            <ListItemText id="switch-list-label-dark" primary="Dark Mode" />
                            <ListItemSecondaryAction>
                                <Switch
                                    edge="end"
                                    onChange={HandleDarkModeToggle}
                                    checked={newSettings.darkMode}
                                    inputProps={{ 'aria-labelledby': 'switch-list-label-dark' }}
                                />
                            </ListItemSecondaryAction>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <NotificationsIcon />
                            </ListItemIcon>
                            <ListItemText id="switch-list-label-notification" primary="Benachrichtigungen aktivieren" />
                            <ListItemSecondaryAction>
                                <Switch
                                    edge="end"
                                    onChange={HandleNotificationToggle}
                                    checked={newSettings.notificationsEnabled}
                                    inputProps={{ 'aria-labelledby': 'switch-list-label-notification' }}
                                />
                            </ListItemSecondaryAction>
                        </ListItem>
                    </List>
                </Paper>
            </Grid>
            <Grid item xs={false} sm={3} md={4} />
        </Grid>
    );
}

export default Settings;

