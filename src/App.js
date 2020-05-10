import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default class App extends Component { 
  
  state = {title: ''}

  render()
  {
    return (
        <Container >
          <Box my={4}>
            <Typography variant="h5" component="h5" gutterBottom align="center">
              Timetracker test
            </Typography>
            <Button variant="contained" color="primary">Hello World</Button>
            <Copyright/>


          </Box>

        </Container>
    );
  }
}
