import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
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
      <View style={styles.tabContainer}>
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
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'Metric') {
        iconName = `ios-information-circle${focused ? '' : '-outline'}`;
      } else if (routeName === 'Imperial') {
        iconName = `ios-options${focused ? '' : '-outline'}`;
      } else if (routeName === 'Data') {
        iconName = `ios-options${focused ? '' : '-outline'}`;
      }

      return <Ionicons name={iconName} size={25} color={tintColor} />;
    },
  }),
  swipeEnabled: false,
  tabBarOptions: {
    labelStyle: styles.tabBar,
    showIcon: true,
  }
});

export default HomeScreen;
