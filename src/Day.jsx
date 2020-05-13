import React, { useState } from 'react';
import { Paper, Typography, List, ListItem, ListItemText, ListItemIcon, ListItemSecondaryAction, IconButton, Grid, Fab, Zoom, ListSubheader } from '@material-ui/core';
import WorkOutlineOutlinedIcon from '@material-ui/icons/WorkOutlineOutlined';
import TimerOutlinedIcon from '@material-ui/icons/TimerOutlined';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import StopIcon from '@material-ui/icons/Stop';
import { makeStyles, useTheme } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    
  },
  paper: {
    paddingBottom: '120px'
  },
  fab: {
    position: 'fixed',
    bottom: theme.spacing(9),
    right: theme.spacing(2)
  }
}));

const Day = () => {

  const classes = useStyles();
  const [items, setItems] = useState([]);
  const [isRunning, setIsRunning] = useState(false);

  const theme = useTheme();

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };

  const startTask = () => {
    setIsRunning(true);
    const date = new Date();
    //setItems([{startDate: date}].concat(items));
    setItems([{startDate: date}, ...items]);
  }

  const stopCurrentTask = () => {
    setIsRunning(false);
    const date = new Date();
    const newItems = items.map((item, idx) => {
      if (idx === 0){
        return {startDate: item.startDate, stopDate: date, durationMs: date - item.startDate};
      }else{
        return item;
      }
    });
    setItems(newItems);
  }


  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={0} sm={3} md={4} />
        <Grid item xs={12} sm={6} md={4}>
          <Paper square className={classes.paper}>

            <List >
              <ListSubheader>{new Date().toDateString()}</ListSubheader>
              {items.map((item, idx) => (
                
                <ListItem key={`item-${item.startDate}`}>
                  <ListItemIcon>
                    <WorkOutlineOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary={`started ${item.startDate.toLocaleTimeString()}`} />
                  <ListItemSecondaryAction>
                    <Typography>{item.stopDate ? `${item.durationMs/1000} s` : `running`}</Typography>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
          </Paper>

        </Grid>
        <Grid item xs={0} sm={3} md={4} />
      </Grid>

      <Zoom in={!isRunning} timeout={transitionDuration} unmountOnExit>
        <Fab color="primary" aria-label="start" className={classes.fab} onClick={startTask} >
          <PlayArrowIcon />
        </Fab>
      </Zoom>

      <Zoom in={isRunning} timeout={transitionDuration} unmountOnExit>
        <Fab color="warning" aria-label="stop" className={classes.fab} onClick={stopCurrentTask} >
          <StopIcon />
        </Fab>
      </Zoom>

    </div>
  )
}

export default Day;