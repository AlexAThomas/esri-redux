import injectTapEventPlugin from 'react-tap-event-plugin';
import {loadCSS} from 'js/utils/loaders';
import App from 'js/components/App';
import Dom from 'react-dom';
import React from 'react';

// Needed for onTouchTap, Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

// Lazy load css
loadCSS('css/app.css');
loadCSS('//js.arcgis.com/4.0/esri/css/main.css');

// Apply any default configurations here

// Initialize the app
Dom.render(
  <App />,
  document.getElementById('react-mount')
);
