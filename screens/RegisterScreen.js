import React from 'react';
import { Text, View, Button } from 'react-native';
import firebase from 'firebase';
import styles from '../styles';

class RegisterScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>Register Page</Text>
        <Button
          title="Click to Landing"
          onPress={() => this.props.switchScreen("landing")}
        />
      </View>
    );
  }
}

export default RegisterScreen;