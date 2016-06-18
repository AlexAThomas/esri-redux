/* @flow */
import {toggleShareModal, toggleLocateModal} from 'js/actions/mapActions';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import MyLocation from 'material-ui/svg-icons/maps/my-location';
import Remove from 'material-ui/svg-icons/content/remove';
import Share from 'material-ui/svg-icons/social/share';
import Add from 'material-ui/svg-icons/content/add';
import React, {Component} from 'react';
import appStore from 'js/appStore';

const animationOptions = { duration: 300 };
const styles = {
  button: {
    margin: '0.25em'
  },
  share: {
    height: 20,
    width: 20
  }
};

type ControlsProps = {
  view: EsriView
};

export default class Controls extends Component {
  displayName: 'Controls';
  props: ControlsProps;

  zoomIn:Function = () => {
    const {view} = this.props;
    if (view) {
      view.goTo({ zoom: view.zoom + 1 }, animationOptions);
    }
  };

  zoomOut:Function = () => {
    const {view} = this.props;
    if (view) {
      view.goTo({ zoom: view.zoom - 1 }, animationOptions);
    }
  };

  locate:Function = () => {
    appStore.dispatch(toggleLocateModal({ visible: true }));
  };

  share:Function = () => {
    appStore.dispatch(toggleShareModal({ visible: true }));
  };

  render () {
    return (
      <div className='map-controls'>
        <FloatingActionButton mini={true} style={styles.button} onClick={this.zoomIn}>
          <Add />
        </FloatingActionButton>
        <FloatingActionButton mini={true} style={styles.button} onClick={this.zoomOut}>
          <Remove />
        </FloatingActionButton>
        <FloatingActionButton mini={true} secondary={true} style={styles.button} onClick={this.share}>
          <Share style={styles.share} />
        </FloatingActionButton>
        <FloatingActionButton mini={true} secondary={true} style={styles.button} onClick={this.locate}>
          <MyLocation />
        </FloatingActionButton>
      </div>
    );
  }
}
