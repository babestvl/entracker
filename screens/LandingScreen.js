import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import styles from '../styles';

class LandingScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>Landing Page</Text>
        <Button
          title="Click to Register"
          onPress={() => this.props.switchScreen("register")}
        />
      </View>
    );
  }
}

export default LandingScreen;