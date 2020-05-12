import React from 'react';
import { Paper, Typography, List, ListItem, ListItemText, ListItemIcon, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import WorkOutlineOutlinedIcon from '@material-ui/icons/WorkOutlineOutlined';
import TimerOutlinedIcon from '@material-ui/icons/TimerOutlined';

const Day = () =>
{
    return (
        <Paper square style={{ paddingBottom: 50 }}>

        <Typography variant="h5" gutterBottom align="center">
          Heute
          </Typography>        

        <List >
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((sectionId) => (
            <ListItem key={`item-${sectionId}`}>
                <ListItemIcon>
                    <WorkOutlineOutlinedIcon/>
                </ListItemIcon>
              <ListItemText primary={`Item ${sectionId}`} />
              <ListItemSecondaryAction>
                  <IconButton edge="end">
                      <TimerOutlinedIcon/>
                  </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>


      </Paper>
    )
}

export default Day;