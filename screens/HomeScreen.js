import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import firebase from 'firebase';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import styles from '../styles';
import MetricScreen from './MetricScreen';
import ImperialScreen from './ImperialScreen';
import DataScreen from './DataScreen';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Tabs /> 
      </View>
    );
  }
}

const Tabs = TabNavigator({
  Metric: { screen: MetricScreen },
  Imperial: { screen: ImperialScreen },
  Data: { screen: DataScreen }
},
{
  tabBarPosition: 'bottom',
  swipeEnabled: false,
});

export default HomeScreen;
