import {loadCSS} from 'js/utils/loaders';
import App from 'js/components/App';
import Dom from 'react-dom';
import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from 'js/theme';

// Needed for onTouchTap, Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

// Lazy load css
loadCSS('css/app.css');
loadCSS('//js.arcgis.com/4.0/esri/css/main.css');

// Apply any default configurations here
const Component = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(theme)}>
    <App />
  </MuiThemeProvider>
);

// Initialize the app
Dom.render(
  <Component />,
  document.getElementById('react-mount')
);
