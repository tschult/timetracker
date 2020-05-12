import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Slide, useScrollTrigger } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

function HideOnScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger({});

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

const Header = (props) => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <HideOnScroll {...props}>
                <AppBar>
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            Zeiterfassung
                        </Typography>
                        <IconButton color="inherit" aria-label="Einstellungen">
                            <AddIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <Toolbar />
        </React.Fragment>
    )
};

export default Header;