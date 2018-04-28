import React from 'react';
import { Text, View, Alert } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import firebase from 'firebase';
import styles from '../styles';

class RegisterScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      gender: ""
    }
  }

  register = () => {
    const { email, password, confirmPassword, gender } = this.state;
    if (password === confirmPassword && gender !== "" ) {
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        Alert.alert(
          'Registration Successful',
          [
            {text: 'OK'},
          ],
          { cancelable: false }
        )
      })
      .then(() => {
        this.props.switchScreen("home")
      })
      .catch(error => {
        Alert.alert(
          'Registration Error',
          error.message,
          [
            {text: 'OK'},
          ],
          { cancelable: false }
        )
        return null;
      });
    } else {
      Alert.alert(
        'Registration Error',
        'Please input your information',
        [
          {text: 'OK'},
        ],
        { cancelable: false }
      )
    }
  }

  render() {
    const radio_props = [
      {label: 'Male   ', value: 'male'},
      {label: 'Female', value: 'Female'}
    ]
    return (
      <View style={styles.container}>
        <Text style={styles.header1}>Register Page</Text>
        <View style={{marginBottom: 10}}>
          <FormInput
            placeholder="Email"
            value={this.state.email}
            onChangeText={(email) => this.setState({email})}
          />
        </View>
        <View style={{marginBottom: 10}}>
          <FormInput
            placeholder="Password"
            value={this.state.password}
            onChangeText={(password) => this.setState({password})}
            secureTextEntry={true}
          />
        </View>
        <View style={{marginBottom: 10}}>
          <FormInput
            placeholder="Confirm Password"
            value={this.state.confirmPassword}
            onChangeText={(confirmPassword) => this.setState({confirmPassword})}
            secureTextEntry={true}
          />
        </View>
        <View style={{marginBottom: 20, marginLeft: 20}}>
          <RadioForm 
            radio_props={radio_props}
            initial={-1}
            formHorizontal={true}
            animation={true}
            onPress={gender => this.setState({gender})}
          />
        </View>
        <View style={styles.buttonStyle}>
          <Button 
            title="Register" 
            onPress={() => this.register()}
          />
        </View> 
        
        <View style={styles.buttonStyle}>
          <Button
            title="Click to Login"
            onPress={() => this.props.switchScreen("login")}
          />
        </View>
      </View>
    );
  }
}

export default RegisterScreen;