import React, { useState, useEffect } from 'react';
import { ThemeProvider, AppBar, CssBaseline } from '@material-ui/core';
import Header from './Header';
import { createMuiTheme } from '@material-ui/core/styles';
import Footer from './Footer';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Day from './Day';
import Settings from './Settings';

const useStateWithLocalStorage = (localStorageKey, fallbackValue) => {

  const [value, setValue] = useState(() => {
    try {
      const item = localStorage.getItem(localStorageKey);
      return item ? JSON.parse(item) : fallbackValue;
    } catch (error) {
      console.log(error);
      return fallbackValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(value));
  }, [localStorageKey, value]);

  return [value, setValue];
}


function App(props) {

  const [settings, setSettings] = useStateWithLocalStorage('settings', { darkMode: false });

  const theme = createMuiTheme({
    palette: {
      type: settings.darkMode ? 'dark' : 'light',
      primary: {
        main: '#388e3c',
      },
      secondary: {
        main: '#aeea00',
      },
    }
  });

  const handleSettingsChanged = (newSettings) => {
    setSettings(newSettings);
  };

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme} >
        <CssBaseline />

        <Header />

        <Switch>
          <Route exact path='/' render={() => <Day />} />
          <Route path='/settings' render={
            (props) => <Settings {...props} settings={settings} onSettingsChanged={handleSettingsChanged} />}
          />
        </Switch>


        <AppBar position="fixed" style={{ top: 'auto', bottom: 0 }}>

          <Footer />

        </AppBar>

      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;