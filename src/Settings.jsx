import React from 'react';
import { Paper, List, ListItem, ListItemIcon, ListItemText, ListItemSecondaryAction, Switch, Grid, ListSubheader } from '@material-ui/core';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useEffect } from 'react';


function checkNotificationPromise() {
    try {
        Notification.requestPermission().then();
    } catch (e) {
        return false;
    }

    return true;
}

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

    useEffect(() => {
        if (newSettings.notificationsEnabled) {

            function handlePermission(permission) {
                if (!('permission' in Notification)) {
                    Notification.permission = permission;
                }

                if (Notification.permission === 'denied' || Notification.permission === 'default') {
                    newSettings.notificationsEnabled = false;
                    props.onSettingsChanged(newSettings);
                }
            }

            if (!"Notification" in window) {
                console.log("Browser does not support notifications");
            } else {
                if (checkNotificationPromise()) {
                    Notification.requestPermission()
                        .then((permission) => {
                            handlePermission(permission);
                        })
                } else {
                    Notification.requestPermission(function (permission) {
                        handlePermission(permission);
                    })
                }
            }
        }
    })

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

