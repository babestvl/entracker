import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import firebase from 'firebase';
import styles from '../styles';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>Home Screen</Text>
        <Button 
          title="Logout" 
          onPress={() => firebase.auth().signOut()}
        />
      </View>
    );
  }
}

export default HomeScreen;
