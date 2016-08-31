import {toggleShareModal, updateShareText } from 'js/actions/mapActions';
import Wrapper from 'js/components/modals/Wrapper';
import React, { Component } from 'react';
import appStore from 'js/appStore';

export default class ShareModal extends Component {

  close = () => {
    appStore.dispatch(toggleShareModal({ visible: false }));
  };

  updateShareText = () => {
    appStore.dispatch(updateShareText({
      text: 'Some New String'
    }));
  };

  render () {
    const {visible, text} = this.props;

    return (
      <Wrapper theme='share-modal' visible={visible} close={this.close}>
        <h3>{text}</h3>
        <button onClick={this.updateShareText}>Click Me</button>
      </Wrapper>
    );
  }
}
