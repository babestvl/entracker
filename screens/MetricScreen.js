import React from 'react';
import { Text, View, Button } from 'react-native';
import firebase from 'firebase';
import styles from '../styles';
import Form from '../components/Form';

const MetricScreen = () => (
  <View>
    <Form metric={true} pWeight="Kilogram" pHeight="Meters"/>        
  </View>
); 

export default MetricScreen;
