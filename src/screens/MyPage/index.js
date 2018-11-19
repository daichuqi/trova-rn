import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class SettingsScreen extends Component {
  static navigationOptions = {
    title: 'My page',
  };

  render() {
    return (
      <View>
        <Text>hello</Text>
      </View>
    );
  }
}
