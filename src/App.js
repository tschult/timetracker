import React, { Component } from 'react';
import { Button, Grid, Typography, Paper, Container, ThemeProvider, Switch } from '@material-ui/core';
import Header from './Header';
import { createMuiTheme } from '@material-ui/core/styles';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      darkMode: false
    }
  }

  render() {
    const theme = createMuiTheme({
      palette: {
        type: this.state.darkMode ? 'dark' : 'light',
        primary: {
          main: '#1b5e20'
        },
        secondary: {
          main: '#7cb342',
        }
      }
    });
    return (
      <ThemeProvider theme={theme}>
        <Paper square style={{ height: "100vh" }}>
          <Grid container direction="column">
            <Grid item>
              <Header />
            </Grid>
            <Grid item>
              <Container>

                <Typography variant="h5" component="h5" gutterBottom align="center">
                  Timetracker test
                </Typography>
                <Button variant="outlined" color="primary" fullWidth>Hello World</Button>
                <Switch checked={this.state.darkMode} onChange={() => this.setState({ darkMode: !this.state.darkMode })} />

              </Container>
            </Grid>
          </Grid>
        </Paper>
      </ThemeProvider>
    );
  }
}
