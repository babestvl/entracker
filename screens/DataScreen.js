import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';
import { List, ListItem } from "react-native-elements";
import firebase from 'firebase';
import styles from '../styles';
import { callbacks } from '../utils';
import { storage, personal } from '../storage';

class DataScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true
    }
  }

  fetchData() {
    userId = firebase.auth().currentUser.uid;
    let dataRef = firebase.database().ref('users/' + userId);
    dataRef.once('value').then(snapshot => {
      snapshot.forEach((childSnapshot) => {
        if (childSnapshot.key === 'data') {
          childSnapshot.forEach((child) => {
            this.state.data.push(child.val());
            storage.push(child.val());
          })
        } else if (childSnapshot.key === 'gender') {
          personal.gender = childSnapshot.val();
        } 
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

  renderHeader = () => {
    return <Text style={styles.header3}>Your Data</Text>
  }

  render() {
    if (this.state.loading) return null;
    return (
        <List containerStyle={{marginTop: 0}}>
          <FlatList
            data={this.state.data}
            renderItem={({item, index}) => (
                <ListItem
                  onPress={() => {
                    this.props.navigation.navigate('Details', {
                      index: index,
                      date: item.date
                    });
                  }}
                  title={`Data${index+1}`}
                  subtitle={item.date}
                /> 
              )}
            keyExtractor={this._keyExtractor}
            ListHeaderComponent={this.renderHeader}
          />
        </List>
    );
  }
}


export default DataScreen;
