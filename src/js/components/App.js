/* @flow */
import MapView from 'js/components/MapView';
import AppBar from 'material-ui/AppBar';
import React, {Component} from 'react';
import {text} from 'js/config';

export default class App extends Component {

  displayName: 'App';
  props: any;

  render () {
    return (
      <div className='root'>
        <AppBar title={text.title} showMenuIconButton={false} />
        <MapView />
      </div>
    );
  }

}
