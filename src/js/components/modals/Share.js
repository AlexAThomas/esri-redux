/* @flow */
import {toggleShareModal} from 'js/actions/mapActions';
import FlatButton from 'material-ui/FlatButton';
import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import appStore from 'js/appStore';
// Type Import
import type {ModalProps} from './Types';

export default class ShareModal extends Component {

  props: ModalProps;

  handleClose:Function = () => {
    appStore.dispatch(toggleShareModal({ visible: false }));
  };

  render () {
    const {visible} = this.props;
    const dialogActions = [
      <FlatButton
        label="Cancel"
        secondary={true}
        onTouchTap={this.handleClose}
      />
    ];

    return (
      <Dialog
        title='Share'
        modal={false}
        open={visible}
        actions={dialogActions}
        onRequestClose={this.handleClose}
      >
        <h3>Share Something</h3>
      </Dialog>
    );
  }
}
