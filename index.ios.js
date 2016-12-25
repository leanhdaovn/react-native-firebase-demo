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
import firebase from 'firebase';
import styles from './styles';

import StatusBar from './components/StatusBar';
import ActionButton from './components/ActionButton';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBanu7jqFqEIf_K3X11zeCk_i1WvTy2NKQ",
  authDomain: "react-native-firebase-demo.firebaseapp.com",
  databaseURL: "https://react-native-firebase-demo.firebaseio.com",
  storageBucket: "react-native-firebase-demo.appspot.com",
  messagingSenderId: "886499322179"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default class ReactNativeFirebaseDemo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar title="Grocery App" />
        <Text style={styles.welcome}>
          Welcome to React Native with some Firebase!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
        <ActionButton title="Next"></ActionButton>
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

AppRegistry.registerComponent('ReactNativeFirebaseDemo', () => ReactNativeFirebaseDemo);
