import React, { Component } from 'react';
import { Text, View } from 'react-native';

class MyPage extends Component {
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

export default MyPage;
