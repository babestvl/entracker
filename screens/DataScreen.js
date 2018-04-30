import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';
import { ListItem } from "react-native-elements";
import firebase from 'firebase';
import styles from '../styles';
import { callbacks } from '../utils';

class DataScreen extends Component {
  constructor(props) {
    super(props);
    console.ignoredYellowBox = [
      'setting a timer'
    ];
    this.state = {
      data: [],
      loading: true
    }
  }

  fetchData() {
    userId = firebase.auth().currentUser.uid;
    let dataRef = firebase.database().ref('users/' + userId + '/data');
    dataRef.once('value').then(snapshot => {
      snapshot.forEach((childSnapshot) => {
        this.state.data.push(childSnapshot.val());
      });
    })
    .then(() => {
      this.setState({loading: false});
    });
  }

  updateData = () => {
    this.setState({data: [], loading: true})
    this.fetchData();
  }

  componentDidMount() {
    this.fetchData();
    callbacks.updateData = this.updateData;
  }

  render() {
    if (this.state.loading) return null;
    return (
      <View>
        {
          this.state.data.map((l, i) => (
            <ListItem
              key={i}
              title={`Data${i+1}`}
              subtitle={l.date}
            />
          ))
        }
      </View>
    );
  }
}

export default DataScreen;
