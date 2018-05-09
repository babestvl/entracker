import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from 'react-native-elements';
import firebase from 'firebase';
import styles from '../styles';

export const mainHeader = () => (
  <View style={styles.menuContainer}>
    <Header 
      outerContainerStyles={styles.topMenu}
      centerComponent={{ 
        text: 'MY TITLE', 
        style: { color: '#fff', fontSize: 18 } 
      }}
      rightComponent={firebase.auth().currentUser ? Right : null}
    />
  </View>
)

const Right = {
  icon: 'input',
  color: '#fff', 
  onPress: () => firebase.auth().signOut(),
  underlayColor: '#2a324b',
}

export default mainHeader;