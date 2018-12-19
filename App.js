import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CodePush from 'react-native-code-push';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>ReactNativeCodePush</Text>
        <Text style={styles.instructions}>
          To get started, change your JavaScript code and push!
        </Text>
      </View>
    );
  }
}

App = CodePush(App);

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});
