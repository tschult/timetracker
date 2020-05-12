import React, { useState } from 'react';
import { Typography, Paper, ThemeProvider, Switch, AppBar, List, ListItem, ListItemText, CssBaseline } from '@material-ui/core';
import Header from './Header';
import { createMuiTheme } from '@material-ui/core/styles';
import Footer from './Footer';




function App(props) {

  const [darkMode, setDarkMode] = useState(false);
  const [route, setRoute] = useState('/');

  const handleNavigationChange = (newValue) => {
    setRoute(newValue);
  };

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
      primary: {
        main: '#1b5e20'
      },
      secondary: {
        main: '#7cb342',
      }
    }
  });

  return (
    <ThemeProvider theme={theme} >
      <CssBaseline />

      <Header />

      <Paper square style={{ paddingBottom: 50 }}>

        <Typography variant="h5" gutterBottom align="center">
          Heute
          </Typography>
        <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />

        <List >
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((sectionId) => (
            <ListItem key={`item-${sectionId}`}>
              <ListItemText primary={`Item ${sectionId}`} />
            </ListItem>
          ))}
        </List>


      </Paper>
      <AppBar position="fixed" style={{ top: 'auto', bottom: 0 }}>

        <Footer value={route} onChange={handleNavigationChange} />

      </AppBar>

    </ThemeProvider>
  );
}

export default App;