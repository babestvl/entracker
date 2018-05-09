import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import DataScreen from './DataScreen';
import DetailsScreen from './DetailsScreen';
import styles from '../styles';

const StackScreen = () => (
  <View style={styles.stackContainer}>
    <Screens />
  </View>
)

const Screens = StackNavigator({
  Data: { screen: DataScreen },
  Details: { screen: DetailsScreen }
},
{
  initialRouteName: 'Data',
  swipeEnabled: true,
  headerMode: 'none',
  cardStyle: {
    backgroundColor: 'white'
  }
});

export default StackScreen;
