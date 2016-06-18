/* @flow */
import {toggleLocateModal} from 'js/actions/mapActions';
import FlatButton from 'material-ui/FlatButton';
import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import appStore from 'js/appStore';
// Type Import
import type {ModalProps} from './Types';

export default class LocateModal extends Component {

  props: ModalProps;

  handleClose:Function = () => {
    appStore.dispatch(toggleLocateModal({ visible: false }));
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
        title='Locate'
        modal={false}
        open={visible}
        actions={dialogActions}
        onRequestClose={this.handleClose}
      />
    );
  }
}
