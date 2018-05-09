import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import firebase from 'firebase';
import styles from '../styles';
import Form from '../components/Form';

const ImperialScreen = () => (
  <View>
    <Form metric={false} pWeight="Pound" pHeight="Feet"/>
  </View>
);

export default ImperialScreen;
