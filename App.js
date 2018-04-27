import React from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';
import styles from './styles';
import config from './FirebaseConfig';
import LandingScreen from './screens/LandingScreen';
import RegisterScreen from './screens/RegisterScreen';

class App extends React.Component {
  constructor(props) {
    super(props);
    firebase.initializeApp(config);
    this.state = {
      currentScreen: "landing",
    }
  }

  switchScreen = screen => {
    this.setState({currentScreen: screen})
  }

  renderScreen = () => {
    if (this.state.currentScreen === "landing") {
      return <LandingScreen switchScreen={this.switchScreen} />
    } else if (this.state.currentScreen === "register") {
      return <RegisterScreen switchScreen={this.switchScreen} /> 
    }
  }

  render() {
    return (
      this.renderScreen()
    );
  }
}

export default App;