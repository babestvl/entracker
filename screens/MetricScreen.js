import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import firebase from 'firebase';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import styles from '../styles';
import ImperialScreen from './ImperialScreen';
import DataScreen from './DataScreen';

class MetricScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Metric Screen</Text>
        <Button 
          title="Logout" 
          onPress={() => firebase.auth().signOut()}
        />
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
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
})
export default MetricScreen;
