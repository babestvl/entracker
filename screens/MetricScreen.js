import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import firebase from 'firebase';
import styles from '../styles';
import Form from '../components/Form';

class MetricScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Form metric={true} pWeight="Kilogram" pHeight="Meters"/>        
      </View>
    );
  }
}

export default MetricScreen;
