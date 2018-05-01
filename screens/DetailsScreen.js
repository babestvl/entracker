import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import firebase from 'firebase';
import styles from '../styles';

class DetailsScreen extends Component {
  constructor(props) {
    super(props);
    this.item = props.navigation.state.params.item;
  }

  render() {
    console.log(this.item)
    return (
      <View>
        <Text>Details</Text>
      </View>
    );
  }
}


export default DetailsScreen;
