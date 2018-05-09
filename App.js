import React from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';
import styles from './styles';
import config from './FirebaseConfig';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import Header from './components/Header';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      currentScreen: "home",
    }
    console.ignoredYellowBox = [
      'setting a timer'
    ];
  }

  componentDidMount() {
    firebase.initializeApp(config);
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({loading: false, currentScreen: "home"});
      } else {
        this.setState({loading: false, currentScreen: "login"});
      }
    })
  }

  switchScreen = screen => {
    this.setState({currentScreen: screen})
  }

  renderScreen = () => {
    if (this.state.currentScreen === "login") {
      return <LoginScreen switchScreen={this.switchScreen} />
    } else if (this.state.currentScreen === "register") {
      return <RegisterScreen switchScreen={this.switchScreen} /> 
    } else if (this.state.currentScreen === "home") {
      return <HomeScreen switchScreen={this.switchScreen} />
    }
  }

  render() {
    if (this.state.loading) return null;
    return(
      <View style={{flex: 1}}>
      <Header />
      {this.renderScreen()}
      </View>
    );
  }
}

export default App;