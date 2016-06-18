/* @flow */
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MapView from 'js/components/MapView';
import AppBar from 'material-ui/AppBar';
import React, {Component} from 'react';
import {text} from 'js/config';
import theme from 'js/theme';

export default class App extends Component {

  displayName: 'App';
  props: any;

  render () {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(theme)}>
        <div className='root'>
          <AppBar title={text.title} showMenuIconButton={false} />
          <MapView />
        </div>
      </MuiThemeProvider>
    );
  }

}
