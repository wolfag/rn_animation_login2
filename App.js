/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import RootStack from './src/RootStack';

class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

export default App;
