/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Login from './App/containers/Login/Index';

export default class GoupApp extends Component {
  render() {
    return (
      <Login />
    );
  }
}

AppRegistry.registerComponent('GoupApp', () => GoupApp);