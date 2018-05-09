import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import firebase from 'firebase';
import { BarChart, LineChart, Grid, AreaChart } from 'react-native-svg-charts'
import { storage, personal } from '../storage'; 
import * as shape from 'd3-shape'

import styles from '../styles';

class DetailsScreen extends Component {
  constructor(props) {
    super(props);
    this.index = props.navigation.state.params.index;
    this.date = props.navigation.state.params.date;
    this.state = {
      data: [],
      calculatedData: [],
      loading: true,
    }
    console.ignoredYellowBox = [
      'setting a timer'
    ];
  }

  componentDidMount() {
    this.state.data = storage.filter((item, i) => {
      return i <= this.index;
    })
    this.calculate();
    this.setState({loading: false});
  }

  calculateMetric = (item) => {
    const { calculatedData } = this.state;
    if (personal.gender === 'male') {
      calculatedData.push((((10*item.weight)+(6.25*item.height)-(5*item.age)+5)*(item.factor)));
    } else {
      calculatedData.push((((10*item.weight)+(6.25*item.height)-(5*item.age)-161)*(item.factor)));
    }
  }

  calculateImperial = (item) => {
    const { calculatedData } = this.state;
    if (personal.gender === 'male') {
      calculatedData.push((((4.536*item.weight)+(15.88*item.height)-(5*item.age)+5)*(item.factor)));
    } else {
      calculatedData.push((((4.536*item.weight)+(15.88*item.height)-(5*item.age)-161)*(item.factor)));
    }
  }

  calculate = () => {
    const { data } = this.state;
    data.map((item) => {
      if (item.unit === 'Metric') {
        this.calculateMetric(item);
      } else {
        this.calculateImperial(item);
      }
    });
  }

  render() {
    if (this.state.loading) return null;
    return (
      <View>
        <Text style={styles.header4}>Graph and Result</Text>
        <Text style={styles.subHeader}>{this.date}</Text>
        <View style={{marginLeft: 10, marginRight: 10}}>
          <LineChart
                style={{ height: 200 }}
                data={ this.state.calculatedData }
                svg={{ stroke: 'rgb(134, 65, 244)' }}
                contentInset={{ top: 20, bottom: 20 }}
            >
                <Grid/>
            </LineChart>
            <BarChart
                style={{ height: 200 }}
                data={ this.state.calculatedData }
                svg={{ fill: 'rgba(134, 65, 244)' }}
                contentInset={{ top: 30, bottom: 30 }}
            >
                <Grid/>
            </BarChart>
        </View>
        <View style={{marginTop: 20, marginLeft: 10}}>
          <Text>You need {(this.state.calculatedData[this.index]).toFixed(2)} Calories/day to maintain your weight.</Text>
          <Text>You need {(this.state.calculatedData[this.index] + 500).toFixed(2)} Calories/day to gain 1 lb per week.</Text>
          <Text>You need {(this.state.calculatedData[this.index] + 1000).toFixed(2)} Calories/day to gain 2 lb per week.</Text>
        </View>
      </View>
    );
  }
}


export default DetailsScreen;
