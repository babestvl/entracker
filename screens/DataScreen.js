import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import firebase from 'firebase';
import { TapNavigator, TabBarBottom } from 'react-navigation';
import styles from '../styles';

class DataScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Data Screen</Text>
        <Button 
          title="Logout" 
          onPress={() => firebase.auth().signOut()}
        />
      </View>
    );
  }
}

export default DataScreen;

