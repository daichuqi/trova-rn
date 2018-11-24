import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';

class MyPage extends Component {
  static navigationOptions = {
    title: 'My page',
  };

  render() {
    return (
      <View>
        <Button onPress={Actions.login}>
          <Text>hello</Text>
        </Button>
      </View>
    );
  }
}

export default MyPage;
