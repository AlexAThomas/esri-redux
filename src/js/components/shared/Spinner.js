import CircularProgress from 'material-ui/CircularProgress';
import React, {Component} from 'react';

const background = {
  position: 'absolute',
  display: 'none',
  height: '100%',
  width: '100%',
  left: 0,
  top: 0
};

type SpinnerProps = {
  active: bool
};

export default class Spinner extends Component {
  displayName: 'Spinner';
  props: SpinnerProps;

  render () {
    let backgroundStyle = Object.assign({}, background);
    backgroundStyle.display = this.props.active ? 'flex' : 'none';

    return (
      <div style={backgroundStyle}>
        <CircularProgress size={1.5} style={{margin: 'auto'}} />
      </div>
    );
  }
}
