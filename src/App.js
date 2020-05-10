import React, { Component } from 'react';
import { Button, Grid, Typography, Box, Paper, Container} from '@material-ui/core';
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
        <Container>
          
            <Typography variant="h5" component="h5" gutterBottom align="center">
              Timetracker test
            </Typography>
            <Button variant="outlined" color="primary" fullWidth>Hello World</Button>

          </Container>
          
        </Grid>
        <Grid item>
          <BotNav/>
        </Grid>
      </Grid>
    );
  }
}
