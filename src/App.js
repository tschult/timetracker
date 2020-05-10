import React, { Component } from 'react';
import { Button, Grid, Typography, Box} from '@material-ui/core';
import Header from './Header';
import BotNav from './BotNav';

export default class App extends Component { 
  
  state = {title: ''}

  render()
  {
    return (
      <Grid container direction="column">
        <Grid item>
          <Header/>
        </Grid>
        <Grid item container>
          <Box my={4}>
            <Typography variant="h5" component="h5" gutterBottom align="center">
              Timetracker test
            </Typography>
            <Button variant="outlined" color="primary" fullWidth>Hello World</Button>


          </Box>
        </Grid>
        <Grid item>
          <BotNav/>
        </Grid>
      </Grid>
    );
  }
}
