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
  ListView,
  View,
  AlertIOS
} from 'react-native';
import firebase from 'firebase';
import styles from './styles';

import StatusBar from './components/StatusBar';
import ActionButton from './components/ActionButton';
import ListItem from './components/ListItem';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBanu7jqFqEIf_K3X11zeCk_i1WvTy2NKQ",
  authDomain: "react-native-firebase-demo.firebaseapp.com",
  databaseURL: "https://react-native-firebase-demo.firebaseio.com",
  storageBucket: "react-native-firebase-demo.appspot.com",
  messagingSenderId: "886499322179"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

class ReactNativeFirebaseDemo extends Component {
  constructor(props) {
    super(props);
    this.itemsRef = firebaseApp.database().ref().child('items');

    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2}
      ),
    };
  }

  componentDidMount() {
    this.listenForItems(this.itemsRef);
  };

  _renderItem = (item) => {
    const onPress = () => {
      AlertIOS.prompt(
        'Complete',
        null,
        [
          {
            text: 'Complete',
            onPress: (text) => this.itemsRef.child(item._key).remove()
          },
          {
            text: 'Cancel',
            onPress: (text) => console.log('Cancel')
          },
        ],
        'default'
      );
    };

    return <ListItem item={item} onPress={onPress} />
  };

  listenForItems(itemsRef) {
    itemsRef.on('value', (snap) => {
      // get children as an array
      var items = [];
      snap.forEach((child) => {
        items.push({
          title: child.val().title,
          _key: child.key
        });
      });

      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(items)
      })
    });
  }

  _addItem() {
    AlertIOS.prompt(
      'Add new item',
      null,
      [
        {
          text: 'Add',
          onPress: (text) => {
            this.itemsRef.push({title: text});
          }
        },
        {
          text: 'Cancel',
          onPress: (text) => console.log('Cancel')
        }
      ],
      'plain-text'
    )
  }

  render(){
    return (
      <View style={styles.container}>
        <StatusBar title="Grocery App" />
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderItem.bind(this)}
          style={styles.listview}></ListView>
        <ActionButton title="Add" onPress={this._addItem.bind(this)}></ActionButton>
      </View>
    );
  }
}

AppRegistry.registerComponent('ReactNativeFirebaseDemo', () => ReactNativeFirebaseDemo);
