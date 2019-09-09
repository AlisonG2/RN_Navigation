import React, {Component} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

import Orientation from 'react-native-orientation-locker';

// import { Container } from './styles';

export default class Orientacao extends Component {
  handleUnlockOrientation = () => {
    Orientation.unlockAllOrientations();
  };

  handleLockPortrait = () => {
    Orientation.lockToPortrait();
  };

  handleLockLandscape = () => {
    Orientation.lockToLandscape();
  };

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
          style={{padding: 5, borderWidth: 1, borderColor: '#333'}}
          onPress={this.handleUnlockOrientation}>
          <Text style={{fontSize: 25}}>{'Destravar'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{padding: 5, borderWidth: 1, borderColor: '#333'}}
          onPress={this.handleLockPortrait}>
          <Text style={{fontSize: 25}}>{'Retrato'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{padding: 5, borderWidth: 1, borderColor: '#333'}}
          onPress={this.handleLockLandscape}>
          <Text style={{fontSize: 25}}>{'Paisagem'}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
