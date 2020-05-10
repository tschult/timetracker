import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import RestoreIcon from '@material-ui/icons/Restore';
import TodayIcon from '@material-ui/icons/Today';
import SettingsIcon from '@material-ui/icons/Settings';

const useStyles = makeStyles(() => ({
    typographyStyles: {
        flex: 1
    }
}));

const Header = () => {
    const classes = useStyles();
    return <AppBar position="static">
        <Toolbar>
            <Typography className={classes.typographyStyles}>
                Zeiterfassung
            </Typography>
            <IconButton aria-label="Heute">
                <TodayIcon />
            </IconButton>
            <IconButton aria-label="Monat">
                <RestoreIcon />
            </IconButton>
            <IconButton aria-label="Einstellungen">
                <SettingsIcon />
            </IconButton>
        </Toolbar>
    </AppBar>
};

export default Header;