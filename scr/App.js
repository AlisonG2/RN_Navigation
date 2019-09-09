/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';

import Orientation from 'react-native-orientation-locker';

import Routes from './routes';

export default class App extends Component {
  componentDidMount() {
    Orientation.lockToPortrait();
  }

  render() {
    return <Routes />;
  }
}
