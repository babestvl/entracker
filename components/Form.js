import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { FormInput, Button } from 'react-native-elements';
import { Dropdown } from 'react-native-material-dropdown';
import styles from '../styles';

class Form extends Component {
  constructor(props) {
    super(props);
    this.metric = props.unit;
    this.pWeight = props.pWeight;
    this.pHeight = props.pHeight;
    this.state = {
      weight: '',
      height: '',
      factor: 0
    }
  }
  render() {
    const data = [
      {
        label: 'Exercise 0 times/week',
        value: 1.2
      },
      {
        label: 'Exercise 1-3 times/week',
        value: 1.375
      },
      {
        label: 'Exercise 3-5 times/week',
        value: 1.55
      },
      {
        label: 'Exercise 6-7 times/week',
        value: 1.725
      },
      {
        label: 'Hard exercise everyday',
        value: 1.9
      }
    ]
    return (
      <View>
        <Text style={styles.header2}>Add new information</Text>
        <View style={{marginBottom: 10}}>
          <Text style={styles.labelForm}>Input your weight</Text>
          <FormInput 
            value={this.state.weight} 
            onChangeText={weight => this.setState({weight})}
            placeholder={this.pWeight}
          />
        </View>
        <View style={{marginBottom: 10}}>
          <Text style={styles.labelForm}>Input your height</Text>
          <FormInput 
            value={this.state.height} 
            onChangeText={height => this.setState({height})}
            placeholder={this.pHeight}
          />
        </View>
        <View style={{marginBottom: 20}}>
          <Text style={styles.labelForm}>Select your activity factor</Text>
          <View style={{alignItems: 'center'}}>
            <Dropdown 
              label="Activity Factor"
              data={data}
              containerStyle={{width: Dimensions.get('window').width - 40, height: 80}}
              onChangeText={(value) => this.setState({factor: value})}
            />
          </View>
        </View> 
      </View>
    );
  }
}

export default Form;
