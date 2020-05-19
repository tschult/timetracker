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

/* const ActiveNotification = (props) => {

  const [ignore, setIgnore] = useState(!props.settings.notificationsEnabled);
  const [title, setTitle] = useState('Test notification');

  console.log('ignore: ' + ignore);

  if (ignore) {
    return null;
  }


  const handlePermissionGranted = () => {
    console.log('Permission Granted');
    setIgnore(false);
  }
  const handlePermissionDenied = () => {
    console.log('Permission Denied');
    setIgnore(true);
  }
  const handleNotSupported = () => {
    console.log('Web Notification not Supported');
    setIgnore(true);
  }
  const handleNotificationOnClick = (e, tag) => {
    console.log(e, 'Notification clicked tag:' + tag);
  }
  const handleNotificationOnError = (e, tag) => {
    console.log(e, 'Notification error tag:' + tag);
  }
  const handleNotificationOnClose = (e, tag) => {
    console.log(e, 'Notification closed tag:' + tag);
  }
  const handleNotificationOnShow = (e, tag) => {
    console.log(e, 'Notification shown tag:' + tag);
  }

  return (
    <Notification
      ignore={ignore}
      notSupported={handleNotSupported}
      onPermissionGranted={handlePermissionGranted}
      onPermissionDenied={handlePermissionDenied}
      onShow={handleNotificationOnShow}
      onClick={handleNotificationOnClick}
      onClose={handleNotificationOnClose}
      onError={handleNotificationOnError}
      timeout={0}
      title={title}
      options={props.options}
      swRegistration={props.swRegistration}
    />);

} */


function App(props) {

  const [settings, setSettings] = useStateWithLocalStorage('settings', { darkMode: false, notificationsEnabled: false });

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

  useEffect(() => {
    if (!settings.notificationsEnabled){
      return;
    }
    var n;
    const options = {
      tag: 'ttRunning',
      body: 'Body',
      icon: 'logo192.png',
      lang: 'de',
      dir: 'ltr',
      silent: true,
      
    }
    if (props.swRegistration) {
      options.actions = [{ title: 'STOP', action: 'stop' }];
      options.requireInteraction = true;
    }
    const onAppFocus = (e) => {
      if (n) {
        n.close();
      }

    };
    const onAppBlur = (e) => {

      if('serviceWorker' in navigator)
      {
        console.log("using serviceWorker: " + navigator.serviceWorker);
        if (navigator.serviceWorker.controller){
          navigator.serviceWorker.ready.then((reg) => {
            console.log('A service worker is active: ', reg.active)
            reg.showNotification('huhu mit sw', options);
          })
          return;

        }
        
        
      }
      n = new Notification('huhu', options);

      
      /* if (props.swRegistration){
        props.swRegistration.showNotification('huhu mit sw', options);

      } else{
        
      } */
      
    };

    window.addEventListener('blur', onAppBlur);
    window.addEventListener('focus', onAppFocus);

    return () => {
      window.removeEventListener('blur', onAppBlur);
      window.removeEventListener('focus', onAppFocus);
    }
  })

  

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

        {/* <ActiveNotification
          settings={settings}
          options={options}
          swRegistration={props.swRegistration}

        /> */}

      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;