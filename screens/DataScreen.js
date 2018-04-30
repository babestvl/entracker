import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';
import { List, ListItem } from "react-native-elements";
import { Ionicons } from '@expo/vector-icons';
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

  _keyExtractor = (item, index) => index;

  render() {
    if (this.state.loading) return null;
    return (
      <List>
        <FlatList
          data={this.state.data}
          renderItem={({item, index}) => (
              <ListItem
                title={`Data${index+1}`}
                subtitle={item.date}
              /> 
            )}
          keyExtractor={this._keyExtractor}
        />
      </List>
    );
  }
}

export default DataScreen;
