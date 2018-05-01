import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import firebase from 'firebase';
import { storage, personal } from '../storage'; 
import styles from '../styles';

class DetailsScreen extends Component {
  constructor(props) {
    super(props);
    this.index= props.navigation.state.params.index;
    this.state = {
      data: [],
      calculatedData: [],
      loading: true,
    }
  }

  componentDidMount() {
    this.state.data = storage.filter((item, i) => {
      return i <= this.index 
    })
    this.calculate();
    this.setState({loading: false});
  }

  calculateMetric = (item) => {
    this.state.calculatedData.push()
  }

  calculateImperial = (item) => {

  }

  calculate = () => {
    const { data } = this.state;
    data.map((item) => {
      if (item.unit === 'Metric') {
        this.calculateMetric(item);
      } else {
        this.calculateImperial(item);
      }
    })
  }

  render() {
    if (this.state.loading) return null;
    return (
      <View>
        <Text style={styles.header2}>Graph and Result</Text>
        <Text></Text>
      </View>
    );
  }
}


export default DetailsScreen;
