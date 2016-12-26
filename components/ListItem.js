import React from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import styles, { constants } from '../styles';

const ListItem = ({item, onPress}) => (
  <TouchableHighlight onPress={onPress}>
    <View style={styles.li}>
      <Text style={styles.liText}>{item.title}</Text>
    </View>
  </TouchableHighlight>
)

export default ListItem;
