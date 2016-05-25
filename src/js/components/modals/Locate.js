/* @flow */
import {toggleLocateModal} from 'js/actions/mapActions';
import Wrapper from 'js/components/modals/Wrapper';
import React, { Component } from 'react';
import appStore from 'js/appStore';

export default class LocateModal extends Component {

  props: ModalProps;

  close:Function = () => {
    appStore.dispatch(toggleLocateModal({ visible: false }));
  };

  render () {
    const {active} = this.props;

    return (
      <Wrapper theme='locate-modal' active={active} close={this.close}>
        <h3>Locate Something</h3>
      </Wrapper>
    );
  }
}