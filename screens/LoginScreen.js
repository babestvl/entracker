import React, { Component } from 'react';
import { Text, View, Alert } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import firebase from 'firebase';
import styles from '../styles';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header1}>Login Page</Text>
        <View>
          <View style={{marginBottom: 10}}>
            <FormInput 
              value={this.state.email} 
              onChangeText={email => this.setState({email})}
              placeholder="Email"
            />
          </View>
          <View style={{marginBottom: 20}}>
            <FormInput 
              value={this.state.password} 
              onChangeText={password => this.setState({password})}
              secureTextEntry={true}
              placeholder="Password"
            />   
          </View> 
        </View>

        <View style={styles.buttonStyle}>
          <Button
            title="Login"
            onPress={() => {
              firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
              .catch((error) => {
                Alert.alert(
                  'Login Error',
                  error.message,
                  [
                    {text: 'OK'},
                  ],
                  { cancelable: false }
                )
                return null;
              });
            }}
          />
        </View>
        <Button
          title="Click to Register"
          onPress={() => this.props.switchScreen("register")}
          style={styles.buttonStyle}
        />
      </View>
    );
  }
}

export default LoginScreen;