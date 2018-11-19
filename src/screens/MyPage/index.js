import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

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

const mapStateToProps = ({ status }) => ({
  isLoading: status.loading || false,
  successMessage: status.success || '',
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyPage);
